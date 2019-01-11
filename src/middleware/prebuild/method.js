import { render } from '@rndm/render';
import { zipObjectDeep, merge, identity, set } from 'lodash';
import getSettable from './_utils/getSettable';
import getRenderer from './_utils/getRenderer';
import PROJECT_KEY from '../../_constants/PROJECT_KEY';

const method = ({ buildType = 'component', type, rndm }) => {

  const renderer = getRenderer(buildType);

  const value = ({ setters = {}, props = {}, settersFirst }) => {
    const keys = Object.keys(setters);
    const values = Object.values(setters);
    const set = zipObjectDeep(keys, values);
    const mergers = settersFirst ? [set, props] : [props, set];
    const output = merge({}, rndm, ...mergers);
    return render(output, renderer);
  };

  const settable = getSettable(buildType);

  set(settable, `${PROJECT_KEY}.${type}`, value);

  return identity;
};

export default method;

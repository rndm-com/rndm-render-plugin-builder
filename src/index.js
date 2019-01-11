import { use } from '@rndm/render';
import middleware from './middleware';
import key from './_constants/PROJECT_KEY';

const plugin = {
  key,
  middleware,
};

use(plugin);

export default plugin;

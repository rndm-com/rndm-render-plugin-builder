import { components, methods } from '@rndm/render';

const getSettable = (buildType) => {
  switch (buildType) {
    case 'method': return methods;
    default: return components;
  }
};

export default getSettable;

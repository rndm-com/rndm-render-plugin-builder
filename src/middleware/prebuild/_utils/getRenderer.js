const getRenderer = (buildType) => {
  switch (buildType) {
    case 'method': return 'RNDM.functionChain';
    default: return 'RNDM.core';
  }
};

export default getRenderer;

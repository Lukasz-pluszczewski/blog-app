const resultSelector = reducerName => (state, actionName) => state[reducerName].result[actionName];

export const blogSelector = resultSelector('blog');

export default resultSelector;

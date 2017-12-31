import apiClient from 'services/apiClient';
import tokenService from 'services/tokenService';

const breezeDefinitions = {
  blog: {
    getPosts: {
      type: 'better-promise',
      async: ({ search, tag } = {}) => apiClient.getPosts({ search, tag }),
      result: {
        posts: { source: 'result.body', initial: [], default: [] },
      },
    },
    addPost: {
      type: 'better-promise',
      async: data => apiClient.addPost(data),
    },
    editPost: {
      type: 'better-promise',
      async: ({ id, data }) => apiClient.editPost({ id, data }),
    },
    getPost: {
      type: 'better-promise',
      async: ({ id }) => apiClient.getPost(id),
      result: {
        post: { source: 'result.body', initial: null, default: null },
      },
    },
    deletePost: {
      type: 'better-promise',
      async: ({ id }) => apiClient.deletePost(id),
    },
  },
  auth: {
    login: {
      type: 'better-promise',
      async: ({ username, password }) => apiClient.login({ username, password }),
      result: {
        authDetails: { source: action => tokenService.decodeTokenData(action.result.body.token), initial: {} },
      },
    },
    setToken: {
      type: 'default',
      result: {
        authDetails: { source: 'payload', initial: {} },
      },
    },
    logout: {
      type: 'better-promise',
      sync: () => tokenService.removeToken(),
      result: {
        authDetails: { source: 'result', default: {} },
      },
    },
  },
};

export default breezeDefinitions;

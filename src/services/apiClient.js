import client from './client';
import config from 'constants/config';

const formatUrl = path => {
  const { protocol, host, port, apiVersion } = config.apiClient;
  let url = '';
  if (protocol) {
    url += `${protocol}://`;
  }
  if (host) {
    url += host;
  }
  if (port) {
    url += `:${port}`;
  }
  if (apiVersion) {
    url += `/v${apiVersion}`;
  }
  return `${url}/${path.replace(/^\//, '')}`;
};

const request = (method, path, { data, params } = {}) => client[method](formatUrl(path), { data, params });

const ApiClient = {
  // blog
  getPosts({ search, tag }) {
    return request('get', 'posts', { params: { search, tag } });
  },
  getPost(id) {
    return request('get', `posts/${id}`);
  },
  addPost(data) {
    return request('post', 'posts', { data });
  },
  editPost({ id, data }) {
    return request('patch', `posts/${id}`, { data });
  },
  deletePost(id) {
    return request('del', `posts/${id}`);
  },

  // login
  login({ username, password }) {
    return request('post', 'login', { data: { username, password } });
  },
};

export default ApiClient;

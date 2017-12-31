import jwtDecode from 'jwt-decode';
import moment from 'moment';
import config from 'constants/config';
import storage from 'services/storage';

const tokenService = {
  encode(data) {
    return JSON.stringify(data || {});
  },
  decode(string) {
    return string ? JSON.parse(string) : {};
  },
  decodeTokenData(token) {
    const decoded = jwtDecode(token);
    return token
      ? {
        token,
        expired: moment.unix(decoded.exp).isBefore(),
        ...decoded,
      }
      : {};
  },
  updateToken(token) {
    const tokenData = tokenService.encode((tokenService.decodeTokenData(token)));
    storage.save(config.auth.storageFieldName, tokenData);
    return tokenData;
  },
  loadAuth() {
    return tokenService.decode(storage.load(config.auth.storageFieldName));
  },
  removeToken() {
    storage.remove(config.auth.storageFieldName);
  },
};

export default tokenService;

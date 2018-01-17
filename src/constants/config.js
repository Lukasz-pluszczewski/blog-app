export default {
  apiClient: {
    protocol: process.env.API_PROTOCOL || 'http',
    host: process.env.API_HOST || 'localhost',
    port: process.env.API_PORT || 8080,
    apiVersion: process.env.API_VERSION || 1,
  },
  auth: {
    header: 'jwt',
    storageFieldName: 'auth',
  },
  formBackup: {
    backupName: 'philosophyBlog',
    numberOfCopies: 10,
  },
};

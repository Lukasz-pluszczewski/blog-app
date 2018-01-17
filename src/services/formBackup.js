import storage from 'services/storage';
import config from 'constants/config';

const formBackup = {
  getStorageFieldName() {
    return config.formBackup.backupName;
  },
  save(backup) {
    storage.save(formBackup.getStorageFieldName(), JSON.stringify(backup));
  },
  load() {
    return JSON.parse(storage.load(formBackup.getStorageFieldName()));
  },
  add(formName, data) {
    const backup = formBackup.get() || {};
    if (!backup[formName] || !Array.isArray(backup[formName])) {
      backup[formName] = [data];
    } else {
      if (backup[formName].length >= config.formBackup.numberOfCopies) {
        backup[formName].shift();
      }
      backup[formName].push(data);
    }
    formBackup.save(backup);
  },
  get(formName) {
    const backup = formBackup.load() || {};
    return formName ? backup[formName] : backup;
  },
  clear() {
    storage.remove(formBackup.getStorageFieldName());
  },
  getRecent(formName) {
    if (!formName) {
      console.error(`You must provide name of the form. Here's the list: [${Object.keys(formBackup.get()).join(', ')}]`);
    }
    const backup = formBackup.get(formName);
    return backup[backup.length - 1];
  },
};

export default formBackup;

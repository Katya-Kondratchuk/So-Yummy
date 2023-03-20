const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    return null;
  }
};

const get = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return null;
  }
};

const remove = key => {
  try {
    return localStorage.removeItem(key);
  } catch (error) {
    return null;
  }
};

const saveArrayItemToStorage = (key, item) => {
  let storageData = get(key) || [];
  storageData = [...storageData, item];
  save(key, storageData);
};

const deleteArrayItemFromStorage = (key, id) => {
  let storageData = get(key);
  storageData = storageData.filter(data => data.id !== id);
  save(key, storageData);
};

const storageServises = {
  get,
  save,
  remove,
  saveArrayItemToStorage,
  deleteArrayItemFromStorage,
};

export default storageServises;

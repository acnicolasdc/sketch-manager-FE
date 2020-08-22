export const getStorage = (key) => {
  return new Promise((resolve, rejects) => {
    try {
      const response = localStorage.getItem(key.toString());
      if(!response) return resolve(false);
      return resolve(response);
    } catch (error) {
      rejects(error);
    }
  })
}

export const setStorage = (key, value) => {
  let dataToSave = value;
  if(typeof dataToSave == 'object') dataToSave = JSON.stringify(dataToSave);
  const response = localStorage.setItem(key, dataToSave)
  if(!response) return false;
  return response;
}

export const deleteStorage = (key) => {
  localStorage.removeItem(key.toString())
  const response = localStorage.getItem(key.toString());
  if(!response) return false;
  return true;
}

export const clearStorage = () => {
  localStorage.clear();
  return true;
}
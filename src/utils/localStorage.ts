export const getStorage = (key:string):string|boolean => {
  const response = localStorage.getItem(key.toString());
  if(!response) return false;
  return response;
}

export const setStorage = (key:string, value:any) => {
  let dataToSave = value;
  if(typeof dataToSave == 'object') dataToSave = JSON.stringify(dataToSave);
  localStorage.setItem(key, dataToSave)
}

export const deleteStorage = (key:string):string|boolean => {
  localStorage.removeItem(key.toString())
  const response = localStorage.getItem(key.toString());
  if(!response) return false;
  return true;
}

export const clearStorage = () => {
  localStorage.clear();
  return true;
}
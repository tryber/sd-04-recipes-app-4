export const saveToLocalStorage = (key, entry) => {
  let formattedEntry = entry;
  console.log(key, entry);

  if (typeof entry === 'object') {
    formattedEntry = JSON.stringify(entry);
  }
  localStorage.setItem(key, formattedEntry);
};

export const loadFromLocalStorage = (key) => {
<<<<<<< HEAD
  if (key === 'ranking') return JSON.parse(localStorage.getItem(key));
  if (key === 'inProgressRecipe') return JSON.parse(localStorage.getItem(key));
=======
  if (key === 'user') return JSON.parse(localStorage.getItem(key));

>>>>>>> 5361d7e1b7eb928fcdbbfd0be6e5d55bfc60f360
  return localStorage.getItem(key);
};

export const deleteFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

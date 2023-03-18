import axios from 'axios';

export const getAllRecipes = async (page, limit, sort = '') => {
  try {
    const { data } = await axios.get(
      `/recipes?page=${page}&limit=${limit}&sort=${sort}`,
    );
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getRecipeById = async id => {
  try {
    const { data } = await axios.get(`/recipes/id/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getAllCategories = async () => {
  try {
    const { data } = await axios.get(`/recipes/category/list`);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getCategorieRecipes = async (
  category = '',
  page = 1,
  limit = 12,
) => {
  try {
    const { data } = await axios.get(
      `/recipes/category/${category}?page=${page}&limit=${limit}`,
    );
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const patchRecipeFavoriteById = async id => {
  try {
    const { data } = await axios.patch(`/recipes/favorite/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const patchRecipeLikeById = async id => {
  try {
    const { data } = await axios.patch(`/recipes/like/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getAllFavorite = async (page, limit) => {
  try {
    const { data } = await axios.get(
      `/recipes/favorite?page=${page}&limit=${limit}`,
    );
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const postUserInfo = async info => {
  try {
    const { data } = await axios.post(`/user-info/set-user-info`, info);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getShoppingList = async () => {
  try {
    const { data } = await axios.get(`/user-info/shopping-list`);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const postShoppingList = async info => {
  try {
    const { data } = await axios.post(`/user-info/shopping-list`, info);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const patchShoppingList = async info => {
  try {
    const { data } = await axios.patch(`/user-info/shopping-list`, info);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const deleteShoppingList = async id => {
  try {
    const { data } = await axios.delete(`/user-info/shopping-list/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getIngregientsList = async () => {
  try {
    const { data } = await axios.get(`/recipes/ingredients`);
    return data.ingredients;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getSearchByTitle = async (query, page, limit, sort) => {
  try {
    const { data } = await axios.get(
      `/recipes/title/${query}?page=${page}&limit=${limit}&sort=${sort}`,
    );
    return data.ingredients;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getSearchByIngredients = async (query, page, limit, sort) => {
  try {
    const { data } = await axios.get(
      `/recipes/ingredient/${query}?page=${page}&limit=${limit}&sort=${sort}`,
    );
    return data.ingredients;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const addOwnRecipe = async formData => {
  try {
    const { data } = await axios.post(`/own-recipes`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    console.log(error.message);
    return { error };
  }
};

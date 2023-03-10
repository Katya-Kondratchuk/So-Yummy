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
    const { data } = await axios.get(`/recipes/${id}`);
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

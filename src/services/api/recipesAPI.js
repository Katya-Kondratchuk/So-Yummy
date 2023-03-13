import axios from 'axios';

export const getAllRecipes = async (page = 1, limit = 12, sort = '') => {
  try {
    const { data } = await axios.get(
      `/recipes?page=${page}&limit=${limit}&sort=${sort}`,
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
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
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

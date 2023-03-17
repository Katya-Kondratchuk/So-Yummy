import axios from 'axios';

export const getAllMyRecipe = async (page, limit, sort = '') => {
  try {
    const { data } = await axios.get(
      `/myrecipes?page=${page}&limit=${limit}&sort=${sort}`,
    );
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}


export const patchMyRecipeById = async id => {
  try {
    const { data } = await axios.patch(`/myrecipes/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
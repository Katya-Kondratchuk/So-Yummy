export const createObjErrorResipeForm = (acc, curr) => {
  if (curr.path.includes('].')) {
    const el = curr.path;
    const currPath = el.slice(0, el.indexOf('['));
    const index = +el.slice(el.indexOf('[') + 1, el.indexOf(']'));
    if (!acc[currPath]) {
      acc[currPath] = [];
    }
    acc[currPath][index] = curr.message;
  } else {
    acc[curr.path] = curr.message;
  }
  return acc;
};

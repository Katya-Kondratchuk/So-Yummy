function warningValidation(value) {
  const regex = /[A-Z-А-Я-ЩЬЮЯЇІЄҐ]/;
  return regex.test(value);
}

export default warningValidation;

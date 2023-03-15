function warningValidation(value) {
  const regex = /[A-Z-А-Я-ЩЬЮЯЇІЄҐ0-9]/;
  return regex.test(value);
}

export default warningValidation;

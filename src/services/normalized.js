export const normalizeName = name =>
  name
    .split(' ')
    .map(word => {
      const firstUpCaseLetter = word.charAt(0).toUpperCase();
      const anoterLetter = word.substring(1);
      return `${firstUpCaseLetter}${anoterLetter}`;
    })
    .join(' ');

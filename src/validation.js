export const getTouchedValidEmail = (isValidEmail, touched) => {    
  switch(true) {
    case isValidEmail && touched:
      return `green`;
    case !isValidEmail && touched:
      return `red`;
    default:
      return ``;
  }          
};

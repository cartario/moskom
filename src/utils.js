export const validationSchema = (form) => {
  return {
    allFieldsFulled: Object.values(form).every((value)=>Boolean(value)),
    isValidEmail: !!form.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
    isValidName: !!form.name.match(/^[a-zA-Z][a-zA-Z0-9-_\.]{3,40}$/),
    isValidPassword: !!form.password.match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,32}$/),
    isValidCheckPass: Boolean(form.checkPassword && form.password === form.checkPassword && 
      form.checkPassword !== form.email && form.checkPassword !== form.name),        
  }
};

export const getMessage = (password, inCase, touched) => {
  switch(true) {
    case inCase:
      return `success`
    case password && !inCase:
      return `error`
    case touched && !inCase:
      return `error`
    default:
  return `default`      
  }
};

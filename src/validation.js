
export const getValidPassword = (value) => {
  if(value){
        
    const str = value[0].match(/[a-zA-Z]/) || [];
    const hasFirstLetter = Boolean(str[0]);
    const hasNumber = Boolean(value.match(/[0-9]/));
    const hasKirilic = Boolean(value.match(/[А-Яа-я]/));

    const isValidName = (hasNumber) && (hasFirstLetter) && (!hasKirilic);

 return {hasFirstLetter, hasKirilic, hasNumber}
    // console.log(isValidName);
  }

  return {};
};

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

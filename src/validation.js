
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


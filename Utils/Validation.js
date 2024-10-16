const pattern =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export function EmailValidator(email) {
  const lowerCaseEmail = email.toLowerCase();
  return pattern.test(lowerCaseEmail);
}

export function FullNameValidator(fullname) {
  console.log(fullname);

  if (fullname.length >= 6 && fullname.length < 12) {
    return true;
  } else {
    return false;
  }
}

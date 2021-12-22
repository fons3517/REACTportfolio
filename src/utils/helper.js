//No leading, trailing, or consecutive dots
//Both the local part and the domain name can contain one or more dots, but no two dots can appear right next to each other.
//Furthermore, the first and last characters in the local part and in the domain name must not be dots:

export default function emailValidation(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
} 
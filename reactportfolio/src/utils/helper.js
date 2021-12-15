//No leading, trailing, or consecutive dots
//Both the local part and the domain name can contain one or more dots, but no two dots can appear right next to each other.
//Furthermore, the first and last characters in the local part and in the domain name must not be dots:

const emailValidation = ^ [A - Z0 -9_!#$ %& '*+/=?`{|}~^-]+(?:\.[A-Z0-9_!#$%&' * +/=?`{|}~^-]+↵)*@[A - Z0 - 9 -]+(?: \.[A - Z0 - 9 -] +)* $
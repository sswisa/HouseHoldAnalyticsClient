export enum ValidatorTypes {
  required = 'required',
  minLength = 'minLength',
  maxLength = 'maxLength',
  pattern = 'pattern',
  email = 'email'
}

export enum FormFieldType {
  text = 'text',
  number = 'number',
  password = 'password',
  email = 'email',
  array = 'array'
}

export enum TextField {
  minLength = 2,
  maxLength = 15
}

export enum PersonFormControlNames {
  firstname = 'firstname',
  lastname = 'lastname'
}

export enum FormControlNames {
  array = "array",
  email = "email",
  phone = "phone",
  nickname = "nickname",
  autoComplete = "autoComplete",
  state = "state",
  country = "country",
  city = "city",
  street = "street",
  zip = "zip",
  method = "method",
  paymentType = "paymentType",
  currency = "currency",
  amount = "amount",
  cardType = "cardType",
  last4Digits = "last4Digits",
  date = "date",
  subTotal = "subTotal",
  tax = "tax",
  tip = "tip",
  total = "total",
  price = "price",
  name = "name",
  isRefund = "isRefund",
  onWatchList = "onWatchList",
  severity = "severity",
  categories = "categories"
}

export enum EntityTypes {
  person = "person",
  vendor = "vendor",
  address = "address",
  card = "card",
  payment = "payment",
  transaction = "transaction",
  item = "item"
}

export enum MatStepperNames {
  addTransactionStepper = 'addTransactionStepper'
}

export enum Patterns {
  onlyLetters = "^[a-zA-Z]+$",
  onlyLettersWithSpaces = "^[a-zA-Z\\s]+$",
  onlyDigits = "^[0-9]+$",
  numberWithDecimal = "^-?[0-9]+(\.[0-9]{1,2})?$",
  numbersLettersBaiscSigns = "[- ,()0-9a-zA-z]+"
}

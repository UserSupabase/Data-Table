export interface NameUser {
  first: string;
  last: string;
}

export interface User {
  _id?: string;
  amount: string;
  type: string;
  name: NameUser;
  company: string;
  email: string;
  phone: string;
  address: string;
}

export enum Type {
  INCOME = 'income',
  OUTCOME = 'outcome',
  LOAN = 'loan',
  INVESTMENT = 'investment',
}

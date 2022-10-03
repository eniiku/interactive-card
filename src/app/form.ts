export interface Form {
  name: string;
  number: number;
  cvc: number;
  date: {
    month: number;
    year: number;
  };
}

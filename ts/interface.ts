interface IStringGenerator {
  (msg: string): void
}

interface IBook {
  first: string;
  second?: number;
  printMsg?: IStringGenerator;
  [propName: string]: any;
}

const someBook: IBook = {
  first: 'wer',
  printMsg: (msg) => console.log(msg),
  df: 43
}





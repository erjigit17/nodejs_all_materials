enum Category {JavaScript, CSS, HTML, TypeScript, React}

type Book = {
  id: number;
  title: string;
  category: Category;
  author: string;
  available: boolean;
}


function getAllBooks(): readonly Book[] {
  const books = <const> [
    {id: 1, title: 'REfdf', category: Category.CSS, author: 'DF', available: true},
    {id: 2, title: 'wergvfedcjn', category: Category.HTML, author: 'DFxcv', available: false},
    {id: 3, title: ',nmsv jke', category: Category.JavaScript, author: 'dfgdv', available: true},
    {id: 4, title: 'm, cejk', category: Category.TypeScript, author: 'dfgds', available: true},
  ]

  return books
} 

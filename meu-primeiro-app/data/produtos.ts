interface Produto {
    id: string;
    titulo: string;
    imagem: string;
    preco: number;
  }
  
 export const produtos: Produto[] = [
    { id: '1', titulo: 'Tênis Runner', imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4ggbYfm6sHL963tZ5UQDU5hAZk7qV8gZ67X63hz8mQ&s' , preco: 299 },
    { id: '2', titulo: 'Mochila Trail', imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sMZGRIq6U8f4y5XceFsC1Svqmxh644Qy-bWWlbKvfA&s=10' , preco: 189 },
    { id: '3', titulo: 'Garrafa Térmica', imagem:'https://lojaibyte.vtexassets.com/arquivos/ids/430199/garrafa-termica-gt-thermos-lilas-500-ml-001-min.jpg?v=638551946307600000' , preco: 79 },
    { id: '4', titulo: 'Fone de Ouvido', imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVssMyw0NWOQxVIYB45Lfk43HJQqc3oi3fS2B8yPpwpw&s=10' , preco: 79.99 },
    { id: '5', titulo: 'Camisa', imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNRjoGd89VOQz3jdMMa1BeNGeb-I17piRML3EPNf5lAA&s=10' , preco: 120.99 },
  ]
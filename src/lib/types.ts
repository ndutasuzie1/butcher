export type Product = {
  id: string;
  name: string;
  category: 'Pork' | 'Beef' | 'Poultry' | 'Lamb';
  description: string;
  price: number;
  imageId: string;
};

export type CutOfTheWeek = {
  productId: string;
  promoPrice: number;
};

export type BlogPost = {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  imageId: string;
};

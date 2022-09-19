export interface IRating {
  rate: number;
  count: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
}

export enum ThemeEnum {
  DARK = 'dark',
  LIGHT = 'light',
}

export type ICategory = string;

export interface IFilterCategory {
  id: string,
  name: string,
}
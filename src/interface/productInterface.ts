export interface IProduct {
  id: string,
  name: string,
  code: string,
  category: string,
  type: string,
  popularity: number,
  quality: IPriceCategory,
  colors: string[],
  characteristics: {
    size: {
      width: number,
      height: number,
      length: number
    },
    other: string
  },
  imgs: string[],
  about: string
}

export interface ICardProduct {
  id: string,
  name: string,
  code: string,
  category: string,
  price: number,
  colors: string[],
  img: string
}

export interface IPriceCategory {
  king: number,
  queen: number,
  twin: number,
  standart: number
}

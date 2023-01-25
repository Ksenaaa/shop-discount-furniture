export interface INews {
  id: string,
  name: string,
  text: string,
  pictures: {
    img1: {
      img: string,
      name: string
    },
    img2: {
      img: string,
      name: string
    },
    img3: {
      img: string,
      name: string
    }
  }
}

export interface IMainNews {
  id: string,
  name: string,
  img: string
}

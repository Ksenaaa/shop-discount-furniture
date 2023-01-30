export const getBlurImage = (img: string) =>
  `/_next/image?url=${process.env.NEXT_PUBLIC_API_URL}/${img}&w=16&q=1`

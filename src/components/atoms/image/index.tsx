import Image, { ImageLoaderProps, ImageProps } from 'next/image'

const cloudflareImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  if (!quality) {
    quality = 75
  }
  return `https://images.viniciusghellere.workers.dev?width=${width}&quality=${quality}&image=https://www.universal-converter.org${src}`
}

const Img = ({ alt, ...props }: ImageProps) => {
  if (process.env.NODE_ENV === 'development') {
    return <Image unoptimized={true} alt={alt || ''} {...props} />
  } else {
    return <Image alt={alt || ''} {...props} loader={cloudflareImageLoader} />
  }
}

export default Img

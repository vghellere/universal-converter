import Image, { ImageLoaderProps, ImageProps } from 'next/image';

const cloudflareImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  const imgQuality = quality || 75;
  return `https://images.viniciusghellere.workers.dev?width=${width}&quality=${imgQuality}&image=https://www.universalconverter.org${src}`;
};

const Img = ({ alt, ...props }: ImageProps) => {
  if (process.env.NODE_ENV === 'development') {
    return <Image unoptimized alt={alt || ''} {...props} />;
  }
  return <Image alt={alt || ''} {...props} loader={cloudflareImageLoader} />;
};

export default Img;

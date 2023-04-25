import type { ImageProps, StaticImageData } from 'next/image';
import Image from 'next/image';
interface CustomizableImageProps extends ImageProps {
    src: string | StaticImageData;
    alt: string;
    width: number;
    height: number;
  }
  
  function CustomizableImage({ src, alt, width, height}: CustomizableImageProps) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    );
  }
  export default CustomizableImage;
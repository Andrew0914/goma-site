import Image, { ImageProps } from "next/image";

export default function HImage(props: ImageProps) {
  const grayishTransparentDataURL = () =>
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/6Gf8lsAAAAASUVORK5CYII=";

  return (
    <Image
      {...props}
      placeholder="blur"
      blurDataURL={grayishTransparentDataURL()}
      style={{ maxWidth: "100%" }}
    />
  );
}

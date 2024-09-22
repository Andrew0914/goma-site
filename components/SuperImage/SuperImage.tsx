import classNames from "classnames";
import Image, { ImageProps } from "next/image";
import styles from "./styles.module.scss";
import { Chip } from "@mui/material";
import HImage from "../HImage/HImage";

export interface SuperImageProps extends ImageProps {}

export default function SuperImage(props: SuperImageProps) {
  const imageClasses = classNames(props.className, styles.superImage_image);

  return (
    <figure className={styles.superImage}>
      <HImage
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        className={imageClasses}
      />
      <figcaption className={styles.superImage_caption}>
        <Chip label={props.alt} className={styles.superImage_chip} />
      </figcaption>
    </figure>
  );
}

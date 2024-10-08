import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Code from "@/components/Code/Code";
import { Button } from "@mui/material";
import { GitHub as GithubIcon } from "@mui/icons-material";
import VideoPreview from "@/components/VideoPreview/VideoPreview";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Button,
    h1: (props) => <h1 className="heading--1 text--secondary" {...props} />,
    h2: (props) => <h2 className="heading--2" {...props} />,
    h3: (props) => <h3 className="heading--3" {...props} />,
    h4: (props) => <h4 className="heading--4" {...props} />,
    h5: (props) => <h5 className="heading--5" {...props} />,
    p: (props) => <p className="text--content" {...props} />,
    ul: (props) => <ul className="text" {...props} />,
    Image,
    code: (props: any) => (<Code {...props} />) as unknown as any,
    strong: (props) => (
      <strong className="text--content-bold text--info" {...props} />
    ),
    a: (props) => (
      <a className="text--link text--underline" target="_blank" {...props} />
    ),
    small: (props) => <small className="text--sm text--primary" {...props} />,
    GithubIcon: () => <GithubIcon fontSize="small" />,
    VideoPreview,
    Link,
  };
}

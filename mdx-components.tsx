import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Code from "@/components/Code/Code";
import { Button } from "@mui/material";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Button,
    h1: (props) => <h1 className="heading--1" {...props} />,
    h2: (props) => <h2 className="heading--2" {...props} />,
    h3: (props) => <h3 className="heading--3" {...props} />,
    h4: (props) => <h4 className="heading--4" {...props} />,
    h5: (props) => <h5 className="heading--5" {...props} />,
    p: (props) => <p className="text--content" {...props} />,
    Image,
    code: Code,
  };
}

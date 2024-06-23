"use client";

import useInViewElement from "@/hooks/useInViewElement/useInViewElement";
import React, { ReactHTML, ReactNode } from "react";

interface InViewElementProps extends React.PropsWithChildren {
  tag: keyof ReactHTML;
  props?: React.HTMLAttributes<ReactHTML>;
}

export default function InViewElement({
  tag,
  children,
  props = {},
}: InViewElementProps) {
  const { scope: ref } = useInViewElement();

  return React.createElement(tag, { ref, ...props }, children);
}

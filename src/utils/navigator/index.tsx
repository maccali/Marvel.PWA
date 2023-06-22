/* eslint-disable jsx-a11y/anchor-is-valid */
"use client"

import React, { ReactNode, useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ClipLoader } from "react-spinners";

import styles from "./styles.module.css";

type NavigatorFace = {
  title: string;
  identifier?: string;
  type?: "button" | "submit" | "reset" | undefined;
  style?:
  | "general-icon-text"
  | "general-icon"
  | "general-text"
  | "general-linked-text"
  | "menu-vertical-icon-text"
  | "menu-icon"
  | "card-icon";
  children: ReactNode;
  href?: string;
  action?: (() => void) | ((e: any) => void);
  load?: boolean;
  loadColor?: string;
  disabled?: boolean;
  target?: string;
  className?: string;
  rel?: string;
};

function Navigator({
  title,
  identifier,
  type,
  style,
  children,
  href,
  action,
  load,
  loadColor,
  disabled,
  target,
  className,
  rel,
}: NavigatorFace) {
  const ref = useRef(null);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  function hrefReplace(href: string) {
    window.location.href = href;
  }

  useEffect(() => {
    ref.current ? setWidth(ref.current.offsetWidth) : 0;
    ref.current ? setHeight(ref.current.offsetHeight) : 0;
  }, [ref.current]);

  interface IClasses {
    id: string | undefined;
    "data-cy": string | undefined;
    title: string;
    className: string | undefined;
    target: string | undefined;
    rel: string | undefined;
    disabled: boolean | undefined;
    href: string | undefined;
    onClick: (() => void) | ((e: any) => void) | undefined;
    ref: any;
    type: "button" | "submit" | "reset" | undefined;
  }

  const dataClass: IClasses = {
    id: identifier,
    "data-cy": identifier,
    title,
    className,
    target,
    rel,
    disabled,
    href,
    onClick: undefined,
    ref,
    type,
  };

  if (style) {
    dataClass.className = styles[style];
  } else {
    dataClass.className = className ? className : "";
  }

  if (style && className) {
    dataClass.className = styles[style] + " " + className
  }

  if (href) {
    dataClass.href = href;
  } else {
    dataClass.onClick = () => (href ? hrefReplace(href) : action ? action : "");
  }

  if (target) {
    dataClass.target = target;
    dataClass.rel = rel ? rel : target ? "noopener noreferrer" : "";
  }

  if (action) {
    dataClass.onClick = action;
  }

  if (load) {
    return (
      <>
        <div
          className={styles.load}
          style={{
            width: Number(width),
            height: Number(height),
          }}
        >
          <ClipLoader
            size={23}
            color={loadColor ? loadColor : "var(--primary-color)"}
          />
        </div>
      </>
    );
  }

  if (href) {
    return (
      <Link {...dataClass} href={href} >
        {children}
      </Link>
    );
  } else {
    return (
      <>
        <button {...dataClass}>{children}</button>
      </>
    );
  }
}

export default Navigator;

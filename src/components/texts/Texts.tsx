import React from "react";
import "./texts.css";

type textProps = {
  type: 'p' | 'h1' | 'h2',
  name ?: string,
  children: string
};

function Text(props: textProps): JSX.Element {
  return (
    <props.type className={props.name}>
      {props.children}
    </props.type>
  )
};

export {Text};
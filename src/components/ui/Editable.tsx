"use client";

import { saveToDb } from "@notes/utils";
import {
  ChangeEvent,
  EventHandler,
  FormEventHandler,
  useRef,
  useState,
} from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

export default function Editable({
  text,
  className,
  id,
  name = "body",
}: {
  id: string;
  name: "title" | "body" | "tag";
  text: string;
  className?: string;
}) {
  const contentEditable = useRef(null);
  const [state, setState] = useState({
    html: text,
  });

  const handleChange = async (event: ContentEditableEvent) => {
    setState({ html: event.target.value });
    const res = await saveToDb(id, { [name]: event.target.value });
  };

  return (
    <ContentEditable
      className={`outline-none ${className}`}
      innerRef={contentEditable}
      html={state.html}
      disabled={false}
      onChange={handleChange}
    />
  );
}

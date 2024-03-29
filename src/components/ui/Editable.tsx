"use client";

import { editNote } from "@notes/utils";
import { EditableNoteFieldsKeys } from "@notes/utils/types";
import { useRef, useState } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import debounce from "lodash.debounce";
import useDebounce from "@notes/utils/useDebounce";

export default function Editable({
  text,
  className,
  id,
  name = "body",
}: {
  id: string;
  name: EditableNoteFieldsKeys;
  text: string;
  className?: string;
}) {
  const contentEditable = useRef(null);
  const [state, setState] = useState({
    html: text,
  });
  const _text = useRef(text);

  const handleChange = async (event: ContentEditableEvent) => {
    _text.current = event.target.value;
    const res = await editNote(id, { [name]: _text.current });
    console.log(res.message);
  };
  const debouncedHandleChange = debounce(handleChange, 500);

  return (
    <ContentEditable
      className={`outline-none ${className}`}
      innerRef={contentEditable}
      html={_text.current}
      disabled={false}
      onChange={debouncedHandleChange}
    />
  );
}

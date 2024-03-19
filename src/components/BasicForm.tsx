"use client";

import { createNote } from "@notes/app/actions";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  message: "",
};

interface BasicFormProps {
  submitForm?: (() => Promise<void>) | ((formData: FormData) => Promise<void>);
}

const BasicForm = ({ submitForm }: BasicFormProps) => {
  return (
    <div className="w-2/4">
      <h1 className="text-2xl font-bold mb-1 text-red-500">Create a note</h1>
      <form action={submitForm} className="grid items-center gap-1">
        <label>Title</label>
        <input
          name="title"
          className="w-full border border-red-300 px-1 py-2 outline-red-600"
        />
        <label>Body</label>
        <textarea
          name="body"
          className="w-full border border-red-300 px-1 py-2 outline-red-600"
        />
        <label>Tag</label>
        <input
          name="tag"
          className="w-full border border-red-300 px-1 py-2 outline-red-600"
        />
        <button className="w-full bg-red-200 py-2 mt-2 hover:bg-red-100 text-red-500">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BasicForm;

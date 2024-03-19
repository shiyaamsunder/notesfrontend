import { createNote } from "@notes/app/actions";
import BasicForm from "@notes/components/BasicForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Note",
  description: "Author a new note",
};
export default function CreateNote() {
  return <BasicForm submitForm={createNote} />;
}

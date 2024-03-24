import { Note } from "@notes/utils/types";
import Link from "next/link";
import { Chip } from "./ui/Chip";

export default function NoteCard(note: Note) {
  return (
    <Link
      href={`/notes/${note.id}`}
      className="p-3 m-3 border min-w-full sm:min-w-[520px] rounded-md shadow-sm"
    >
      <Chip>#{note.tag}</Chip>
      <h1 className="text-2xl font-bold mb-3">{note.title}</h1>
      <p>{note.body.slice(0, 20)}...</p>
    </Link>
  );
}

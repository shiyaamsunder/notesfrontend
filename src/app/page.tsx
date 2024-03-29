import NoteCard from "@notes/components/NoteCard";
import { getAllNotes } from "@notes/utils";

export default async function Home() {
  const allNotes = await getAllNotes();
  return (
    <main className="flex flex-col items-center justify-between p-4 sm:p-24">
      {allNotes.map((note) => (
        <NoteCard key={note.id} {...note} />
      ))}
    </main>
  );
}

"use client";

import NoteCard from "@notes/components/NoteCard";
import { getAllNotes } from "@notes/utils";
import { Note } from "@notes/utils/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [allNotes, setAllNotes] = useState<Note[]>();

  useEffect(() => {
    (async () => {
      const notes = await getAllNotes();
      setAllNotes(notes);
    })();
  }, []);

  return (
    <main className="flex flex-col items-center justify-between p-4 sm:p-24">
      {allNotes?.map((note) => <NoteCard key={note.id} {...note} />)}
    </main>
  );
}

"use client";
import Editable from "@notes/components/ui/Editable";
import { Chip } from "@notes/components/ui/Chip";
import ChevronLeft from "@notes/components/ui/icons/ChevronLeft";
import { getNote } from "@notes/utils";
import Link from "next/link";
import { Note } from "@notes/utils/types";
import { Suspense, useEffect, useState } from "react";

export default function Note({ params }: { params: { id: string } }) {
  const [note, setNote] = useState<Note>();

  useEffect(() => {
    (async () => {
      const _note = await getNote(params.id);
      setNote(_note);
    })();
  }, [params.id]);

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      {note && (
        <div className=" w-full sm:w-3/4 flex flex-col">
          <Link
            href={"/"}
            className="w-fit mb-8 text-slate-600 -translate-x-4 sm:-translate-x-10 px-2 rounded-md font-semibold text-sm"
          >
            <ChevronLeft />
          </Link>
          <Chip>
            #<Editable text={`${note.tag}`} id={note.id} name="tag" />
          </Chip>
          <Editable
            className="text-3xl font-bold mb-3"
            text={note.title}
            id={note.id}
            name="title"
          />
          {note.body.split("\n").map((line) => (
            <Editable name="body" key={line} text={line} id={note.id} />
          ))}
        </div>
      )}
    </Suspense>
  );
}

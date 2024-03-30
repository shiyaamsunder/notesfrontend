import {
  AllNoteResponse,
  EditableNoteFields,
  ErrorResponse,
  Note,
  NoteResponse,
} from "./types";

export async function getAllNotes(): Promise<Note[]> {
  const res = await fetch(
    `http://localhost:8080/api/v0/notes?sort=updatedAt&by=desc`,
    {},
  );

  const allNotesResponse: AllNoteResponse = await res.json();

  if (res.ok) {
    const notes = allNotesResponse?.notes;
    if (notes) {
      const unotes = notes.map((n) => ({
        ...n,
        createdAt: new Date(n.createdAt),
        updatedAt: new Date(n.createdAt),
      }));
      return unotes;
    } else {
      return Promise.reject(new Error(`Error fetching your notes ...`));
    }
  }
  return Promise.reject(new Error(`Error fetching your notes ...`));
}

export async function getNote(id: string): Promise<NoteResponse> {
  const res = await fetch(`http://localhost:8080/api/v0/notes/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function editNote(
  id: string,
  data: EditableNoteFields,
): Promise<NoteResponse> {
  const res = await fetch(`http://localhost:8080/api/v0/notes/edit/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    next: { revalidate: 0 },
  });

  if (res.status >= 500) {
    const errRes: ErrorResponse = await res.json();
    return Promise.reject(new Error(errRes.message));
  }
  const saveToDbResponse: NoteResponse = await res.json();

  return saveToDbResponse;
}

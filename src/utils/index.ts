import { AllNoteResponse, NoteResponse } from "./types";

export async function getAllNotes(): Promise<AllNoteResponse> {
  const res = await fetch(`http://localhost:8080/api/v0/notes/`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log("hello");
  return res.json();
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

export async function saveToDb<T>(id: string, data: any): Promise<T> {
  const res = await fetch(`http://localhost:8080/api/v0/notes/edit/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
  });

  const saveToDbResponse = await res.json();

  return saveToDbResponse;
}

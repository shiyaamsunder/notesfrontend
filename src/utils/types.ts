export interface NoteResponse {
  status: number;
  message: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  tag: string;
  title: string;
  body: string;
}

export interface Note {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  tag: string;
  title: string;
  body: string;
}

export interface NoteFromServer {
  id: string;
  createdAt: string;
  updatedAt: string;
  tag: string;
  title: string;
  body: string;
}

export interface AllNoteResponse {
  status: number;
  message: string;
  notes: Note[];
}

export type EditableNoteFields = Partial<Pick<Note, "title" | "body" | "tag">>;
export type EditableNoteFieldsKeys = keyof EditableNoteFields;

export interface ErrorResponse {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  path: string;
}

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

export interface AllNoteResponse {
  status: number;
  message: string;
  notes: Note[];
}

"use server";

export async function createNote(formData: FormData) {
  const data = {
    title: formData.get("title"),
    body: formData.get("body"),
    tag: formData.get("tag"),
  };
  console.log(data);
}

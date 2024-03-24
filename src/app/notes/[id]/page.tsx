import Editable from "@notes/components/ui/Editable";
import { Chip } from "@notes/components/ui/Chip";
import ChevronLeft from "@notes/components/ui/icons/ChevronLeft";
import { getNote } from "@notes/utils";
import Link from "next/link";

export default async function Note({ params }: { params: { id: string } }) {
  const data = await getNote(params.id);

  return (
    <div className=" w-full sm:w-3/4 flex flex-col">
      <Link
        href={"/"}
        className="w-fit mb-8 text-slate-600 -translate-x-4 sm:-translate-x-10 px-2 rounded-md font-semibold text-sm"
      >
        <ChevronLeft />
      </Link>
      <Chip>
        <Editable text={`#${data.tag}`} id={data.id} name="tag" />
      </Chip>
      <Editable
        className="text-3xl font-bold mb-3"
        text={data.title}
        id={data.id}
        name="title"
      />
      {data.body.split("\n").map((line) => (
        <Editable name="body" key={line} text={line} id={data.id} />
      ))}
    </div>
  );
}

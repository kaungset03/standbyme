import { Save } from "lucide-react";

const Youtube = () => {
  return (
    <article className="flex flex-col gap-y-4 p-4 min-w-96">
      <div className="flex items-center gap-x-3">
        <input
          type="text"
          className="bg-transparent border-2 border-textPrimary text-sm rounded-md flex-1 p-2 outline-none focus:outline-textPrimary placeholder:text-sm placeholder:text-textSecondary"
          placeholder="Enter the youtube playlist url"
        />
        <button className="border-2 border-textPrimary rounded-md p-1">
          <Save />
        </button>
      </div>
      <div className="w-full aspect-video relative rounded-md overflow-hidden">
        <iframe
          className="w-full h-full absolute top-0 left-0"
          src="https://youtube.com/embed/playlist?list=PL7AF1C14AF1B05894&si=brhjLUtqbspAgUum"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </article>
  );
};
export default Youtube;

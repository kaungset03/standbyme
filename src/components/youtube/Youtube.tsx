import { Play, Save } from "lucide-react";

const Youtube = () => {
  return (
    <article className="flex flex-col gap-y-4 p-4 min-w-96">
      <div className="flex items-center gap-x-3">
        <input
          type="text"
          className="bg-transparent border-2 border-textPrimary rounded-md flex-1 p-1 outline-none focus:outline-textPrimary placeholder:text-sm placeholder:text-textSecondary"
          placeholder="Enter the youtube playlist url"
        />
        <button className="border-2 border-textPrimary rounded-md p-1">
          <Save />
        </button>
      </div>
      <div className="w-full aspect-video rounded-md flex justify-center items-center border-2 border-textPrimary">
        <button className="border border-textPrimary rounded-md px-4 py-2">
          <Play />
        </button>
      </div>
    </article>
  );
};
export default Youtube;

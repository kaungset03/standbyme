import {
  Droplet,
  Flame,
  Music,
  Pause,
  SkipBack,
  SkipForward,
} from "lucide-react";

const LofiPlayer = () => {
  return (
    <article className="flex flex-col gap-y-6 pb-8">
      <div className="text-center">
        <h3 className="text-lg font-medium">Stand By Me</h3>
        <span className="text-sm">Oasis</span>
      </div>
      <ul className="flex justify-center items-center gap-x-10">
        <li>
          <button className="border-2 border-textPrimary p-2">
            <SkipBack />
          </button>
        </li>
        <li>
          <button className="border-2 border-textPrimary p-2">
            <Pause />
          </button>
        </li>
        <li>
          <button className="border-2 border-textPrimary p-2">
            <SkipForward />
          </button>
        </li>
      </ul>
      <ul className="w-4/5 mx-auto flex flex-col gap-y-5">
        <li className="flex justify-between items-center">
          <span>Volume</span>
          <button>
            <Music />
          </button>
        </li>
        <li className="flex items-center justify-between">
          <span>Rain</span>
          <button>
            <Droplet />
          </button>
        </li>
        <li className="flex items-center justify-between">
          <span>Fire</span>
          <button>
            <Flame />
          </button>
        </li>
      </ul>
    </article>
  );
};
export default LofiPlayer;

import {
  Droplet,
  Flame,
  Music,
  Pause,
  SkipBack,
  SkipForward,
} from "lucide-react";
import VolumeSlider from "./VolumeSlider";

const LofiPlayer = () => {
  return (
    <article className="flex flex-col gap-y-6 p-4 min-w-96">
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
      <ul className="w-full mx-auto flex flex-col gap-y-5 p-3">
        <li className="grid grid-cols-6 gap-3 items-center">
          <span className="text-sm font-medium">Volume:</span>
          <VolumeSlider />
          <button className="w-fit ml-auto bg-textPrimary rounded-lg p-2 text-background">
            <Music size={18} />
          </button>
        </li>
        <li className="grid grid-cols-6 gap-3 items-center">
          <span className="text-sm font-medium">Rain:</span>
          <VolumeSlider />
          <button className="w-fit ml-auto border border-textPrimary rounded-lg p-2 text-textPrimary">
            <Droplet size={18} />
          </button>
        </li>
        <li className="grid grid-cols-6 gap-3 items-center">
          <span className="text-sm font-medium">Fire:</span>
          <VolumeSlider />
          <button className="w-fit ml-auto border border-textPrimary rounded-lg p-2 text-textPrimary">
            <Flame size={18} />
          </button>
        </li>
      </ul>
    </article>
  );
};
export default LofiPlayer;

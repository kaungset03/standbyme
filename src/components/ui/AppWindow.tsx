import {
  Droplet,
  Flame,
  Music,
  Pause,
  SkipBack,
  SkipForward,
  X,
} from "lucide-react";

const AppWindow = () => {
  return (
    <section className="w-full max-w-md border-2 border-textPrimary shadow-window rounded-lg">
      <article>
        <div className="flex justify-between items-center py-2 px-3 bg-card rounded-t-lg border-b-2 border-b-textPrimary">
          <h2 className="font-semibold">Lofi Player</h2>
          <button
            className="p-1 border-2 border-textPrimary"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        <div>
          <div className="flex flex-col items-center py-4">
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
        </div>
        <ul className="w-4/5 mx-auto flex flex-col py-6 gap-y-5">
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
    </section>
  );
};
export default AppWindow;

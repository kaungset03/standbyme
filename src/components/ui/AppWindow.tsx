import { X } from "lucide-react";

type AppWindowProps = {
  children: React.ReactNode;
  title: string;
};

const AppWindow = ({ title, children }: AppWindowProps) => {
  return (
    <section className="w-full max-w-md border-2 border-textPrimary shadow-window rounded-lg flex flex-col gap-y-4">
      <div className="flex justify-between items-center py-2 px-3 bg-card rounded-t-lg border-b-2 border-b-textPrimary">
        <h2 className="font-semibold">{title}</h2>
        <button className="p-1 border-2 border-textPrimary" aria-label="Close">
          <X size={18} />
        </button>
      </div>
      {children}
    </section>
  );
};
export default AppWindow;

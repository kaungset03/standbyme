import { Globe, Music, Notebook, Timer, User } from "lucide-react";

const Footer = () => {
  return (
    <footer className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-x-8 px-8 py-3 border-2 border-textPrimary rounded-full">
      <button className="p-2 border border-textPrimary rounded-md">
        <Music />
      </button>
      <button className="p-2 border border-textPrimary rounded-md">
        <Timer />
      </button>
      <button className="p-2 border border-textPrimary rounded-md">
        <Globe />
      </button>
      <button className="p-2 border border-textPrimary rounded-md">
        <Notebook />
      </button>
      <button className="p-2 border border-textPrimary rounded-md">
        <User />
      </button>
    </footer>
  );
};
export default Footer;

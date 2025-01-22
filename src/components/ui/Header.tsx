import { BatteryMedium, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card h-16 flex justify-between items-center border-b-2 border-textPrimary px-4 md:px-8 lg:px-12">
      <h1 className="font-mono font-bold text-xl">StandByMe</h1>
      <ul className="flex gap-x-8 items-center">
        <li>
          <BatteryMedium />
        </li>
        <li className="text-sm font-medium">
          <p>Thu 23 Jan 00:47</p>
        </li>
        <li>
          <button className="border border-textPrimary p-1 rounded-full">
            <User />
          </button>
        </li>
      </ul>
    </header>
  );
};
export default Header;

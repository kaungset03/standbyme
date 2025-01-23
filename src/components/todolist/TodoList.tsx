import { Plus, Trash } from "lucide-react";

const TodoList = () => {
  const todos = [0, 1, 2, 3, 4, 5, 6];
  return (
    <article className="flex flex-col gap-y-4 p-4">
      <form className="flex items-center gap-x-3">
        <input
          type="text"
          className="bg-transparent border-2 border-textPrimary rounded-md flex-1 p-1 outline-none focus:outline-textPrimary"
        />
        <button className="border-2 border-textPrimary rounded-md p-1">
          <Plus />
        </button>
      </form>
      <ul className="max-h-96 overflow-y-scroll flex flex-col gap-y-3">
        {todos.map((todo) => (
          <li
            className="flex items-center justify-between border border-textPrimary p-2 rounded-md"
            key={todo}
          >
            <div className="w-2/3">
              <p className="text-sm font-medium">Lorem ipsum dolor sit.</p>
              <span className="text-xs">Fri 24 Jan 00:04</span>
            </div>
            <button>
              <Trash size={18} />
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
};
export default TodoList;

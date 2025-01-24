import { useState } from "react";
import Header from "./components/ui/Header";
import AppWindow from "./components/ui/AppWindow";
import Footer from "./components/ui/Footer";
import TodoList from "./components/todolist/TodoList";
import LofiPlayer from "./components/lofiplayer/LofiPlayer";
import Youtube from "./components/youtube/Youtube";

const App = () => {
  const [highestZIndex, setHighestZIndex] = useState(1);

  const bringToFront = () => {
    const newZIndex = highestZIndex + 1;
    setHighestZIndex(newZIndex);
    return newZIndex;
  };

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Header />
      <main className="w-full h-[calc(100vh-64px)] relative">
        <AppWindow title="Todo List" bringToFront={bringToFront}>
          <TodoList />
        </AppWindow>
        <AppWindow title="Lofi Player" bringToFront={bringToFront}>
          <LofiPlayer />
        </AppWindow>
        <AppWindow title="Youtube Playlist" bringToFront={bringToFront}>
          <Youtube />
        </AppWindow>
      </main>
      <Footer />
    </div>
  );
};
export default App;

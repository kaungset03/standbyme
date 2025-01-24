import { useState } from "react";
import Header from "./components/ui/Header";
import AppWindow from "./components/ui/AppWindow";
import Footer from "./components/ui/Footer";
import TodoList from "./components/todolist/TodoList";
import LofiPlayer from "./components/lofiplayer/LofiPlayer";
import Youtube from "./components/youtube/Youtube";

const App = () => {
  const [highestZIndex, setHighestZIndex] = useState(1);
  const [openedWindows, setOpenedWindows] = useState<string[]>(["Lofi Player"]);

  const bringToFront = () => {
    const newZIndex = highestZIndex + 1;
    setHighestZIndex(newZIndex);
    return newZIndex;
  };

  const openWindow = (title: string) => {
    if (!openedWindows.includes(title)) {
      setOpenedWindows((prev) => [...prev, title]);
    }
  };

  const closeWindow = (title: string) => {
    setOpenedWindows((prev) => prev.filter((window) => window !== title));
  };

  const isWindowOpened = (title: string) => openedWindows.includes(title);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Header />
      <main className="w-full h-[calc(100vh-64px)] relative">
        {isWindowOpened("Todo List") && (
          <AppWindow
            title="Todo List"
            bringToFront={bringToFront}
            closeWindow={closeWindow}
          >
            <TodoList />
          </AppWindow>
        )}
        {isWindowOpened("Lofi Player") && (
          <AppWindow
            title="Lofi Player"
            bringToFront={bringToFront}
            closeWindow={closeWindow}
          >
            <LofiPlayer />
          </AppWindow>
        )}

        {isWindowOpened("Youtube Playlist") && (
          <AppWindow
            title="Youtube Playlist"
            bringToFront={bringToFront}
            closeWindow={closeWindow}
          >
            <Youtube />
          </AppWindow>
        )}
      </main>
      <Footer openWindow={openWindow} />
    </div>
  );
};
export default App;

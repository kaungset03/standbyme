import Header from "./components/ui/Header";
import AppWindow from "./components/ui/AppWindow";
import Footer from "./components/ui/Footer";
import TodoList from "./components/todolist/TodoList";
import LofiPlayer from "./components/lofiplayer/LofiPlayer";

const App = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Header />
      <main className="w-full h-[calc(100vh-64px)] relative">
        <AppWindow title="Todo List">
          <TodoList />
        </AppWindow>
        <AppWindow title="Lofi Player">
          <LofiPlayer />
        </AppWindow>
      </main>
      <Footer />
    </div>
  );
};
export default App;

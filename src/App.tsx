import Header from "./components/ui/Header";
import AppWindow from "./components/ui/AppWindow";
import Footer from "./components/ui/Footer";
import LofiPlayer from "./components/lofiplayer/LofiPlayer";

const App = () => {
  return (
    <div className="w-full h-screen relative">
      <Header />
      <main className="w-full h-[calc(100vh-64px)] flex justify-center items-center">
        <AppWindow title="Lofi Player">
          <LofiPlayer />
        </AppWindow>
      </main>
      <Footer />
    </div>
  );
};
export default App;

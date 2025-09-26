import { Outlet } from "react-router-dom";
import { GameProvider } from "./context/GameContext";
import { ApiProvider } from "./context/ApiContext";

function App() {
  return (
    <ApiProvider>
      <GameProvider>
        <Outlet />
      </GameProvider>
    </ApiProvider>
  );
}

export default App;
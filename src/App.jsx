import { Outlet } from "react-router-dom";
import { GameProvider } from "./context/GameContext";
import { ApiProvider } from "./context/ApiContext";
import Alert from "./components/utils/Alert";
import { useContext } from "react";
import { ApiContext } from "./context/ApiContext";


function App() {

  function AppContent() {
    const { alert, clearAlert } = useContext(ApiContext);
    return (
      <>
        <Alert message={alert} onClose={clearAlert} />
        <Outlet />
      </>
    );
  }

  return (
    <ApiProvider>
      <GameProvider>
        <AppContent />
      </GameProvider>
    </ApiProvider>
  );
}

export default App;
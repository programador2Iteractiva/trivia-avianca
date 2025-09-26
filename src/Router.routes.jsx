import { createBrowserRouter } from "react-router-dom";
import HomeView from "./views/HomeView";
import FormView from "./views/FormView";
import RulesView from "./views/RulesView";
import QuestionView from "./views/QuestionView";
import EndGameView from "./views/EndGameView";
import Awards from "./components/Awards";
import Instructions from "./components/Instructions";
import App from "./App";
import RankingView from "./views/RankingView"; // 1. Importar la nueva vista

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeView />,
      },
      {
        path: "/formulario",
        element: <FormView />,
      },
      {
        path: "/reglas",
        element: <RulesView />,
        children: [
          {
            path: "",
            element: <Awards />,
          },
          {
            path: "instrucciones",
            element: <Instructions />,
          },
        ],
      },
      {
        path: "/preguntas",
        element: <QuestionView />,
      },
      {
        path: "/final",
        element: <EndGameView />,
      },
      {
        path: "/32ma0e8UNy9DHUt1wMyA",
        element: <RankingView />,
      },
    ],
  },
]);

export default Router;
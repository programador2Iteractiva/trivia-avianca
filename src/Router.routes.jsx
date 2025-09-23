import { createBrowserRouter } from "react-router-dom";
import HomeView from "./views/HomeView";
import FormView from "./views/FormView";
import RulesView from "./views/RulesView";
import QuestionView from "./views/QuestionView";
import EndGameView from "./views/EndGameView";
import Awards from "./components/Awards";
import Instructions from "./components/Instructions";

const Router = createBrowserRouter([
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
        path: "premios",
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
]);

export default Router;

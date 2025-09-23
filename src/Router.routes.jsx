import { createBrowserRouter } from "react-router-dom";
import HomeView from "./views/HomeView";
import FormView from "./views/FormView";
import AwardsViews from "./views/AwardsViews";
import InstructionsView from "./views/InstructionsView";
import QuestionView from "./views/QuestionView";
import EndGameView from "./views/EndGameView";

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
    element: <FormView />,
    children: [
      {
        path: "premios",
        element: <AwardsViews />,
      },
      {
        path: "instrucciones",
        element: <InstructionsView />,
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

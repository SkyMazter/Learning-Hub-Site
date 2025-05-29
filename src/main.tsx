import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";

import Mission from "./pages/Mission.tsx";
import LessonView from "./components/LessonView.tsx";

const router = createBrowserRouter([
  {
    path: "Open-Notes/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "lesson/:lessonID",
        element: <LessonView />,
      },
      { path: "mission/", element: <Mission /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

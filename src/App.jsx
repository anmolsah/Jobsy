import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import AppLayout from "./layout/AppLayout";
import LandingPage from "./pages/LandingPage";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

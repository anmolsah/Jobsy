import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import LandingPage from "./pages/LandingPage";
import OnBoarding from "./pages/OnBoarding";
import JobListing from "./pages/JobListing";
import Job from "./pages/Job";
import PostJobs from "./pages/PostJobs";
import SavedJobs from "./pages/SavedJobs";
import MyJobs from "./pages/MyJobs";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/onboarding",
          element: <OnBoarding />,
        },
        {
          path: "/jobs",
          element: <JobListing />,
        },
        {
          path: "/job/:id",
          element: <Job />,
        },
        {
          path: "/post-job",
          element: <PostJobs />,
        },
        {
          path: "/saved-job",
          element: <SavedJobs />,
        },
        {
          path: "/my-jobs",
          element: <MyJobs />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

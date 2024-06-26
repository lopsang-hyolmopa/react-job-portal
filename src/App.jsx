import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobDetailPage from "./pages/JobDetailPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

import { jobLoader } from "./api/jobLoader";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route
            path="/jobs/:id"
            element={<JobDetailPage />}
            loader={jobLoader}
          />
          <Route path="/add-job" element={<AddJobPage />} />
          <Route
            path="/edit-job/:id"
            element={<EditJobPage />}
            loader={jobLoader}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;

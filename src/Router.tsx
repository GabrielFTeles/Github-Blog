import { Home } from "./pages/Home";
import { Users } from "./pages/Users";
import { Navigate, Route } from "react-router-dom";
import { Posts } from "./pages/Posts";
import { Routes } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { NotFound } from "./pages/NotFound";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/users/:username" element={<Users />} />
        <Route path="/users/:username/posts/:repo_name" element={<Posts />} />
      </Route>
      <Route path="*" element={<Navigate to="/404" />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  );
}

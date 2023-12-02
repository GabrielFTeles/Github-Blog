import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Posts } from "./pages/Posts";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="users/:username" element={<Home />} />
        <Route path="users/:username/posts/:post_id" element={<Posts />} />
      </Route>
    </Routes>
  );
}

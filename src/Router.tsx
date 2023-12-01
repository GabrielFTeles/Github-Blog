import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Posts } from "./pages/Posts";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/:username" element={<Home />} />
        <Route path="/Posts/:post_id" element={<Posts />} />
      </Route>
    </Routes>
  );
}

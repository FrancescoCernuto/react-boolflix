import { PostContextProvider } from "./assets/contexts/PostContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PostsPage from "./assets/pages/PostsPage";

export default function App() {
  return (
    <PostContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index Component={PostsPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostContextProvider>
  );
}

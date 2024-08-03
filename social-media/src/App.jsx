import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";

import CreatePostForm from "./components/CreatePostForm.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import PostContainer from "./components/PostContainer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import PostListProvider from "./Context/Post-store.jsx";
import Sidebarback from "./components/Sidebarback.jsx";
import YourPost from "./components/YourPost.jsx";

function App() {
  const [sidebar, setSidebar] = useState("Home");
  let slide;

  if (sidebar === "Home") {
    slide = <PostContainer />;
  }

  if (sidebar === "CreatePost") {
    slide = <CreatePostForm />;
  }

  if (sidebar === "YourPost") {
    slide = <YourPost />;
  }

  return (
    <>
      <PostListProvider>
        <div>
          <Toaster />
        </div>
        <div className="sideBar">
          <Sidebar sidebar={sidebar} setSidebar={setSidebar}></Sidebar>
          <Sidebarback></Sidebarback>
          <div>
            <Header></Header>
            <div className="rightBar">{slide}</div>
            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;

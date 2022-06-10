import { Layout, NewPost } from "./components";
import { About, Contact, EditPost, Home, NotFound, Post, Welcome } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

const App = () => {

  return (
    <>
      <GlobalStyle />
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="post">
              <Route index element={<NewPost />} />
              <Route path=":id" element={<Post />} />
            </Route>

            <Route path="edit/:id" element={<EditPost />} />

            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="welcome" element={<Welcome />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </DataProvider>
    </>
  );
};

export default App;

// USE WITH FRAMER FOR ANIMATED ROUTES

// const location = useLocation();
/* <AnimatePresence>
  <Routes location={location} key={location.pathname}>
  <Route path="/" element={<Layout search={search} setSearch={setSearch} />}>
  <Route index element={<Home posts={setPosts} />} />
  <Route path="about" element={<About />} />
  <Route path="welcome" element={<Welcome />} />
  <Route path="post/:id" element={<Post posts={setPosts} />} />
  <Route path="*" element={<NotFound />} />
  </Route>
  </Routes>
</AnimatePresence> */

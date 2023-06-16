import PaginaPadrao from "componentes/PaginaPadrao/PaginaPadrao";
import Rodape from "componentes/Rodape/Rodape";
import ScrollToTop from "componentes/ScrollToTop";
import NaoEncontrada from "paginas/NaoEncontrada/NaoEncontrada";
import Post from "paginas/Post/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "componentes/Menu/Menu";
import Inicio from "paginas/Inicio/Inicio";
import Blog from "componentes/Blog/Blog";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="blog" element={<Blog />} />
        </Route>

        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default App;

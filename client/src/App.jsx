import { Routes, Route } from 'react-router-dom';

import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Home } from "./components/Home/Home";
import { Catalog } from "./components/Catalog/Catalog";
import { Create } from "./components/Create/Create";

function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/create" element={<Create/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;

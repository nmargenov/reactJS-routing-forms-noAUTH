import { Routes, Route } from 'react-router-dom';

import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Home } from "./components/Home/Home";
import { Catalog } from "./components/Catalog/Catalog";
import { Create } from "./components/Create/Create";
import { Details } from './components/Details/Details';
import { Edit } from './components/Edit/Edit';

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
          <Route path="/catalog/:id/details" element={<Details/>}/>
          <Route path="/catalog/:id/edit" element={<Edit/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;

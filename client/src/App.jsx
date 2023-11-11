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
        <Create/>
        {/* <Catalog/> */}
        {/* <Home/> */}
        {/* <Login/> */}
      </main>
    </>
  );
}

export default App;

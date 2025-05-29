import Header from "./components/Header";
import Footer from "./components/Footer";
import "./animations.css";

import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;

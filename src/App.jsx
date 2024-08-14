import { Outlet } from "react-router-dom";
import NavbarComponent from "./component/NavbarComponent";
import FooterComponent from "./component/FooterComponent";

function App() {
  return (
    <>
      <div>
        <NavbarComponent />        
        <Outlet />
        <FooterComponent />
      </div>
    </>
  );
}

export default App;

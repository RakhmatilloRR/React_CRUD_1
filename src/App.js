// import logo from '../../unused/logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddUser, Home, EditUser } from "./components";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container} from "./globalStyle";
import GlobalProvider from "./components/context/GlobalState";

function App() {
  return (
    <>
      <Container>
        <GlobalProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddUser />} />
              <Route path="/edit/:id" element={<EditUser />} />
            </Routes>
          </BrowserRouter>
        </GlobalProvider>
      </Container>
    </>
  );
}

export default App;

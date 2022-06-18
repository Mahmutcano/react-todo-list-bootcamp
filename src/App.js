import Login from "./pages/Login";
import { UserContext } from "./context/export";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    // Kapsayıcı User Context
    <UserContext>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
        </Routes>
    </UserContext>
  );
}

export default App;

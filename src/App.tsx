import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Users } from "./components/Users";
import { DummyPage } from "./components/Users/DummyPage";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="users" element={<Users />} />
          <Route path=":page" element={<DummyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

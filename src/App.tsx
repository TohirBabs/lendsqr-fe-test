import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Users } from "./components/Users/Users";
import { DummyPage } from "./components/Users/DummyPage";
import { UserDetails } from "./components/Users/UserDetails";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { UsersSection } from "./components/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="users" element={<UsersSection />}>
            <Route index element={<Users />} />
            <Route path=":userId" element={<UserDetails />} />
          </Route>
          <Route path=":page" element={<DummyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

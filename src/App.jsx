import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Repetitors } from "./pages/Repetitors";
import { HowTheServiceWorks } from "./pages/HowTheServiceWorks";
import { Support } from "./pages/Support";
import { Profile } from "./pages/Profile";
import { BeRepetitor } from "./pages/BeRepetitor";
import { RepetitorMore } from "./pages/RepetitorMore";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route exact path="/rep" element={<Repetitors />} />
      <Route path="/service" element={<HowTheServiceWorks />} />
      <Route path="/support" element={<Support />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/berep" element={<BeRepetitor />} />
      <Route path="/repmore/:repetitorId" element={<RepetitorMore />} />
    </Routes>
  );
}

export default App;

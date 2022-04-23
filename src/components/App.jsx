import SignInPage from "./Pages/SignIn/SignInPage";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.application.token);

  return (
    <Routes>
      <Route path="/signIn" element={token ? <Navigate to="/" /> : <SignInPage/>}/>
      <Route path="/" element={!token ? <Navigate to="/signIn" /> : <Header/>} />
    </Routes>
  );
}

export default App;

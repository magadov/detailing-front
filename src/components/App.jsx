// import SignInPage from "./Pages/SignIn/SignInPage";
import { Route ,Routes } from "react-router-dom";
import Header from './Header/Header';

function App() {
  return (
    <Routes>
      {/*<Route path="/signIn" element={<SignInPage />} />*/}
    <Route path='/' element={<Header />} />
    </Routes>
  );
}

export default App;

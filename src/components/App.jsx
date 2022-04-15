// import SignInPage from "./Pages/SignIn/SignInPage";
import { Route ,Routes } from "react-router-dom";
import Header from './Header/Header';
import JournalPage from './Pages/JournalPage/JournalPage';

function App() {
  return (
    <Routes>
      {/*<Route path="/signIn" element={<SignInPage />} />*/}
      <Route path='/' element={<Header />} />
      <Route path='/journal' element = {<JournalPage />} />
    </Routes>
  );
}

export default App;

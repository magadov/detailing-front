// import SignInPage from "./Pages/SignIn/SignInPage";
import { Route ,Routes } from "react-router-dom";
import Header from './Header/Header';
import ExpensesPage from "./Pages/Expenses/ExpensesPage";

function App() {
  return (
    <Routes>
      {/*<Route path="/signIn" element={<SignInPage />} />*/}
    <Route path='/' element={<Header />} />
      <Route path='/expenses' element={<ExpensesPage/>}/>
    </Routes>
  );
}

export default App;

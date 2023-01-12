import "./App.css";
import NavBar from "./Components/NavBar.jsx";
import RecipeCards from "./Components/RecipeCards";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <RecipeCards /> */}
      {/* <Login /> */}
      <Register />
    </div>
  );
}

export default App;

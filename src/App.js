import "./App.css";
import { useNavigate, useRoutes } from "react-router-dom";
import { getRoutes } from "pages/routes";

function App() {
  const appRoutesElement = useRoutes(getRoutes());

  useNavigate("/home");

  return appRoutesElement
}

export default App;

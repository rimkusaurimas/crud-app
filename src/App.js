import { useNavigate, useRoutes } from "react-router-dom";
import { getRoutes } from "./components/routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const appRoutesElement = useRoutes(getRoutes());

  useNavigate("/home");

  return <div>{appRoutesElement}</div>;
}

export default App;

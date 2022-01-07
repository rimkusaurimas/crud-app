import { useNavigate, useRoutes } from "react-router-dom";
import { getRoutes } from "./pages/routes";

function App() {
  const appRoutesElement = useRoutes(getRoutes());

  useNavigate("/home");

  return <div>{appRoutesElement}</div>;
}

export default App;

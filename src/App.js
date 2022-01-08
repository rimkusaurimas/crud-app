import { useNavigate, useRoutes } from "react-router-dom";
import { getRoutes } from "./components/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "./features/context/UserContext";

function App() {
  const appRoutesElement = useRoutes(getRoutes());

  useNavigate("/home");

  return (
    <UserProvider>
      <div>{appRoutesElement}</div>;
    </UserProvider>
  );
}

export default App;

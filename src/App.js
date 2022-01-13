import { useNavigate, useRoutes } from "react-router-dom";
import { getRoutes } from "./components/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "./features/context/UserContext";
import { SearchProvider } from "./features/context/StatesContext";

function App() {
  const appRoutesElement = useRoutes(getRoutes());

  useNavigate("/home");

  return (
    <UserProvider>
      <SearchProvider>
        <div>{appRoutesElement}</div>;
      </SearchProvider>
    </UserProvider>
  );
}

export default App;

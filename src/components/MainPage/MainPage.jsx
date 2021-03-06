import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { UserList } from "../UserList";
import styles from "./main-page.module.scss";
import { UserContext } from "../../features/context/UserContext";

export const MainPage = () => {
  const [users] = useContext(UserContext);
  return (
    <section className={styles.mobile}>
      <div className={styles.mainWidget}>
        <h2 className={styles.mainWidgetTitle}>Add yourself ➜</h2>
        <Link to={"/add-user"}>
          <Button variant="primary text-uppercase">add user</Button>
        </Link>
      </div>
      <UserList />
      {users.length === 0 && (
        <p className="text-center mt-3">No users to show...</p>
      )}
    </section>
  );
};

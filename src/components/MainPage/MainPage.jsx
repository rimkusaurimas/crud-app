import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { UserList } from "../UserList/UserList";
import styles from "./main-page.module.scss";
import { UserContext } from "../../features/context/UserContext";

export const MainPage = () => {
  const [users] = useContext(UserContext);
  return (
    <div className={styles.mobile}>
      <section className={styles.mainWidget}>
        <h2 className={styles.mainWidgetTitle}>Add yourself ➜</h2>
        <Link to={"/add-user"}>
          <Button variant="primary text-uppercase">add user</Button>
        </Link>
      </section>
      <UserList />
      {users.length === 0 && (
        <p className="text-center mt-3">No users to show...</p>
      )}
    </div>
  );
};

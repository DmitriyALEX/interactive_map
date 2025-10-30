import React from "react";
import type { IFetchedUser } from "../../types/fetchedUsers.interface";
import styles from "./styles.module.css";

type Props = {
  user: IFetchedUser
}

const PopupMap:React.FC<Props>= ({user}) => {
  return (
    <section className={styles.popup_container}>
      <div>
        <strong>{user.first_name}</strong>
        &nbsp;
        <strong>{user.last_name}</strong>
      </div>
     <hr className={styles.line}/>
      <div>
        {user.tags.map((tag) => (
          <span>{tag}&nbsp;</span>
        ))}
      </div>
    </section>
  );
};

export default PopupMap;

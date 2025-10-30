import React, { useMemo, useState } from "react";
import MapLeaflet from "../../components/MapLeaflet";
import SearchInput from "../../components/SearchInput";
import useFetchData from "../../hooks/useFetchData";
import styles from "./styles.module.css";

import filterUsersByTag from "../../utils/filterUsersByTag";

const Home: React.FC = () => {
  const [inputQuery, setInputQuery] = useState<string>("");
  const fetchedUsers = useFetchData();
  const filteredUsers = useMemo(() => filterUsersByTag(fetchedUsers, inputQuery), [fetchedUsers, inputQuery]);

  return (
    <section>
      <header className={styles.header}>
        <SearchInput setInputQuery={setInputQuery} />
      </header>
      <MapLeaflet filteredUsers={filteredUsers} />
    </section>
  );
};

export default Home;

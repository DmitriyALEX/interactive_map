import React, { useMemo } from "react";
import debounce from "lodash.debounce";
import styles from "./styles.module.css";

type Props = {
  setInputQuery: (value: string) => void;
};

const SearchInput: React.FC<Props> = ({ setInputQuery }) => {
  const debouncedSetQuery = useMemo(
    () =>
      debounce((value: string) => {
        setInputQuery(value);
      }, 300),
    [setInputQuery]
  );

  return (
    <div className={styles.input_container}>
      <input
        type='text'
        className={styles.input}
        placeholder='Search users by tag'
        onChange={(e) => debouncedSetQuery(e.target.value)}
      />
      <span className={styles.focus_border}></span>
    </div>
  );
};

export default SearchInput;

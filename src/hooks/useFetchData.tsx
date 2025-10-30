import { useEffect, useState } from "react";
import axios from "axios";
import type { IFetchedUser } from "../types/fetchedUsers.interface";

const useFetchData = () => {
  const [fetchedUsers, setFetchedUsers] = useState<IFetchedUser[]>([]);

  useEffect(() => {
    axios.get("/api/users.json").then((res) => {
      setFetchedUsers(res.data);
    });
  }, [])

  return fetchedUsers;
};

export default useFetchData;

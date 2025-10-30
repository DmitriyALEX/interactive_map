import type { IFetchedUser } from "../types/fetchedUsers.interface";

const filterUsersByTag = (users: IFetchedUser[], inputQuery: string): IFetchedUser[] => {
    if (!inputQuery.trim()) return users;
    const queryLowerCase = inputQuery.toLowerCase();
    return users.filter((user) => user.tags.includes(queryLowerCase));
};

export default filterUsersByTag;

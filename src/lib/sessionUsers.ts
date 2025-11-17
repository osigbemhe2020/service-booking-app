export type SessionUser = {
  email: string;
  password: string;
};

export const sessionUsers: SessionUser[] = [];

export const addUser = (user: SessionUser) => {
  sessionUsers.push(user);
};

export const findUserByEmail = (email: string) => {
  return sessionUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());
};

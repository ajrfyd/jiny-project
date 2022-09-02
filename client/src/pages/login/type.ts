export type UserType = {
  email: string;
  password: string;
};

export type NewUserType = UserType & {
  userName: string;
}

export type ResponseType = {
  token: string;
  email: string;
  userName: string;
}

export type SignUpSuccessMsg = {
  message: string;
}

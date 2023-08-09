export interface IUserRegistration {
  email: string;
  password: string;
  repeated_password: string;
  first_name: string;
}

export interface IAuthState {
  isLoading: boolean;
  error: string;
}

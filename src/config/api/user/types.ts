export type UseType = {
  name: string;
  email: string;
  password: string;
  level: number;
  apartment: string;
  apartmentComplexName: string;
};

export type UserListDataType = Promise<UseType[]>;

export interface CreateUserInterface {
  getUser(): UserListDataType;
}

export type CustomersTable = {
  id: string;
  name: string;
  email: string;
}

export type ProductsTable = {
  id: string;
  name: string;
  category: string;
}

export type Supplierstable = {
  id: string;
  name: string;
  email: string;
  contact: number;
  status: Status;
}

enum Status {
  Active,
  Pause,
  Terminated
}


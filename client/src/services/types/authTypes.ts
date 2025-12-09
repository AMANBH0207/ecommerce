export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

interface address {
  name: string;
  line1: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  _id: string;
}

export interface LoginRegisterResponse {
  addresses: address[];
  _id: string;
  name: string;
  email: string;
  role: string;
  token?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface submitOrderPayload {
  amount: number;
}

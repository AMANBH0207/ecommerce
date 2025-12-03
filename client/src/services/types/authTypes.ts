export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

export interface LoginRegisterResponse {
  _id: string;
  name: string;
  email: string;
  role: string;
  token?:string;
}


export interface LoginPayload {
  email:string;
  password:string;
}

export interface submitOrderPayload {
  amount: number
}


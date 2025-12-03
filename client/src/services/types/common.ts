export interface ApiResponse<T> {
  message: string;
  success: boolean;
  data: T;
}

interface order {
  amount: number;
  amount_due: number;
  amount_paid: number;
  attempts: number;
  created_at: number;
  currency: string;
  entity: string;
  id: string;
  notes: any[];
  offer_id: any;
  receipt: string;
  status: string;
}

export interface submitOrderResponse {
  success: boolean;
  order: order;
}

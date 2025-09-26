import { CategoriesResponse } from "../services/types/actionTypes";

export type ModalProps<T> = {
  formState: T;
  categories?: CategoriesResponse[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  errors: string[];
};

export type BannerFormValues = {
  title: string;
  image: File | null;
  link: string;
  status: number;
  startDate: string;
  endDate: string;
};

export type ProductFormValues = {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  images: FileList | null;
};



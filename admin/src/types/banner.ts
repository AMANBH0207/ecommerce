export type BannerFormValues = {
  title: string;
  image: File | null;
  link: string;
  status: number;
  startDate: string;
  endDate: string;
};

export type BannerModalProps = {
  formState: BannerFormValues;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  errors: string[];
};
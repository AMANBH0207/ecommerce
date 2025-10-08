export interface uploadBannerPayload {
  title: string;
  image: File;
  link: string;
  bannerType: string;
  status: number;
  startDate: string;
  endDate: string;
}

export interface uploadBannerResponse {
  title: string;
  image: string;
  link: string;
  status: number;
  startDate: string;
  endDate: string;
  priority: number;
}

export interface BannersDataResponse {
  _id: string;
  title: string;
  image: string;
  link: string;
  status: number;
  startDate: string;
  endDate: string;
  priority: number;
}

export interface CategoriesResponse {
  _id: string;
  name: string;
  slug: string;
}

export interface imagesResponse {
    public_id: string;
url: string;
_id: string;
}

export interface AddProductResponse {
  category: CategoriesResponse;
  description: string;
  name: string;
  images:imagesResponse[]
  price: number;
  discountedPrice:number;
  stock: number;
  _id: string;
}

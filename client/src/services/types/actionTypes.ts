export interface BannersData {
    _id: string;
    title: string;
    image: string;
    link: string;
    bannerType:string;
    status: number;
    startDate: string;
    endDate: string;
    priority: number;
}

export interface BannersDataResponse {
    showcase: BannersData[];
    slider: BannersData[];
    static: BannersData[];
    mobiles: BannersData[];
}


export interface uploadBannerResponse {
    title:string;
      image: string;
      link:string;
      status: number;
      startDate: string;
      endDate: string;
      priority: number;
}

interface categories{
    name: string;
    slug: string;
}

interface productImage{
      url: string;
      public_id: string;
      _id: string
}

export interface topProduct{
    _id: string;
    name: string;
    category: categories;
    createdAt: string;
    image: productImage;
    discountedPrice:number;
    price:number;
}

export interface topCategoriesResponse {
    mobiles:topProduct[];
}

export interface singleProductResponse {
    _id: string;
    name: string;
    description: string;
    price: number;
    discountedPrice: number;
    stock: number;
    images: productImage[];
    category: categories
    createdAt: string,
    }


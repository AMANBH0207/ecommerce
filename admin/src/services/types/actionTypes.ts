export interface uploadBannerPayload{
    title:string;
    image:File;
    link:string;
    status:number;
    startDate:string;
    endDate:string;
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

export interface BannersDataResponse {
    _id: string,
    title: string,
    image: string,
    link: string,
    status: number,
    startDate: string,
    endDate: string,
    priority: number,
}

export interface CategoriesResponse {
    _id: string,
    name:string,
    slug:string,
}

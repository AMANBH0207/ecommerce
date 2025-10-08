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
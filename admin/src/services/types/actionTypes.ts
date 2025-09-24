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


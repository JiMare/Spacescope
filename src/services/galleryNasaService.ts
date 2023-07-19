// QUERY
import { NasaImgeApiClient } from './serviceConfig';

// ORIGINAL RESPONSE
type NasaPhotoResponse = {
  items: NasaPhotoItemResponse[];
  metadata: NasaPhotoMetadataResponse;
};

type NasaPhotoMetadataResponse = {
  total_hits: number;
};

type NasaPhotoItemResponse = {
  data: NasaPhotoDataResponse[];
  links: NasaPhotoLinkResponse[];
};

type NasaPhotoLinkResponse = {
  href: string;
  render: string;
};

type NasaPhotoDataResponse = {
  nasa_id: string;
  title: string;
  photographer: string;
  location: string;
  date_created: string; // yyyy-mm-ddThh:mm:ssZ
  description: string;
};

export type NasaPhotoType = {
  id: string;
  title: string;
  url?: string;
  photographer: string;
  location: string;
  date: string;
  description: string;
};

export type GetNasaPhotosType = {
  photos: NasaPhotoType[];
  hasNext: boolean;
};

const getNasaPhotos = (
  searchText: string,
  page: number,
): Promise<GetNasaPhotosType> => NasaImgeApiClient.get(`search?page=${page}&q=${searchText}
&page_size=25&media_type=image`)
  .then((response: any) => {
    if (!response.data.collection) {
      return {
        hasNext: false,
        photos: [],
      };
    }
    const photos = (response.data.collection as NasaPhotoResponse)
      .items.map((resp: NasaPhotoItemResponse) => {
        const urlLink = resp.links.find((link: NasaPhotoLinkResponse) => link.render === 'image');
        const photo: NasaPhotoType = {
          id: resp.data[0].nasa_id,
          title: resp.data[0].title,
          photographer: resp.data[0].photographer,
          location: resp.data[0].location,
          date: resp.data[0].date_created,
          description: resp.data[0].description,
          url: urlLink?.href,
        };
        return photo;
      });
    return {
      hasNext: (response.data.collection as NasaPhotoResponse).metadata.total_hits > page * 25,
      photos,
    };
  });

export default {
  getNasaPhotos,
};

import DateObject from 'react-date-object';
import { NasaApiClient } from './serviceConfig';

export enum EpicPhotoColor {
  NATURAL = 'natural',
  ENHANCED = 'enhanced',
}

export const EpicPhotoColorList = [
  { value: EpicPhotoColor.NATURAL, label: 'Natural' },
  { value: EpicPhotoColor.ENHANCED, label: 'Enhanced' },
];

export type EpicPhotoType = {
  id: number;
  title: string;
  url: string;
  longitude: number;
  latitude: number;
  date: string;
};

// ORIGINAL RESPONSE
type EpicPhotoResponse = {
  identifier: number;
  caption: string;
  image: string;
  centroid_coordinates: EpicPhotoCoordinatesResponse;
  date: string;
};

type EpicPhotoCoordinatesResponse = {
  lat: number;
  lon: number;
};

// QUERY
const getEpicPhotos = (
  color: EpicPhotoColor,
  date: DateObject,
): Promise<EpicPhotoType[]> => NasaApiClient.get(`EPIC/api/${color}/date/${date.format('YYYY-MM-DD')}`)
  .then((response: any) => {
    return response.data.map((resp: EpicPhotoResponse) => ({
      id: resp.identifier,
      url: `https://epic.gsfc.nasa.gov/archive/${color}/${date.format('YYYY')}/${date.format('MM')}/${date.format('DD')}/jpg/${resp.image}.jpg`,
      longitude: resp.centroid_coordinates.lon,
      latitude: resp.centroid_coordinates.lat,
      date: resp.date,
    }));
  });

export default {
  getEpicPhotos,
};

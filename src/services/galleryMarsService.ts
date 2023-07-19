import DateObject from 'react-date-object';
import { NasaApiClient } from './serviceConfig';

export enum MarsPhotoCamera {
  ALL = 'all',
  FHAZ = 'fhaz',
  RHAZ = 'rhaz',
  MAST = 'mast',
  CHEMCAM = 'chemcam',
  MAHLI = 'mahli',
  MARDI = 'mardi',
  NAVCAM = 'navcam',
  PANCAM = 'pancam',
  MINITES = 'minites',
}

export const MarsPhotoCameraList = [
  { value: MarsPhotoCamera.ALL, label: 'All cameras' },
  { value: MarsPhotoCamera.FHAZ, label: 'Front Hazard Avoidance Camera' },
  { value: MarsPhotoCamera.RHAZ, label: 'Rear Hazard Avoidance Camera' },
  { value: MarsPhotoCamera.MAST, label: 'Mast Camera' },
  { value: MarsPhotoCamera.CHEMCAM, label: 'Chemistry and Camera Complex' },
  { value: MarsPhotoCamera.MAHLI, label: 'Mars Hand Lens Imager' },
  { value: MarsPhotoCamera.MARDI, label: 'Mars Descent Imager' },
  { value: MarsPhotoCamera.NAVCAM, label: 'Navigation Camera' },
  { value: MarsPhotoCamera.PANCAM, label: 'Panoramic Camera' },
  { value: MarsPhotoCamera.MINITES, label: 'Miniature Thermal Emission Spectrometer (Mini-TES)' },
];

export type MarsPhotoRoverType = {
  name: string;
  landingDate: string;
};

export type MarsPhotosType = {
  id: number;
  sol: number;
  camera: MarsPhotoCamera;
  url: string;
  rover: MarsPhotoRoverType;
};

export type GetMarsPhotosType = {
  photos: MarsPhotosType[];
  hasNext: boolean;
};

// ORIGINAL RESPONSE
type MarsPhotosCameraResponse = {
  id: number;
  name: string;
  full_name: string;
};

type MarsPhotosRoverResponse = {
  id: number;
  name: string;
  landing_date: string; // YYYY-MM-DD
  launch_date: string; // YYYY-MM-DD
  status: string;
};

type MarsPhotosResponse = {
  id: number;
  sol: number;
  camera: MarsPhotosCameraResponse;
  img_src: string;
  rover: MarsPhotosRoverResponse;
};

// QUERY
const getMarsPhotos = (
  page: number,
  camera: MarsPhotoCamera,
  earthDate: DateObject,
): Promise<GetMarsPhotosType> => NasaApiClient.get(`mars-photos/api/v1/rovers/curiosity/photos?page=${page}
${camera !== MarsPhotoCamera.ALL ? `&camera=${camera}` : ''}
&earth_date=${earthDate.format('YYYY-MM-DD')}`)
  .then((response: any) => {
    const photos = response.data.photos.map((resp: MarsPhotosResponse) => ({
      id: resp.id,
      sol: resp.sol,
      camera: resp.camera.name.toUpperCase(),
      url: resp.img_src,
      rover: {
        name: resp.rover.name,
        landingDate: resp.rover.landing_date,
      },
    }));
    return {
      hasNext: photos.length === 25,
      photos,
    };
  });

export default {
  getMarsPhotos,
};

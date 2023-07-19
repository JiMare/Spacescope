import { useEffect, useState } from 'react';
import DateObject from 'react-date-object';
import gallery from '../gallery.module.scss';
import PageHeading from '../../../components/UI/PageHeading';
import SearchPanel from '../../../components/UI/SearchPanel';
import FormField from '../../../components/UI/form/FormField';
import galleryMarsService, {
  GetMarsPhotosType,
  MarsPhotoCamera,
  MarsPhotoCameraList,
} from '../../../services/galleryMarsService';
import PhotoGrid, { PhotoGridType } from '../../../components/UI/PhotoGrid';
import FormSelect from '../../../components/UI/form/FormSelect';
import Loading from '../../../components/UI/Loading';
import Calendar from '../../../components/UI/form/Calendar';
import Button from '../../../components/UI/Button';

const MarsPhotos = (): JSX.Element => {
  const [photos, setPhotos] = useState<PhotoGridType[]>();
  const [camera, setCamera] = useState<MarsPhotoCamera>(MarsPhotoCamera.ALL);
  const [page, setPage] = useState<number>(1);
  const [displayNext, setDisplayNext] = useState<boolean>(true);
  const [loading, setLoading] = useState(false);
  const [earthDate, setEarthDate] = useState<DateObject>(
    new DateObject(new Date().setDate(new Date().getDate() - 2)),
  );

  const loadPhoto = (add: boolean, pageNumber: number): void => {
    setLoading(true);
    galleryMarsService.getMarsPhotos(
      pageNumber,
      camera,
      earthDate,
    )
      .then((response: GetMarsPhotosType) => {
        const newPhotos = response.photos.map((photo) => (
          {
            id: photo.id,
            url: photo.url,
            title: MarsPhotoCameraList.find((c) => c.value === photo.camera.toLowerCase())?.label,
            description:
  <div>
    <p>
      <strong>Sol:</strong>
      {' '}
      {photo.sol}
    </p>
    <p>
      <strong>Rover name:</strong>
      {' '}
      {photo.rover.name}
    </p>
    <p>
      <strong>Rover landing date:</strong>
      {' '}
      {photo.rover.landingDate}
    </p>
  </div>,
          }));
        setDisplayNext(response.hasNext);

        setPhotos(add ? [...photos || [], ...newPhotos] : newPhotos);
        setPage(add ? page + 1 : 1);
        setLoading(false);
      });
  };

  const loadNext = (): void => {
    loadPhoto(true, page + 1);
  };

  const searchPhoto = (): void => {
    loadPhoto(false, 1);
  };

  useEffect(() => {
    loadPhoto(true, 1);
  }, []);

  return (
    <div className={gallery.gallery}>
      <PageHeading>Mars Photos</PageHeading>
      <SearchPanel onSearch={searchPhoto}>
        <div className={gallery.searchForm}>
          <FormField label="Camera">
            <FormSelect
              list={MarsPhotoCameraList}
              value={camera}
              setValue={(newValue: number | string): void => setCamera(newValue as MarsPhotoCamera)}
            />
          </FormField>
          <FormField label="Date">
            <Calendar
              value={earthDate}
              onChange={setEarthDate}
            />
          </FormField>
        </div>
      </SearchPanel>
      {photos && <PhotoGrid photos={photos} />}
      {loading && <Loading />}
      {displayNext && !loading
      && (
      <div className={gallery.buttonNext}>
        <Button onClick={loadNext}>Load next</Button>
      </div>
      )}
    </div>
  );
};

export default MarsPhotos;

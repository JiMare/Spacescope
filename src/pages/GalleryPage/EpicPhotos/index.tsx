import { useEffect, useState } from 'react';
import DateObject from 'react-date-object';
import gallery from '../gallery.module.scss';
import PageHeading from '../../../components/UI/PageHeading';
import SearchPanel from '../../../components/UI/SearchPanel';
import FormField from '../../../components/UI/form/FormField';
import PhotoGrid, { PhotoGridType } from '../../../components/UI/PhotoGrid';
import FormSelect from '../../../components/UI/form/FormSelect';
import Loading from '../../../components/UI/Loading';
import Calendar from '../../../components/UI/form/Calendar';
import galleryEpicService, {
  EpicPhotoColor,
  EpicPhotoColorList,
  EpicPhotoType,
} from '../../../services/galleryEpicService';

const EpicPhotos = (): JSX.Element => {
  const [photos, setPhotos] = useState<PhotoGridType[] | undefined>([]);
  const [color, setColor] = useState<EpicPhotoColor>(EpicPhotoColor.NATURAL);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<DateObject>(
    new DateObject(new Date().setDate(new Date().getDate() - 15)),
  );

  const loadPhoto = (): void => {
    setLoading(true);
    setPhotos(undefined);
    galleryEpicService.getEpicPhotos(
      color,
      date,
    )
      .then((response: EpicPhotoType[]) => {
        setPhotos(response.map((photo) => (
          {
            id: photo.id,
            url: photo.url,
            title: photo.title,
            description:
  <div>
    <p>
      <strong>Date:</strong>
      {' '}
      {photo.date}
    </p>
    <p>
      <strong>Longitude:</strong>
      {' '}
      {photo.longitude}
    </p>
    <p>
      <strong>Latitude:</strong>
      {' '}
      {photo.latitude}
    </p>
  </div>,
          })));

        setLoading(false);
      });
  };

  const searchPhoto = (): void => {
    loadPhoto();
  };

  useEffect(() => {
    loadPhoto();
  }, []);

  return (
    <div className={gallery.gallery}>
      <PageHeading>Epic Photos</PageHeading>
      <SearchPanel onSearch={searchPhoto}>
        <div className={gallery.searchForm}>
          <FormField label="Color">
            <FormSelect
              list={EpicPhotoColorList}
              value={color}
              setValue={(newValue: number | string): void => setColor(newValue as EpicPhotoColor)}
            />
          </FormField>
          <FormField label="Date">
            <Calendar
              value={date}
              onChange={setDate}
            />
          </FormField>
        </div>
      </SearchPanel>
      <PhotoGrid photos={photos} />
      {loading && <Loading />}
    </div>
  );
};

export default EpicPhotos;

import { useState } from 'react';
import gallery from '../gallery.module.scss';
import PageHeading from '../../../components/UI/PageHeading';
import SearchPanel from '../../../components/UI/SearchPanel';
import FormField from '../../../components/UI/form/FormField';
import PhotoGrid, { PhotoGridType } from '../../../components/UI/PhotoGrid';
import Loading from '../../../components/UI/Loading';
import Button from '../../../components/UI/Button';
import galleryNasaService, { GetNasaPhotosType } from '../../../services/galleryNasaService';
import FormInput from '../../../components/UI/form/FormInput';

const NasaPhotos = (): JSX.Element => {
  const [photos, setPhotos] = useState<PhotoGridType[]>();
  const [searchText, setSearchText] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [displayNext, setDisplayNext] = useState<boolean>(true);
  const [loading, setLoading] = useState(false);

  const loadPhoto = (add: boolean, pageNumber: number): void => {
    setLoading(true);
    galleryNasaService.getNasaPhotos(
      searchText,
      pageNumber,
    )
      .then((response: GetNasaPhotosType) => {
        const newPhotos = response.photos.map((photo) => (
          {
            id: photo.id,
            url: photo.url,
            title: photo.title,
            description:
  <div>
    <p>
      <strong>Location:</strong>
      {' '}
      {photo.location}
    </p>
    <p>
      <strong>Photographer:</strong>
      {' '}
      {photo.photographer}
    </p>
    <p>
      <strong>Creation date:</strong>
      {' '}
      {photo.date}
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

  return (
    <div className={gallery.gallery}>
      <PageHeading>Nasa Photos</PageHeading>
      <SearchPanel onSearch={searchPhoto} disabled={searchText === ''}>
        <div className={gallery.searchForm}>
          <FormField label="Search text">
            <FormInput
              value={searchText}
              setValue={setSearchText}
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

export default NasaPhotos;

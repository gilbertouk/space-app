import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Banner from './components/Banner';
import backgroundImage from './assets/banner.png';
import Gallery from './components/Gallery';
import photos from './fotos.json';
import { useEffect, useState } from 'react';
import ModalZoom from './components/ModalZoom';
import Footer from './components/Footer';

const GradientBackground = styled.div`
  background: linear-gradient(
    175deg,
    #120433 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [textFilter, setTextFilter] = useState(null);

  const handleFavoritePhoto = (photo) => {
    if (photo.id === selectedPhoto?.id) {
      setSelectedPhoto({ ...selectedPhoto, favorite: !selectedPhoto.favorite });
    }

    setGalleryPhotos(
      galleryPhotos.map((galleryPhoto) => {
        return {
          ...galleryPhoto,
          favorite:
            galleryPhoto.id === photo.id
              ? !photo.favorite
              : galleryPhoto.favorite,
        };
      }),
    );
  };

  useEffect(() => {
    if (selectedTag) {
      if (selectedTag.id === 0) {
        setGalleryPhotos(photos);
      } else {
        setGalleryPhotos(
          photos.filter((photo) => photo?.tagId === selectedTag?.id),
        );
      }
    }
  }, [selectedTag]);

  useEffect(() => {
    if (textFilter?.length > 0) {
      setGalleryPhotos(
        photos.filter((photo) =>
          photo.titulo.toLocaleLowerCase().startsWith(textFilter),
        ),
      );
    } else setGalleryPhotos(photos);
  }, [textFilter]);

  return (
    <GradientBackground>
      <GlobalStyles />
      <AppContainer>
        <Header setTextFilter={setTextFilter} />
        <MainContainer>
          <SideBar />
          <GalleryContent>
            <Banner
              text={'A galeria mais completa de fotos do espaço!'}
              backgroundImage={backgroundImage}
            />
            <Gallery
              handleSelectedPhoto={(photo) => setSelectedPhoto(photo)}
              handleFavoritePhoto={handleFavoritePhoto}
              setSelectedTag={setSelectedTag}
              photos={galleryPhotos}
            />
          </GalleryContent>
        </MainContainer>
        <Footer />
      </AppContainer>
      <ModalZoom
        photo={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
        handleFavoritePhoto={handleFavoritePhoto}
      />
    </GradientBackground>
  );
};

export default App;

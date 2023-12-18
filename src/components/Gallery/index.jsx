import styled from 'styled-components';
import Title from '../Title';
import Popular from './Popular';
import Tags from './Tags';
import Image from './Image';

const GalleryContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 73px;
`;

const FluidSection = styled.section`
  flex-grow: 1;
`;

const ImageContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Gallery = ({
  photos = [],
  handleSelectedPhoto,
  handleFavoritePhoto,
  setTag,
}) => {
  return (
    <>
      <Tags setTag={setTag} />
      <GalleryContainer>
        <FluidSection>
          <Title>Navegue pela galeria</Title>
          <ImageContainer>
            {photos.map((photo) => (
              <Image
                photo={photo}
                key={photo.id}
                onZoomChange={handleSelectedPhoto}
                handleFavoritePhoto={handleFavoritePhoto}
              />
            ))}
          </ImageContainer>
        </FluidSection>
        <Popular />
      </GalleryContainer>
    </>
  );
};

export default Gallery;

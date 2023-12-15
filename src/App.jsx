import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Banner from './components/Banner';
import backgroundImage from './assets/banner.png';
import Gallery from './components/Gallery';

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

function App() {
  return (
    <>
      <GradientBackground>
        <GlobalStyles />
        <AppContainer>
          <Header />
          <MainContainer>
            <SideBar />
            <GalleryContent>
              <Banner
                text={'A galeria mais completa de fotos do espaço!'}
                backgroundImage={backgroundImage}
              />
              <Gallery />
            </GalleryContent>
          </MainContainer>
        </AppContainer>
      </GradientBackground>
    </>
  );
}

export default App;

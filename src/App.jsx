import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles';

function App() {
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

  return (
    <>
      <GradientBackground>
        <GlobalStyles />
      </GradientBackground>
    </>
  );
}

export default App;

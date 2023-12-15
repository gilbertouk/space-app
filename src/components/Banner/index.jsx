import styled from 'styled-components';

const StylizedFigure = styled.figure`
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  background-repeat: no-repeat;
  flex-grow: 1;
  display: flex;
  align-items: center;
  min-height: 328px;
  margin: 0;
  border-radius: 20px;
  max-width: 100%;
  background-size: cover;
`;

const StylizedTitle = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  max-width: 300px;
  padding: 0 64px;
`;

const Banner = ({ text, backgroundImage }) => {
  return (
    <StylizedFigure $backgroundImage={backgroundImage}>
      <StylizedTitle>{text}</StylizedTitle>
    </StylizedFigure>
  );
};

export default Banner;

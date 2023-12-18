import styled from 'styled-components';
import InputText from '../InputText';

const StylizedHeader = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`;

const Header = ({ setTextFilter }) => {
  return (
    <StylizedHeader>
      <img src="/image/logo.png" alt="" />
      <InputText setTextFilter={setTextFilter} />
    </StylizedHeader>
  );
};

export default Header;

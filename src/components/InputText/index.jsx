import styled from 'styled-components';
import search from './search.png';

const StylizedContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const StylizedInputText = styled.input`
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid #c98cf1;
  background-color: transparent;
  box-sizing: border-box;
  width: 602px;
  color: #d9d9d9;
  font-family: Gandhi Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  &::placeholder {
    color: #d9d9d9;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 10px;
  right: 10px;
`;

const InputText = (props) => {
  return (
    <StylizedContainer>
      <StylizedInputText
        placeholder="O que você procura?"
        onChange={(e) => {
          props.setTextFilter(e.target.value.toLocaleLowerCase());
        }}
      />
      <SearchIcon src={search} alt="search icon" />
    </StylizedContainer>
  );
};

export default InputText;

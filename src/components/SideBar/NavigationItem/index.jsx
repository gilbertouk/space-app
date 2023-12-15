import styled from 'styled-components';

const StylizedListItem = styled.li`
  font-size: 24px;
  font-style: normal;
  font-family: ${(props) =>
    props.$active ? 'GandhiSansBold' : 'GandhiSansRegular'};
  line-height: normal;
  color: ${(props) => (props.$active ? '#7b78e5' : '#d9d9d9')};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 22px;
  margin-bottom: 30px;

  img {
    width: 24px;
    height: 24px;
  }
`;

const NavigationItem = ({ children, activeIcon, inactiveIcon, active }) => {
  return (
    <StylizedListItem $active={active}>
      <img src={active ? activeIcon : inactiveIcon} alt="" />
      {children}
    </StylizedListItem>
  );
};

export default NavigationItem;

import styled from 'styled-components';
import NavigationItem from './NavigationItem';

const StylizedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

const SideBar = () => {
  return (
    <aside>
      <nav>
        <StylizedList>
          <NavigationItem
            activeIcon={'public/icons/home-ativo.png'}
            inactiveIcon={'public/icons/home-inativo.png'}
            active={true}
          >
            Início
          </NavigationItem>
          <NavigationItem
            activeIcon={'public/icons/mais-vistas-ativo.png'}
            inactiveIcon={'public/icons/mais-vistas-inativo.png'}
            active={false}
          >
            Mais vistas
          </NavigationItem>
          <NavigationItem
            activeIcon={'public/icons/mais-curtidas-ativo.png'}
            inactiveIcon={'public/icons/mais-curtidas-inativo.png'}
            active={false}
          >
            Mais curtidas
          </NavigationItem>
          <NavigationItem
            activeIcon={'public/icons/novas-ativo.png'}
            inactiveIcon={'public/icons/novas-inativo.png'}
            active={false}
          >
            Novas
          </NavigationItem>
          <NavigationItem
            activeIcon={'public/icons/surpreenda-me-ativo.png'}
            inactiveIcon={'public/icons/surpreenda-me-inativo.png'}
            active={false}
          >
            Surpreenda-me
          </NavigationItem>
        </StylizedList>
      </nav>
    </aside>
  );
};

export default SideBar;

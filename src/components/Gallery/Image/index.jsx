import styled from 'styled-components';
import ButtonIcon from '../../ButtonIcon';

const FigureStylized = styled.figure`
  width: ${(props) => (props.$expanded ? '90%' : '460px')};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: 'GandhiSansBold';
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const FooterStylized = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Image = ({
  photo,
  expanded = false,
  onZoomChange,
  handleFavoritePhoto,
}) => {
  const favoriteIcon = photo.favorite
    ? 'public/icons/favorito-ativo.png'
    : 'public/icons/favorito.png';

  return (
    <FigureStylized $expanded={expanded} id={`foto-${photo.id}`}>
      <img src={photo.path} alt={photo.titulo} />
      <figcaption>
        <h3>{photo.titulo}</h3>
        <FooterStylized>
          <h4>{photo.fonte}</h4>

          <ButtonIcon onClick={() => handleFavoritePhoto(photo)}>
            <img src={favoriteIcon} alt="favorite icon" />
          </ButtonIcon>
          {!expanded && (
            <ButtonIcon
              aria-hidden={expanded}
              onClick={() => onZoomChange(photo)}
            >
              <img src="public/icons/expandir.png" alt="expand icon" />
            </ButtonIcon>
          )}
        </FooterStylized>
      </figcaption>
    </FigureStylized>
  );
};

export default Image;

import styled from 'styled-components';
import Image from '../Gallery/Image';
import ButtonIcon from '../ButtonIcon';

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogStylized = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }
`;

const ModalZoom = ({ photo, setSelectedPhoto, handleFavoritePhoto }) => {
  return (
    <>
      {photo && (
        <>
          <Overlay />
          <DialogStylized open={!!photo} onClose={() => setSelectedPhoto(null)}>
            <Image
              photo={photo}
              expanded={true}
              handleFavoritePhoto={handleFavoritePhoto}
            />
            <form method="dialog">
              <ButtonIcon formMethod="dialog">
                <img src="/icons/fechar.png" alt="close icon" />
              </ButtonIcon>
            </form>
          </DialogStylized>
        </>
      )}
    </>
  );
};

export default ModalZoom;

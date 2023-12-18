import styled from 'styled-components';

const FooterStylized = styled.footer`
  display: flex;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  background: #04244f;
  padding: 22px;

  p {
    color: #fff;
    text-align: right;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
`;

const Footer = () => {
  return (
    <FooterStylized>
      <SocialContainer>
        <a href="http://" target="_blank">
          <img src="public/image/social/facebook.svg" alt="facebook icon" />
        </a>
        <a href="http://" target="_blank">
          <img src="public/image/social/twitter.svg" alt="twitter icon" />
        </a>
        <a href="http://" target="_blank">
          <img src="public/image/social/instagram.svg" alt="instagram icon" />
        </a>
      </SocialContainer>
      <p>Desenvolvido por Alura.</p>
    </FooterStylized>
  );
};

export default Footer;

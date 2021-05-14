import styled, { keyframes } from 'styled-components';

const Title = () => {
  return (
    <>
      <Container>
        <h1>iH</h1>
        <h1>I'm Adrien</h1>
        <h4>full stack developer</h4>
      </Container>
    </>
  );
};

export default Title;

const blink = keyframes`
50% {
  border-color: transparent;
}
`;

const Container = styled.div`
  margin-left: 7vw;
  h1 {
    font-family: Audiowide;
    font-size: 3rem;
    color: ${(props) => props.theme.colors.primary};
    overflow: hidden;
    width: 270px;
  }
  h1:nth-child(1) {
    unicode-bidi: bidi-override;
    text-align: left;
    direction: rtl;
    ::first-letter {
      color: orange;
    }
  }
  h1:nth-child(2) {
    border-right: 0.15em solid orange;

    animation: ${blink} 0.5s step-end infinite alternate;
  }
  h4 {
    font-family: Audiowide;
    font-size: 1.3rem;
    color: orange;
  }
  @media screen and (max-width: 510px) {
    margin-top: 5vh;
  }
`;

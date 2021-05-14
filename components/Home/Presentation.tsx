import styled from 'styled-components';

const Presentation = () => {
  return (
    <Container>
      <h3>I am a fullstack developer based in Switzerland.</h3>
      <p>
        I learned programming on my own. I used FullStackOpen from the
        University of Helsinki, FreeCodeCamp, The Odin Project and Codecademy.
      </p>
      <p>
        I work with React and it's echosystem for the frontend and with
        Node/Express/MongoDB for the backend.
        <br />
        You can find my stack bellow.
      </p>
    </Container>
  );
};

export default Presentation;

const Container = styled.section`
  margin: 40px auto;
  font-family: Roboto;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary};
  letter-spacing: 1.2px;
  width: 90vw;
  max-width: 500px;
  text-align: justify;
  p {
    margin-top: 15px;
  }
`;

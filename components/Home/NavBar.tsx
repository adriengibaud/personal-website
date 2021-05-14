import styled from 'styled-components';

const NavBar = () => {
  return (
    <Container>
      <Button>work</Button>
      <Button>about me</Button>
      <Button>contact me</Button>
    </Container>
  );
};

export default NavBar;

const Container = styled.nav`
  position: absolute;
  top: 5%;
  right: 0%;
  width: 318px;
  height: 60px;
  @media screen and (max-width: 740px) {
    top: 0%;
  }
`;

const Button = styled.button`
  height: 100%;
  padding: 15px;
  font: 1em Audiowide, cursive;
  color: ${(props) => props.theme.colors.primary};
  background: none;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-left: none;
  border-right: none;
  :hover {
    border-bottom: 3px solid orange;
  }
`;

import styled from 'styled-components';
import NavBar from './NavBar';
import Presentation from './Presentation';
import StackCard from './StackCard';
import Title from './Title';
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiNextDotJs,
  SiStyledComponents,
  SiNodeDotJs,
  SiMongodb,
  SiGraphql,
  SiFirebase,
} from 'react-icons/si';

const HomeBody = () => {
  return (
    <Container>
      <TopContainer>
        <Title />
      </TopContainer>
      <Presentation />
      <h3 className='stackTitle'>Stacks</h3>
      <CardContainer>
        <StackCard
          title='Frontend'
          infos={[
            {
              text: 'React.js',
              icon: <SiReact />,
              details: 'hook, context...',
            },
            {
              text: 'HTML',
              icon: <SiHtml5 />,
            },
            {
              text: 'CSS',
              icon: <SiCss3 />,
            },
            {
              text: 'Redux.js',
              icon: <SiRedux />,
              details: 'toolkit',
            },
            {
              text: 'Next.js',
              icon: <SiNextDotJs />,
            },
          ]}
        />
        <StackCard
          title='Backend'
          infos={[
            {
              text: 'Node.js',
              icon: <SiNodeDotJs />,
            },
            {
              text: 'Mongodb',
              icon: <SiMongodb />,
            },
            {
              text: 'Graphql',
              icon: <SiGraphql />,
            },
            {
              text: 'Firebase',
              icon: <SiFirebase />,
            },
          ]}
        />
      </CardContainer>
    </Container>
  );
};

export default HomeBody;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-top: 50px;
  background-color: ${(props) => props.theme.colors.secondary};
  .stackTitle {
    margin-left: 7vw;
    font: 2rem Audiowide, cursive;
    position: relative;
    background-color: none;
    z-index: 2;
    color: ${(props) => props.theme.colors.primary};
    ::before {
      content: '';
      position: absolute;
      top: 75%;
      left: 50px;
      bottom: 16px;
      width: 100px;
      height: 12px;
      transform: skew(-12deg) translateX(-50%);
      background: orange;
      z-index: -1;
    }
  }
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardContainer = styled.section`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media screen and (max-width: 630px) {
    flex-direction: column;
    align-items: center;
  }
`;

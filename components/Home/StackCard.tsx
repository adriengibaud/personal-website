import { IconContext } from 'react-icons';
import { IconType } from 'react-icons/lib';
import styled from 'styled-components';
import Image from 'next/image';

const StackCard = ({
  title,
  infos,
}: {
  title: string;
  infos: { text: string; icon: any; details?: string }[];
}) => {
  return (
    <Container>
      <h4>{title}</h4>
      <StackContainer>
        {infos.map((e) => {
          return (
            <div className='stack'>
              <span>
                <div className='icon'>{e.icon}</div>
                <p className='textInfo'>{e.text}</p>
              </span>
              {e.details && <p className='details'>{e.details}</p>}
            </div>
          );
        })}
      </StackContainer>
    </Container>
  );
};

export default StackCard;

const Container = styled.div`
  padding: 15px 0;
  margin-bottom: 30px;
  width: 300px;
  font: 1.5rem Roboto, sans-serif;
  background: ${(props) => props.theme.colors.secondaryDark};
  border-radius: 10px;
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  h4 {
    background-color: none;
    text-align: center;
    color: orange;
    position: relative;
    z-index: 2;
  }
`;

const StackContainer = styled.div`
  display: flex;
  flex-direction: column;

  .stack {
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.colors.primary};
    font: 1.5rem Roboto, sans-serif;
    span {
      display: flex;
      flex-direction: row;
    }
    .details {
      font-size: 1rem;
      text-align: center;
    }
    :nth-child(1) {
      margin-top: 10px;
    }
  }
  .icon {
    position: relative;
    font-size: 2rem;
    padding: 15px 10px 0 0;
  }
  .textInfo {
    padding: 15px 15px 0px 0;
    background-color: none;
  }
`;

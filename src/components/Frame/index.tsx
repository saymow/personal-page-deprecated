import React from 'react';

import {
  Container,
  Background,
  FrameContent,
  MainSquare,
  ShadowSquare,
  Title,
  NameBox,
  Decorator,
} from './styles';

const Frame: React.FC = () => {
  return (
    <Container>
      <Background />
      <FrameContent>
        <MainSquare>
          <ShadowSquare />:
          <Title>
            Web <br />
            Developer
          </Title>
        </MainSquare>
        <NameBox>
          <Decorator />
          <p>Gustavo Alves</p>
        </NameBox>
      </FrameContent>
    </Container>
  );
};

export default Frame;

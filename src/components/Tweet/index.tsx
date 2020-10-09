import React from 'react';

import { Container,  
        Retweeted, 
        OracleIcon, 
        Body, 
        Avatar, 
        Content, 
        Header,
        Dot,
        Description,
        ImageContent,
        Icons,
        Status,
        CommentIcon,
        RetweetIcon,
        LikeIcon,
      } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <OracleIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Oracle Brasil </strong>
            <span> @oracledobrasil</span>
            <Dot />
            <time>27 de junho</time>
          </Header>

          <Description>Oracle do Brasil Sistemas ❤️</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>

            <Status>
              <RetweetIcon />
              33
            </Status>

            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;

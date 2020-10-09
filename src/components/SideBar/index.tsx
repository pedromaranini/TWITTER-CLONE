import React from 'react';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { Container, 
        SearchWrapper, 
        SearchInput, 
        SearchIcon, 
        Body, } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List 
          title="Talvez você curta"
          elements={[
            <FollowSuggestion 
              name="Gabriel Tosta"
              nickname="@gabrieltosta"
            />,
            <FollowSuggestion 
              name="Júlia Stefanoni"
              nickname="@jujustefanoni"
            />,
            <FollowSuggestion 
              name="Gabriel Pato"
              nickname="@gabrielpato"
            />,
          ]}
        />

        <List 
          title="O que está acontencendo"
          elements={[
            <News />,
            <News />,
            <News />,
          ]}
        />
      </Body>
    </Container>
  );
};

export default SideBar;

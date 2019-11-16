import React from 'react';
import { Container, Header, Progress } from 'semantic-ui-react';
import styled from 'styled-components';

const InfoPage = () => {
  return (
    <Page>
      <Title> Jumbo </Title>

      <Gutter />

      <TextArea>
        <Header as="h1">Site</Header>

        <Text>
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehe
        </Text>
      </TextArea>

      <TextArea>
        <Header as="h1">Purpose of the project</Header>

        <Text>
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehe
        </Text>
      </TextArea>

      <TextArea>
        <Header as="h1">Project timeline</Header>

        <Text>Project started on 1.5.2019</Text>

        <Text>
          <Progress percent="55" indicating />
        </Text>
      </TextArea>
    </Page>
  );
};

const Page = styled(Container)({
  // backgroundColor: 'lightblue',
  paddingTop: '20px',
});

const Text = styled.p`
  font-size: 20px;
  margin-left: 100px;
`;

const Gutter = styled.div`
  height: 50px;
  width: 50px;
`;

const TextArea = styled.div`
  margin-bottom: 50px;
`;

const Title = styled.p`
  font-size: 3em;
  font-weight: bold;
`;

export default InfoPage;

import React from 'react';
import { Container, Header, Progress, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { data } from '../db'

const InfoPage = () => {
  const { id } = useParams();

  let history = useHistory();

  function handleClick() {
    history.push('/');
  }

  const job = data.find(job => job.id === id)

  return (
    <MainPage>
      <Page>
        <Flex>
          <Title>{job.name}</Title>
          <Title>{job.address}</Title>

          <ButtonCustom onClick={handleClick}>Back to search</ButtonCustom>
        </Flex>

        <Gutter />

        <TextArea>
          <Header as="h1">Purpose of the project</Header>

          <Text>
            {job.description}
          </Text>
        </TextArea>

        <TextArea>
          <Header as="h1">Information about the site</Header>

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
            <Progress percent="75" indicating />
          </Text>
        </TextArea>
      </Page>
    </MainPage>
  );
};

const ButtonCustom = styled(Button)({});

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Page = styled(Container)({
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

const MainPage = styled.div`
  height: 100vh;
`;

const Title = styled.p`
  font-size: 3em;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

export default InfoPage;

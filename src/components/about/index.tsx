import Women from 'assets/img/woman_hero.png';
import {
  Wrapper,
  Content,
  Text,
  Overhead,
  Title,
  Subtitle,
  Image,
} from 'components/about/styles';
import { Container } from 'styles/container';

export const About = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Text>
            <Overhead>New trend</Overhead>
            <Title>
              Autumn sale stylish <br />
              <b>women&apos;s</b>
            </Title>
            <Subtitle>Discover more</Subtitle>
          </Text>
          <Image src={Women} />
        </Content>
      </Container>
    </Wrapper>
  );
};

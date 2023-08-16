import { Container, Content, Footer, Header, Hero } from "./components";
import { Maps } from "./components/Maps";

export const App = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Hero />
      </Content>
      <Footer />
    </Container>
  );
};

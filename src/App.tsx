import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/themes";
import { Container, Content, Footer, Header, Hero } from "./components";
import { useState } from "react";

export const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Container>
        <Header theme={theme} onThemeChange={setTheme} />
        <Content>
          <Hero />
        </Content>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

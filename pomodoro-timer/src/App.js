import "./App.css";
import styled from "styled-components";

import Tasks from "./components/Tasks/Tasks";

const Background = styled.div`
  position: fixed;
  top: 0;
  background-color: #2ea9df;
  background-image: url(./assets/texture.png);
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  return (
    <Background>
      <Container>
        <Tasks />
      </Container>
    </Background>
  );
}

export default App;

import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <Title>- Styled Components -</Title>
      <SampleButton>afaga</SampleButton>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.p`
  margin: 0;
  color: #3d84a8;
`;

const SampleButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #46cdcf;
  }
`;

import { ClipLoader } from "react-spinners";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loding = () => {
  return (
    <div>
      <Container>
        <ClipLoader color={"red"} />
      </Container>
    </div>
  );
};

import styled from "styled-components";

const BodyWrapper = styled.div`
  .plus {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .plusButton {
    position: absolute;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    padding: 0;
    z-index: 1000;
    background-color: pink;
    border: none;
  }
`;

export default BodyWrapper;

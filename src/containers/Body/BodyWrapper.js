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

  .toy2 {
    background-color: white;
    border: none;
    box-shadow: 0 0 10px pink !important;
    margin-bottom: 7px;
    color: #ffa1a1;

    &::placeholder {
      color: #ffa1a1;
    }
  }
`;

export default BodyWrapper;

import styled from "styled-components";

const HeaderWrapper = styled.div`
  .row {
    display: flex;
    justify-content: space-between;
  }

  .day {
    font-size: 35px;
    color: #ffa1a1;
  }
  .month,
  .year {
    color: #ffa1a1;
  }
  .hour,
  .minutes {
    font-size: 25px;
    color: #ffa1a1;
  }

  .Toy {
    min-height: 500px;
    min-width: 300px;
    background-color: white;
  }

  .btom {
    bottom: 10px;
    left: 50px;
  }
  .bton {
    bottom: 10px;
    right: 50px;
  }

  .toy3 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    border-radius: 5px;
    height: 36px;
    box-shadow: 0 0 10px pink !important;
    background-color: white;
    text-align: center;
    color: #ffa1a1;
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

  .iconsButton {
    font-size: 12px;
    color: white;
  }
`;

export default HeaderWrapper;

import styled from "styled-components";

const HeaderWrapper = styled.div`
  .row {
    display: flex;
    justify-content: space-between;
  }

  .day {
    font-size: 35px;
  }
  .hour,
  .minutes {
    font-size: 25px;
  }

  .Toy {
    min-height: 500px;
    min-width: 300px;
  }

  .skip {
    display: flex;
  }

  .skipButton {
    padding: 0;
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    height: 18px;
    width: 18px;
  }

  .iconsButton {
    font-size: 12px;
    color: white;
  }
`;

export default HeaderWrapper;

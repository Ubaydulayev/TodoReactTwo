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
    background-color: #fff2f2;
  }
  
  .toy2 {
    background-color: #fff2f2;
    border: none;
  }

  .iconsButton {
    font-size: 12px;
    color: white;
  }
`;

export default HeaderWrapper;

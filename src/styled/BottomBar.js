import styled from "@emotion/styled";

const BottomBar = styled.footer`
  position: relative;
  display: flex;
  width: 100%;
  height: 80px;
  padding: 0px 16px 0px 4px;
  align-items: center;
  justify-content: space-between;
  background: #f7ece4;

  .leading-icon {
    position: relative;
    display: flex;
  }

  .fab {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    background: #fdb;
    /* M3/Elevation Light/3 */
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3),
      0px 4px 8px 3px rgba(0, 0, 0, 0.15);
  }
`;

export { BottomBar };

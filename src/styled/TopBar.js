import styled from "@emotion/styled";

const TopBar = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 8px 4px;
  background: #f7ece4;

  h2 {
    font-weight: 400;
  }

  .trailing-icon {
    position: relative;
    display: flex;
  }
`;

export { TopBar };

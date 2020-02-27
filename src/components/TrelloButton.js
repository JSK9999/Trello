import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const StyledButton = styled(Button)`
  && {
    color: white;
    background: #2e2e2e;
  }
`;

const TrelloButton = ({ children, onClick, onKeyPress }) => {
  return (
    <StyledButton
      variant="contained"
      onMouseDown={onClick}
      onKeyPress={onKeyPress}
    >
      {children}
    </StyledButton>
  );
};

export default TrelloButton;

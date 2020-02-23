//에딧을 할때 새로 나오는 카드착이 필요함
import React from "react";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";
import Textarea from "react-autosize-textarea";
import Card from "@material-ui/core/Card";

const Container = styled.div`
  width: 284px;
  margin-bottom: 8px;
`;

const StyledTextArea = styled(Textarea)`
  resize: none;
  width: 100%;
  outline: none;
  border: none;
`;

const StyledCard = styled(Card)`
  min-height: 85px;
  padding: 6, 8, 2;
`;

const ButtonContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  cursor: pointer;
`;

function TrelloForm({ list, text = "", onChange, closeForm, children }) {
  const placeholder = list ? "list title" : "title card";
  return (
    <Container>
      <StyledCard>
        <StyledTextArea
          placeholder={placeholder}
          autoFocus
          value={text}
          onChange={e => {
            onChange(e);
          }}
        ></StyledTextArea>
      </StyledCard>
      <ButtonContainer>{children}</ButtonContainer>
      <StyledIcon onMouseDown={closeForm}></StyledIcon>
    </Container>
  );
}
export default TrelloForm;

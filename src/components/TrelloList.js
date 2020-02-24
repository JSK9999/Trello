import React from "react";
import styled from "styled-components";
import TrelloCard from "../components/TrelloCard";
import { useSelector } from "react-redux";
const ListContainer = styled.div`
  background-color: "green";
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin: 0 8 0 0;
`;
const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline-color: blue;
  border-radius: 3px;
  margin-bottom: 3px;
  padding: 5px;
`;
const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const ListTitle = styled.h4`
  transition: 0.3s ease-in;
  ${TitleContainer}:hover & {
    background: #eee;
  }
`;

function TrelloList({ title, cards, listID, list, index }) {
  const cardlist = useSelector(state => state.cards);
  console.log(listID);
  console.log(title);
  console.log(cards);
  console.log(cardlist);
  return (
    <>
      <ListContainer>
        <TitleContainer>
          <ListTitle>
            리스트입니다.
            {cards.map((card, index) => {
              const littlecard = cardlist[card];
              console.log(littlecard);
              if (littlecard) {
                return (
                  <TrelloCard
                    //카드에는 텍스트 아이디 리스트
                    text={littlecard.text}
                    key={littlecard.id}
                    id={littlecard.id}
                    index={index}
                    list={littlecard.list}
                  />
                );
              }
            })}
          </ListTitle>
        </TitleContainer>
      </ListContainer>
    </>
  );
}
export default TrelloList;

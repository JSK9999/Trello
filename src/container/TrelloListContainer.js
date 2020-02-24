import React from "react";
import { useSelector } from "react-redux";
import TrelloList from "../components/TrelloList";
import styled from "styled-components";
import TrelloAdd from "../components/TrelloAdd";

const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function TrelloListContainer() {
  const lists = useSelector(state => state.lists);
  const origin = useSelector(state => state.origin);
  const cards = useSelector(state => state.cards);
  console.log(lists);
  return (
    <div>
      <ListsContainer>
        {origin.map((listID, index) => {
          const list = lists[listID];
          if (list) {
            const listCards = list.cards.map(cardID => cards[cardID]);

            return (
              <TrelloList
                list={list}
                listID={list.id}
                title={list.title}
                key={list.id}
                cards={listCards}
                index={index}
              />
            );
          }
        })}

        <TrelloAdd list />
      </ListsContainer>
    </div>
  );
}
export default TrelloListContainer;

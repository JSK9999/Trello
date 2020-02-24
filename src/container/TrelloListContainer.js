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

  console.log(lists);
  return (
    <div>
      <ListsContainer>
        {lists.map((list, index) => (
          <TrelloList
            list={list}
            listID={list.id}
            title={list.title}
            key={list.id}
            cards={list.cards}
            index={index}
          />
        ))}
        <TrelloAdd />
      </ListsContainer>
    </div>
  );
}
export default TrelloListContainer;

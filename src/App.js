import React from "react";
import TrelloListContainer from "./container/TrelloListContainer";
import styled from "styled-components";
const Header = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  height: 75px;
  padding: 1rem;
  font-size: 1.25rem;
  text-align: justify;
  margin: 0 auto;
  color: #e6e6e6;
  font-weight: bold;
`;
function App() {
  return (
    <>
      <TrelloListContainer />
      <Header>
        Trello의 리스트 와 카드 추가,수정,삭제 드래그 앤 드롭, 카드 클릭시 모달
        기능이 있습니다.
      </Header>
    </>
  );
}
export default App;

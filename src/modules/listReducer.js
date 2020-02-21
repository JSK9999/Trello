import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 5;
const initialState = [
  {
    title: "어제 못한것들",
    id: `리스트번호${0}`,
    cards: [
      {
        id: `카드번호${0}`,
        text: "코테준비"
      },
      {
        id: `카드번호${1}`,
        text: "포폴 관리 "
      }
    ]
  },
  {
    title: "오늘 할일",
    id: `리스트번호${1}`,
    cards: [
      {
        id: `카드번호${2}`,
        text:
          "하드코딩한것 깔끔하게 고치기 css부분 스타일드 컴포넌트로 정리하기"
      },
      {
        id: `카드번호${3}`,
        text:
          "리덕스 하드코딩했으니 redux-thunk 로 바꿔보자 router로 페이지이동도 고려."
      },
      {
        id: `카드번호${4}`,
        text:
          "API요청을 받을수 있도록 만들고 싶다 근데  initialState의 값을 요청상태 3가지 관리하는데 기존의 값과어찌 합칠까..."
      }
    ]
  }
];

export default function listRedcuer(state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `리스트번호${listID}`
      };
      listID += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: `카드번호${cardID}`
      };
      cardID += 1;
      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });
      return newState;

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type
      } = action.payload;
      const newStat = [...state];

      //리스트 주변을 드래깅
      if (type === "list") {
        const list = newStat.splice(droppableIndexStart, 1);
        newStat.splice(droppableIndexEnd, 0, ...list);
        return newStat;
      }
      //같은 리스트 안에서
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);

        list.cards.splice(droppableIndexEnd, 0, ...card);
      }
      //다른 리스트
      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.find(list => droppableIdStart === list.id);
        const card = listStart.cards.splice(droppableIndexStart, 1);
        const listEnd = state.find(list => droppableIdEnd === list.id);

        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newStat;
    default:
      return state;
  }
}

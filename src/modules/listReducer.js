import uuid from "uuid/v4";
const ADD_CARD = "ADD_CARD";
const ADD_LIST = "ADD_LIST";
const DRAG_HAPPENED = "DRAG_HAPPENED";

export const addList = title => {
  const id = uuid();
  return { type: ADD_LIST, payload: { title, id } };
};
const initialState = {
  "0리스트": {
    id: "0리스트",
    title: "myList",
    cards: ["0카드"]
  }
};
export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => ({
  type: DRAG_HAPPENED,
  payload: {
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type
  }
});

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST: {
      const { title, id } = action.payload;
      const newList = {
        id: `${id}리스트`,
        title: title,
        cards: []
      };
      const newState = { ...state, [`${id}리스트`]: newList };
      return newState;
    }
    case ADD_CARD:
      const { listID, id } = action.payload;
      const list = state[listID];
      list.cards.push(`${id}카드`);
      return { ...state, [listID]: list };
    default:
      return state;
  }
}

/*
let listID = 1;
let cardID = 2;
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

    // edit
    case CONSTANTS.EDIT_CARD: {
      const { id, cardText, listID } = action.payload;

      /*
      id: "카드번호2"
      listID: "리스트번호1"
      cardText: "하드코딩한것 깔끔하게 고치기 css부분 스타일드 컴포
       /
      const list = state.find(list => list.id === action.payload.listID);
      //const card = list.cards.find(id => id.id === editCard.id);

      // const editcard = { ...card, id: id, text: cardText };

      // console.log(editcard);
      // console.log(card);
      console.log(listID);
      console.log(list.id);
      const card = { id: id, text: cardText };
      const update = list.cards.map(
        list => (list.id === listID ? { ...list, text: cardText } : list)

        /* if (list) {
          const update2 = list.cards.findIndex(function(item) {
            return item.id === action.payload.id;
          });
          if (update2 > -1) {
            list.cards.splice(update2, 1);
          }
          return {
            ...list,
            cards: list.cards.concat(card)
          };
        }
      });

      /*
      const update2 = list.cards.findIndex(function(item) {
        return item.id === action.payload.id;
      });
      if (update2 > -1) {
        list.cards.splice(update2, 1);
      }/
      );
      console.log(update);
      return update;
    }

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


*/

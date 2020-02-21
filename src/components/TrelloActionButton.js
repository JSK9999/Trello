import React from "react";
import Icon from "@material-ui/core/Icon";
import { useState } from "react";
import { Card, Button } from "@material-ui/core";
import TextareaAutosize from "react-autosize-textarea";
import { connect, useDispatch } from "react-redux";
import { addList, addCard } from "../actions";

const styles = {
  openForButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10
  }
};

function RenderForm({
  list,
  onClick,
  onChange,
  value,
  handleaddList,
  handleaddCard
}) {
  const placeholder = list ? "리스트 제목 입력 하셈" : "카드제목 입력 하셈 ";
  const buttonTitle = list ? "리스트 추가" : "카드 추가";
  return (
    <div>
      <Card
        style={{
          overflow: "visible",
          minHeight: 80,
          minWidth: 272,
          padding: "6px 8px 2px"
        }}
      >
        <TextareaAutosize
          placeholder={placeholder}
          autoFocus
          onClick={onClick}
          onChange={onChange}
          value={value}
          style={{
            resize: "none",
            width: "100%",
            outline: "none",
            border: "none"
          }}
        />
      </Card>
      <div>
        <Button
          onMouseDown={list ? handleaddList : handleaddCard}
          onClick={onClick}
          variant="contained"
          style={{ color: "white", backgroundColor: "#151515" }}
        >
          {buttonTitle}
        </Button>
        <Icon onClick={onClick} style={{ marginLeft: 8, cursor: "pointer" }}>
          close
        </Icon>
      </div>
    </div>
  );
}

function RenderAddButton({ list, onClick }) {
  const buttonText = list ? "add another list" : "add another card";
  const buttonTextOpacity = list ? 1 : 0.5;
  const buttonTextBackground = list ? "rgba(0,0,0,0.15)" : "inherit";
  const buttonTextColor = list ? "white" : "inherit";

  return (
    <div
      onClick={onClick}
      style={{
        ...styles.openForButtonGroup,
        opacity: buttonTextOpacity,
        color: buttonTextColor,
        background: buttonTextBackground
      }}
    >
      <Icon>add</Icon>
      <p>{buttonText}</p>
    </div>
  );
}

function TrelloActionButton(props) {
  const { listID, list } = props;

  console.log(listID);

  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleaddList = () => {
    dispatch(addList(value));
    setValue("");
    setOpen(!open);
  };

  const handleaddCard = () => {
    dispatch(addCard(listID, value));
    setValue("");
    setOpen(!open);
  };
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };
  const onChange = e => setValue(e.target.value);
  return (
    <div>
      {open ? (
        <RenderForm
          listID={listID}
          handleaddCard={handleaddCard}
          handleaddList={handleaddList}
          onClick={onClick}
          onChange={onChange}
          value={value}
          list={list}
        />
      ) : (
        <RenderAddButton onClick={onClick} list={list} />
      )}
    </div>
  );
}

export default connect()(TrelloActionButton);

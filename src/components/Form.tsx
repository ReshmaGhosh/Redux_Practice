import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../redux/slices/product";

export default function Form() {
  const [userInput, setUserInput] = useState("");

  const dispatch = useDispatch();

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);

    dispatch(actions.searchProduct(userInput));
  }

  return (
    <TextField
      onChange={onChangeHandler}
      id="standard-basic"
      label="Search"
      variant="standard"
    />
  );
}

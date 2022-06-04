import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import {  Input } from "@chakra-ui/react";
const InputForm = () => {
  const { inputInfo, handelSubmit } = useContext(TodoContext);
  return (
    <div>
      <div className="head">
      TODO APP
        <hr />
      </div>
        <br />
      <form className="form">
        <Input
          borderColor="teal"
          width="e-sm"
          text="text"
          placeholder="Enter Todo"
          ref={inputInfo}
        />
        <Input backgroundColor="green"
          width="e-sm"
          fontSize="2xl"
          fontWeight="semo"
          type="submit"
          onClick={handelSubmit}
        />
      </form>
    </div>
  );
};

export default InputForm;

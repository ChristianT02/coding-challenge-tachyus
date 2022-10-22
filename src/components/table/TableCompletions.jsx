import React, { useState } from "react";
import BaseCard from "../baseCard/BaseCard";
import InputButton from "../InputButton";
import TableInformation from "./TableInformation";

const TableCompletions = ({ source }) => {
  const [data, setData] = useState(source);

  function handleInput(newData) {
    setData(newData);
  }

  return (
    <BaseCard title="List Completions">
      <InputButton source={source} handleInput={handleInput} />
      <TableInformation source={data} />
    </BaseCard>
  );
};

export default TableCompletions;

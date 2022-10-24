import React, { useState } from "react";
import BaseCard from "../baseCard/BaseCard";
import InputButton from "../InputButton";
import TableInformation from "./TableInformation";

const TableProduction = ({ source }) => {
  const [data, setData] = useState(source);
  function handleInput(newData) {
    setData(newData);
  }
  return (
    <BaseCard title="List Production">
      <InputButton
        source={data}
        initial={source}
        handleInput={handleInput}
        label="Enter a filter wellAPI"
        nameFilter={"wellAPI"}
      />
      <TableInformation source={source} />
    </BaseCard>
  );
};

export default TableProduction;

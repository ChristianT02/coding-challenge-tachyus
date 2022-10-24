import React, { useEffect, useState } from "react";
import BaseCard from "../baseCard/BaseCard";
import CustomerCell from "../customerCell";
import InputButton from "../InputButton";
import TableInformation from "./TableInformation";

const TableCompletions = ({ source, onSelected }) => {
  const [data, setData] = useState(() => addOrder(source));
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    const array = generateData(data);
    setDataTable(array);
  }, [data]);

  function handleInput(newData) {
    const array = addOrder(newData);
    setData(array);
  }

  function handleSelected(name, wellAPI) {
    onSelected({ name, wellAPI });
  }

  function generateData(params) {
    return params.map((item) => ({
      ...item,
      wellName: (
        <CustomerCell
          key={item.order}
          value={item.wellName}
          update={(value) => updateDate({ value, order: item.order, name: "wellName" })}
          selected={() => handleSelected(item.wellName, item.wellAPI)}
          withSelected={typeof onSelected === "function"}
        />
      ),
    }));
  }

  function addOrder(params) {
    return params.map((item, order) => ({ ...item, order }));
  }

  function updateDate({ value, name, order }) {
    const array = [...data];
    const index = array.findIndex((item) => item.order === order);
    if (index > -1) {
      const item = array[index];
      item[name] = value;
      array.splice(index, 1, item);
      setData(array);
    }
  }

  return (
    <BaseCard title="List Completions">
      <InputButton
        source={data}
        initial={source}
        handleInput={handleInput}
        label="Enter a filter wellName"
        nameFilter={"wellName"}
      />
      <TableInformation source={dataTable} />
    </BaseCard>
  );
};

export default TableCompletions;

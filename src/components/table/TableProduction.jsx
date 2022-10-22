import React from "react";
import BaseCard from "../baseCard/BaseCard";
import TableInformation from "./TableInformation";

const TableProduction = ({ source }) => {
  return (
    <BaseCard title="List Production">
      <TableInformation source={source} />
    </BaseCard>
  );
};

export default TableProduction;

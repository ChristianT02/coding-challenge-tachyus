import { useEffect, useMemo, useState } from "react";
import Table from ".";

const TableInformation = ({ source }) => {
  const [columns, setColumns] = useState([]);
  const rows = useMemo(() => source, [source]);

  useEffect(() => {
    if (source.length === 0) return;
    const array = Object.keys(source[0]).map((item) => ({ name: `${item}` }));
    setColumns(array);
  }, [source]);

  return <Table rows={rows} columns={columns} />;
};

export default TableInformation;

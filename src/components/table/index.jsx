import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { Box, Table as MuiTable, TableCell, Typography } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { capitalizeFirstLetter } from "../../utils/helper";

function Table({ columns, rows }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const renderColumns = columns.map(({ name, align, width }, key) => {
    let pl;
    let pr;

    if (key === 0) {
      pl = 3;
      pr = 3;
    } else if (key === columns.length - 1) {
      pl = 3;
      pr = 3;
    } else {
      pl = 1;
      pr = 1;
    }

    return (
      <TableCell
        sx={{
          width: width ?? "auto",
          textAlign: align,
          pl: align === "left" ? pl : 3,
          pr: align === "right" ? pr : 3,
        }}
        key={name}
      >
        <Typography color="textSecondary" variant="h6">
          {capitalizeFirstLetter(name)}
        </Typography>
      </TableCell>
    );
  });

  const renderRows = rows
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row, key) => {
      const rowKey = `row-${key}`;

      const tableRow = columns.map(({ name, align, width }) => {
        let template;

        if (["object"].includes(typeof row[name])) {
          template = (
            <TableCell
              key={uuidv4()}
              sx={{
                width: width ?? "auto",
                textAlign: align,
              }}
            >
              {row[name]}
            </TableCell>
          );
        } else {
          template = (
            <TableCell
              key={uuidv4()}
              sx={{
                width: width ?? "auto",
                textAlign: align,
              }}
            >
              <Typography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{
                  display: "inline-block",
                  width: width || "max-content",
                }}
              >
                {row[name]}
              </Typography>
            </TableCell>
          );
        }

        return template;
      });

      return <TableRow key={rowKey}>{tableRow}</TableRow>;
    });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return useMemo(
    () => (
      <>
        <TableContainer>
          <MuiTable
            aria-label="simple table"
            sx={{
              mt: 1,
              whiteSpace: "nowrap",
            }}
          >
            <Box component="thead">
              <TableRow>{renderColumns}</TableRow>
            </Box>
            <TableBody>{renderRows}</TableBody>
          </MuiTable>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </>
    ),
    [renderColumns, renderRows]
  );
}

Table.defaultProps = {
  columns: [],
  rows: [{}],
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
};

export default Table;

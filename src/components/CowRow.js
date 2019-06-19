import React from "react";
import { observer } from "mobx-react";
import { ReactComponent as CowHead } from "./cow.svg";

const rowStyles = {
  border: "1px solid blue",
  borderRadius: "10px",
  padding: "5px",
  margin: "5px"
};

const CowRow = observer(({ cow }) => {
  return (
    <div className="columns is-mobile is-centered" style={{ ...rowStyles }}>
      <div className="column is-2">
        <CowHead height={50} />
      </div>
      <div className="column is-6">{cow.name}</div>
    </div>
  );
});

export default CowRow;

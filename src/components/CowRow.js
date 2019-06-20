import React from "react";
import { observer } from "mobx-react";
import { ReactComponent as CowHead } from "./cow.svg";

const rowStyles = {
  border: "1px solid #6497b1",
  borderRadius: "10px"
};

const CowRow = observer(({ cow }) => {
  return (
    <div className="columns is-mobile is-centered is-vcentered" style={{ ...rowStyles }}>
      <div className="column is-2">
        <CowHead height={40} />
      </div>
      <div className="column is-6">{cow.name}</div>
    </div>
  );
});

export default CowRow;

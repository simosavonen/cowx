import React from "react";
import { observer } from "mobx-react";
import { ReactComponent as CowHead } from "./cow.svg";
import ProductionChart from "./ProductionChart";

const rowStyles = {
  border: "1px solid #6497b1",
  borderRadius: "10px",
  marginBottom: "20px"
};

const CowRow = observer(({ cow, index }) => {
  const rowColor =
    index % 2 ? { backgroundColor: "rgba(150,150,200,0.2)" } : {};

  const total = cow.production.reduce((sum, month) => sum + month, 0);
  const average = Math.floor(total / 12);

  return (
    <div
      className="columns is-mobile is-centered is-vcentered is-size-5 is-size-4-widescreen"
      style={{ ...rowStyles, ...rowColor }}
    >
      <div
        className="column is-narrow"
        style={{ padding: "0.75rem 0.4rem 0.35rem 1rem" }}
      >
        <CowHead width={40} stroke={cow.isFemale ? "#FF0000" : "#0000FF"} />
      </div>
      <div className="column">{cow.name}</div>
      <div className="column is-3-mobile is-2-widescreen">
        <ProductionChart productionData={cow.production} />
      </div>
      <div className="column is-2-tablet is-1-widescreen has-text-centered is-hidden-mobile">
        {total}
      </div>
      <div className="column is-2-tablet is-1-widescreen has-text-centered is-hidden-mobile">
        {average}
      </div>
    </div>
  );
});

export default CowRow;

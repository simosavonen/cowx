import React from "react";
import Trend from "react-trend";
import { observer } from "mobx-react";

const ProductionChart = observer(({ productionData }) => {
  if (!productionData) return null;
  return (
    <Trend
      data={productionData}
      autoDraw
      autoDrawDuration={3000}
      autoDrawEasing="ease-out"
      gradient={["#222"]}
      radius={0}
      strokeWidth={5}
      strokeLinecap={"round"}
    />
  );
});

export default ProductionChart;

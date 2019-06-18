import React from "react";
import { observer } from "mobx-react";

const CowRow = observer(({ cow }) => {
  return (
    <div>
      <div>name: {cow.name}</div>
    </div>
  );
});

export default CowRow;

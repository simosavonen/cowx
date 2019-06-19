import React from "react";
import { inject, observer } from "mobx-react";
import CowRow from "./CowRow";

const CowList = inject("cowsStore")(
  observer(({ cowsStore }) => {
    return (
      <div className="section">
        {cowsStore.cows.map(cow => (
          <CowRow key={cow.id} cow={cow} />
        ))}
      </div>
    );
  })
);

export default CowList;

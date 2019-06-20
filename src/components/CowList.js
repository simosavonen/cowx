import React from "react";
import { inject, observer } from "mobx-react";
import CowRow from "./CowRow";

const CowList = inject("cowsStore")(
  observer(({ cowsStore }) => {
    return (
      <div className="section">
        <div className="columns is-centered">
          <div className="column is-8">

            <div className="columns is-centered" >
              <div className="column is-2" style={{ paddingBottom: "3px"}}></div>
              <div className="column is-6" style={{ paddingBottom: "3px"}}>Nimi</div>
            </div>

            {cowsStore.cows.map(cow => (
              <CowRow key={cow.id} cow={cow} />
            ))}

          </div>
        </div>
      </div>      
    );
  })
);

export default CowList;

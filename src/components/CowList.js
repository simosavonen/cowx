import React from "react";
import { inject, observer } from "mobx-react";
import CowRow from "./CowRow";

const CowList = inject("cowsStore")(
  observer(({ cowsStore }) => {
    return (
      <div className="section">
        <div className="columns is-centered">
          <div className="column is-12-mobile is-9-tablet is-8-desktop is-7">
            <div className="columns is-mobile is-centered">
              <div className="column is-narrow">
                <div style={{ width: "40px" }} />
              </div>
              <div className="column">Name</div>
              <div className="column is-4-mobile is-3-tablet is-2-desktop">
                Production
              </div>
              <div className="column is-2-tablet is-1-widescreen has-text-centered is-hidden-mobile">
                Total
              </div>
              <div className="column is-2-tablet is-1-widescreen has-text-centered is-hidden-mobile">
                Avg
              </div>
            </div>

            {cowsStore.cows.map((cow, i) => (
              <CowRow key={cow.id} cow={cow} index={i} />
            ))}
          </div>
        </div>
      </div>
    );
  })
);

export default CowList;

import { observable, action, computed, decorate } from "mobx";
import { create, persist } from "mobx-persist";
import uuid from "uuid";

export class CowsStore {
  cows = [];

  add(cow) {
    this.cows.push({ ...cow, id: uuid.v4() });
  }

  get count() {
    return this.cows.length;
  }
}

decorate(CowsStore, {
  cows: [persist("list"), observable],
  add: action,
  count: computed
});

const hydrate = create({
  storage: localStorage,
  jsonify: true
});

const initialState = window.localStorage.cows || {
  cows: [
    {
      id: uuid.v4(),
      name: "Mansikki",
      isFemale: true,
      color: "Brown",
      born: "2017-02-03",
      breed: "Ayshire"
    },
    {
      id: uuid.v4(),
      name: "Mustikki",
      isFemale: false,
      color: "Black",
      born: "2018-04-06",
      breed: "Ayshire"
    }
  ]
};

export const cowsStore = new CowsStore();
hydrate("cows", cowsStore, initialState);

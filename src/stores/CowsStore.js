import { observable, action, decorate } from "mobx";
import { create, persist } from "mobx-persist";
import uuid from "uuid";

export class CowsStore {
  cows = [];

  add(cow) {
    this.cows.push({ ...cow, id: uuid.v4() });
  }
}

decorate(CowsStore, {
  cows: [persist("list"), observable],
  add: action
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
      breed: "Ayshire",
      production: [450, 500, 400, 620, 700, 550, 300, 440, 750, 800, 620, 350]
    },
    {
      id: uuid.v4(),
      name: "Mustikki",
      isFemale: false,
      color: "Black",
      born: "2018-04-06",
      breed: "Ayshire",
      production: [250, 380, 300, 460, 720, 325, 640, 700, 805, 240, 200, 150]
    }
  ]
};

export const cowsStore = new CowsStore();
hydrate("cows", cowsStore, initialState);

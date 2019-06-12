import reducer from "../reducers";
import { createStore } from "redux";

const initialState = { tech: "Redux" };
export const store = createStore(reducer, initialState);

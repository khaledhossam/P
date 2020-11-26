import Vuex from "vuex";
import Auth from "./Auth/Auth";

const createStore = () => {
  return new Vuex.Store({
    actions: {},
    modules: {
      Auth
    }
  });
};

export default createStore;

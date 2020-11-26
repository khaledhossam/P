import Cookie from "js-cookie";
export default {
  state: {
    user: null
  },

  mutations: {
    authUser(state, userData) {
      console.log("User On Store >> ", userData);
      state.user = userData;
    }
  },

  actions: {
    async login(vuexContext, account) {
      try {
        // login
        await this.$fire.auth.signInWithEmailAndPassword(
          account.email,
          account.password
        );
        // get JWT from firebase
        const token = await this.$fire.auth.currentUser.getIdToken();

        //Set the cookie
        Cookie.set("access", token);
        vuexContext.commit("authUser", this.$fire.auth.currentUser);
      } catch (e) {
        throw e;
      }
    }
  }
};

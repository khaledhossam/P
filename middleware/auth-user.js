import Cookie from "js-cookie";

export default function({ redirect }) {
  if (process.client) {
    console.log("user-auth");
    if (!Cookie.get("user")) {
      return redirect("/");
    }
    // console.log("user", Cookie.get("user"));
  } else {
    if (!Cookie.get("user")) {
      return redirect("/");
    }
    // console.log("user", Cookie.get("user"));
  }
}

import router from "next/router";
import Cookies from "js-cookie";
import cookie from "cookie";
import apiCall from "./api-call";

export const isLoggedIn = (reqCookies) => {
  // IF DON'T HAVE REQUEST COOKIES, GET THE COOKIE FROM CLIENT
  if (!reqCookies) {
    return !!Cookies.get("gtg_recruitment_system_is_user_logged_in");
  }
  // OTHERWISE GET COOKIE FROM SERVER
  return !!cookie.parse(reqCookies).gtg_recruitment_system_is_user_logged_in;
};

// LOGIN FUNCTION THAT CREATES gtg_recruitment_system_is-user_logged_in, EXPIRE IN NEXT 7 DAYS FROM WHEN USER LOGIN
export const importCookies = () => {
  Cookies.set("gtg_recruitment_system_is_user_logged_in", true, {
    expires: 7,
    sameSite: "lax",
  });
  router.push("/");
};

export const logOut = () => {
  if (typeof window !== "undefined") {
    // REMOVE LOGGED IN USERS COOKIE AND REDIRECTO TO LOGIN PAGE
    Cookies.remove("gtg_recruitment_system_is_user_logged_in", {
      expires: 7,
      sameSite: "lax",
    });
    router.push("/auth/login");
  }
};

export const setSanctumCSRF = (formInput) => {
  apiCall()
    .get("/sanctum/csrf-cookie")
    .then(() => {
      logIn(formInput);
    });
};

export const logIn = (formInput) => {
  apiCall()
    .post("/api/login", formInput)
    .then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        console.log("login token: ", response.data);
        importCookies();
      }
    });
};

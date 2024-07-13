import { server$ } from "@builder.io/qwik-city";

export const getThemeCookie = server$(async function () {
  return this.cookie.get("theme")?.value;
});

export const setThemeCookie = server$(async function (theme: string) {
  this.cookie.set("theme", theme, {
    secure: true,
    httpOnly: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24, // this would be one day or so...
    path: "/",
  });
});

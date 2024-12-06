"use server";

import { cookies } from "next/headers";

export const createAuthCookie = () => {
  const cookieStore = cookies(); // Hent cookies fra serverens forespørselskontekst
  cookieStore.set("userAuth", "myToken", {
    secure: true,
    httpOnly: true,
    path: "/",
    maxAge: 3600, // 1 time
  });
};

export const deleteAuthCookie = () => {
  const cookieStore = cookies();
  cookieStore.delete("userAuth");
};

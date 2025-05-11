"use server";

import { signIn } from "./auth";

export async function signOutAction() {
  await fetch("/api/auth/signout", { method: "POST" });
}

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/account",
  }); 
}
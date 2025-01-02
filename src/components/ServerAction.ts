// serverActions.ts
"use server";

import { signOut } from "@/auth";
import { redirect } from "next/navigation";

export const handleSignOut = async () => {
  await signOut();
  redirect("/");
};

import { Stack } from "expo-router";
import React from "react"
import { ClerkProvider } from "@clerk/expo"
import { tokenCache } from "@clerk/expo/token-cache"
import { ThemeProvider } from "@joe111/neo-ui";
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error('Add your Clerk Publish Key')
}
export default function RootLayout() {
  return <ThemeProvider ><ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}><Stack /></ClerkProvider></ThemeProvider>;
}

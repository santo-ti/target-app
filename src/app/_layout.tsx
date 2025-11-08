import { Stack } from "expo-router";

import { colors } from "@/theme/colors";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarStyle: "dark",
        contentStyle: { backgroundColor: colors.white },
      }}
    />
  );
}

import { StyleSheet } from "react-native";

import { colors, fonts } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 10,
  },
  label: {
    color: colors.gray[500],
    fontFamily: fonts.medium,
    fontSize: 12,
  },
  input: {
    color: colors.black,
    fontFamily: fonts.regular,
    fontSize: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[300],
  },
});

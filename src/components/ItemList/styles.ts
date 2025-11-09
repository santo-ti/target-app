import { StyleSheet } from "react-native";

import { colors, fonts } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
    fontSize: 18,
    fontFamily: fonts.medium,
    color: colors.black,
  },
  listContent: {
    gap: 16,
    paddingTop: 16,
    paddingBottom: 72,
  },
  listEmpty: {
    fontSize: 14,
    color: colors.gray[600],
    fontFamily: fonts.regular,
  },
});

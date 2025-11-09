import { ColorValue, View } from "react-native";

import { styles } from "./styles";

export type SeparatorProps = {
  color: ColorValue;
};

type Props = {
  data: SeparatorProps;
};

export function Separator({ data }: Props) {
  return <View style={[styles.container, { backgroundColor: data.color }]} />;
}

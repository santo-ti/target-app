import { MaterialIcons } from "@expo/vector-icons";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import { styles } from "./styles";

export type ItemTargetProps = {
  id?: string;
  name: string;
  percentage: string;
  current: string;
  target: string;
};

type Props = TouchableOpacityProps & {
  data: ItemTargetProps;
};

export function ItemTarget({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.content}>
        <Text style={styles.name}>{data.name}</Text>

        <Text style={styles.status}>
          {data.percentage} • {data.current} de {data.target}
        </Text>
      </View>

      <MaterialIcons name="chevron-right" size={20} />
    </TouchableOpacity>
  );
}

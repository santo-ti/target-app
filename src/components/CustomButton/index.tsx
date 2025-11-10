import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { colors } from "@/theme";
import { styles } from "./styles";

export type CustomButtonProps = TouchableOpacityProps & {
  title: string;
  isProcessing?: boolean;
};

export function CustomButton({
  title,
  isProcessing = false,
  ...rest
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      disabled={isProcessing}
      {...rest}
    >
      <Text style={styles.title}>
        {isProcessing ? (
          <ActivityIndicator size="small" color={colors.white} />
        ) : (
          title
        )}
      </Text>
    </TouchableOpacity>
  );
}

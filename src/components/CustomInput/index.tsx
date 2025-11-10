import { Text, TextInput, TextInputProps, View } from "react-native";

import { colors } from "@/theme";
import { styles } from "./styles";

type CustomInputProps = TextInputProps & {
  label: string;
};

export function CustomInput({ label, ...rest }: CustomInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={styles.input}
        placeholderTextColor={colors.gray[400]}
        autoFocus
        {...rest}
      />
    </View>
  );
}

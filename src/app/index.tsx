import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello, world!</Text>

      <Button title="Nova meta" onPress={() => router.navigate("/target")} />

      <Button
        title="Nova transação"
        onPress={() => router.navigate("/transaction/520365")}
      />

      <Button
        title="Progresso"
        onPress={() => router.navigate("/in-progress/12")}
      />
    </View>
  );
}

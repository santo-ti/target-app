import { router, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Transaction() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Transaction {id}</Text>

      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}

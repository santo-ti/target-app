import { router, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";

export default function InProgress() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Meta em andamento: {id}</Text>

      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}

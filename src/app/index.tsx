import { router } from "expo-router";
import { View } from "react-native";

import { Button } from "@/components/Button";
import { HomeHeader } from "@/components/HomeHeader";
import { ItemList } from "@/components/ItemList";
import { ItemTarget } from "@/components/ItemTarget";

const summaryData = {
  total: "R$ 2.680,00",
  input: { label: "Entradas", value: "R$ 6.184,90" },
  output: { label: "Saídas", value: "-R$ 883,65" },
};

const targets = [
  {
    id: "1",
    name: "Apple Watch",
    percentage: "50%",
    current: "R$ 580,00",
    target: "R$ 1.790,00",
  },
  {
    id: "2",
    name: "Comprar uma cadeira ergonômica",
    percentage: "75%",
    current: "R$ 900,00",
    target: "R$ 1.200,00",
  },
  {
    id: "3",
    name: "Comprar uma cadeira ergonômica",
    percentage: "75%",
    current: "R$ 1.200,00",
    target: "R$ 3.000,00",
  },
];

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summaryData} />

      <ItemList
        title="Metas"
        data={targets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemTarget
            data={item}
            onPress={() => router.navigate(`/in-progress/${item.id}`)}
          />
        )}
        emptyMessage="Nenhuma meta! Clique em Nova meta para adicionar."
        containerStyle={{ paddingHorizontal: 24 }}
      />

      <View style={{ padding: 24, paddingBottom: 32 }}>
        <Button title="Nova meta" onPress={() => router.navigate("/target")} />
      </View>
    </View>
  );
}

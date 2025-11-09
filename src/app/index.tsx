import { View } from "react-native";

import { HomeHeader } from "@/components/HomeHeader";
import { TargetItem } from "@/components/TargetItem";

const summaryData = {
  total: "R$ 2.680,00",
  input: { label: "Entradas", value: "R$ 6.184,90" },
  output: { label: "Saídas", value: "-R$ 883,65" },
};

const targets = [
  {
    name: "Comprar uma cadeira ergonômica",
    percentage: "75%",
    current: "900,00",
    target: "1.200,00",
  },
];

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summaryData} />

      <TargetItem data={targets[0]} />
    </View>
  );
}

import { View } from "react-native";

import { CurrencyInput } from "@/components/CurrencyInput";
import { CustomButton } from "@/components/CustomButton";
import { CustomInput } from "@/components/CustomInput";
import { PageHeader } from "@/components/PageHeader";

export default function Target() {
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader
        title="Meta"
        subtitle="Economize para alcançar sua meta financeira."
      />

      <View style={{ marginTop: 32, gap: 24 }}>
        <CustomInput
          label="Nova meta"
          placeholder="Ex: Viagem para praia, Apple Watch"
        />

        <CurrencyInput label="Valor alvo" value={24350.73} />

        <CustomButton title="Salvar" onPress={() => {}} />
      </View>
    </View>
  );
}

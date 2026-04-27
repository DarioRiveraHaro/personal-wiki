import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CreateDirectory } from "../../components/CreateDirectory";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="px-6 flex-row flex-wrap justify-between gap-y-4 pt-4">
        <CreateDirectory />
        <CreateDirectory />
        <CreateDirectory />
      </View>
    </SafeAreaView>
  );
}

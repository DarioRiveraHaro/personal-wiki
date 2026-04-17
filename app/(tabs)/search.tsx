import { Text } from "@/components/ui/text";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text className="text-2xl font-bold">Search</Text>
    </SafeAreaView>
  );
}

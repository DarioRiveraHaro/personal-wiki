import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "lucide-react-native";

export default function DirectoryScreen() {
  const { id, name } = useLocalSearchParams();
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="px-6 pt-4 pb-4 flex-row items-center border-b border-border">
        <Pressable onPress={() => router.back()} className="mr-4 active:opacity-50 p-2 -ml-2 rounded-full bg-muted/10">
          <ArrowLeft size={24} className="text-foreground" />
        </Pressable>
        <Text className="text-2xl font-bold text-foreground" numberOfLines={1}>{name}</Text>
      </View>
      <View className="flex-1 px-6 pt-6">
        <Text className="text-muted-foreground text-center mt-10">Directory content for {name} goes here.</Text>
      </View>
    </SafeAreaView>
  );
}

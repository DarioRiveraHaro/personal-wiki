import { CreateDirectory } from "@/components/CreateDirectory";
import { DirectoryCard } from "@/components/DirectoryCard";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const router = useRouter();
  const [directories, setDirectories] = useState<
    { id: string; name: string; description: string; imageUri?: string }[]
  >([]);

  const handleCreateDirectory = (
    name: string,
    description: string,
    imageUri?: string,
  ) => {
    setDirectories((prev) => [
      ...prev,
      { id: Date.now().toString(), name, description, imageUri },
    ]);
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="px-6 pt-8 pb-4">
        <Text className="text-5xl font-bold text-foreground">The</Text>
        <Text className="text-6xl font-light font-serif italic text-primary">
          Primordium
        </Text>
      </View>
      <ScrollView contentContainerClassName="px-6 flex-row flex-wrap justify-between gap-y-4 pb-24">
        {directories.map((dir) => (
          <DirectoryCard
            key={dir.id}
            name={dir.name}
            imageUri={dir.imageUri}
            onPress={() =>
              router.push({
                pathname: "/directory/[id]",
                params: { id: dir.id, name: dir.name, imageUri: dir.imageUri },
              })
            }
          />
        ))}
        <CreateDirectory onCreate={handleCreateDirectory} />
      </ScrollView>
    </SafeAreaView>
  );
}

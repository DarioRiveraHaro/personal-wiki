import { useState } from "react";
import { CreateDirectory } from "@/components/CreateDirectory";
import { DirectoryCard } from "@/components/DirectoryCard";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  const [directories, setDirectories] = useState<{ id: string; name: string; description: string }[]>([]);

  const handleCreateDirectory = (name: string, description: string) => {
    setDirectories(prev => [...prev, { id: Date.now().toString(), name, description }]);
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerClassName="px-6 flex-row flex-wrap justify-between gap-y-4 pt-4 pb-24">
        {directories.map((dir) => (
          <DirectoryCard 
            key={dir.id} 
            name={dir.name} 
            onPress={() => router.push({ pathname: '/directory/[id]', params: { id: dir.id, name: dir.name } })} 
          />
        ))}
        <CreateDirectory onCreate={handleCreateDirectory} />
      </ScrollView>
    </SafeAreaView>
  );
}

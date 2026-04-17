import { SafeAreaView } from "react-native-safe-area-context";

import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <NavBar />
    </SafeAreaView>
  );
}

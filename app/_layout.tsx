import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import { NavBar } from "@/components/NavBar";
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold, Manrope_700Bold, Manrope_800ExtraBold } from "@expo-google-fonts/manrope";
import "../global.css";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <SafeAreaProvider>
        <View className="flex-1">
          <Stack screenOptions={{ headerShown: false, animation: 'fade' }} />
          <NavBar />
        </View>
      </SafeAreaProvider>
      <PortalHost />
    </>
  );
}

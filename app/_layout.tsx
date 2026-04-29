import { ThemeProvider } from "@react-navigation/native";
import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import { NavBar } from "@/components/NavBar";
import { useFonts, Manrope_400Regular, Manrope_500Medium, Manrope_600SemiBold, Manrope_700Bold, Manrope_800ExtraBold } from "@expo-google-fonts/manrope";
import { Newsreader_400Regular, Newsreader_700Bold, Newsreader_400Regular_Italic, Newsreader_300Light_Italic, Newsreader_300Light } from "@expo-google-fonts/newsreader";
import { useColorScheme } from "nativewind";
import { NAV_THEME } from "@/lib/theme";
import "../global.css";

export default function Layout() {
  const { colorScheme } = useColorScheme();
  const [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
    Newsreader_400Regular,
    Newsreader_700Bold,
    Newsreader_400Regular_Italic,
    Newsreader_300Light_Italic,
    Newsreader_300Light
  });

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider value={NAV_THEME[colorScheme === "dark" ? "dark" : "light"]}>
      <SafeAreaProvider>
        <View className="flex-1 bg-background">
          <Stack screenOptions={{ headerShown: false, animation: 'fade', contentStyle: { backgroundColor: 'transparent' } }} />
          <NavBar />
        </View>
      </SafeAreaProvider>
      <PortalHost />
    </ThemeProvider>
  );
}

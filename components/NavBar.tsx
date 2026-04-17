import { Icon } from "@/components/ui/icon";
import { usePathname, useRouter } from "expo-router";
import { Heart, Home, Search, User as UserIcon } from "lucide-react-native";
import * as React from "react";
import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function NavBar() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { id: "home", href: "/home", icon: Home },
    { id: "favorites", href: "/favorites", icon: Heart },
    { id: "search", href: "/search", icon: Search },
    { id: "user", href: "/user", icon: UserIcon },
  ];

  return (
    <View
      className="absolute bottom-0 w-full items-center pointer-events-auto"
      style={{ paddingBottom: Math.max(insets.bottom, 24) }}
    >
      <View className="flex-row items-center justify-between dark:bg-zinc-900 bg-zinc-100 rounded-full px-6 py-3 shadow-2xl w-[90%] max-w-sm border dark:border-zinc-800 border-zinc-200">
        {tabs.map((tab) => {
          // Check if current path matches tab href. Also map / and /index to home.
          const isActive =
            pathname === tab.href ||
            (tab.id === "home" && (pathname === "/" || pathname === "/index"));
          return (
            <Pressable
              key={tab.id}
              onPress={() => router.replace(tab.href as any)}
              className={`items-center justify-center p-3 rounded-full transition-colors ${
                isActive ? "bg-[#2F8476]" : "bg-transparent"
              }`}
            >
              <Icon
                as={tab.icon}
                className={
                  isActive
                    ? "text-white dark:text-black"
                    : "text-zinc-500 dark:text-zinc-400"
                }
                size={22}
                strokeWidth={isActive ? 2.5 : 2}
              />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

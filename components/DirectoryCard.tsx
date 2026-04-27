import { Pressable, Text, View } from "react-native";

interface Props {
  name: string;
  onPress?: () => void;
}

export function DirectoryCard({ name, onPress }: Props) {
  return (
    <Pressable
      className="w-[48%] bg-muted/20 rounded-3xl border border-border active:bg-muted/40 transition-colors overflow-hidden p-5"
      style={{ aspectRatio: 1 }}
      unstable_pressDelay={100}
      onPress={onPress}
    >
      <View className="flex-1 w-full h-full justify-end items-start">
        <Text
          className="text-foreground font-semibold text-lg text-left"
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {name}
        </Text>
      </View>
    </Pressable>
  );
}

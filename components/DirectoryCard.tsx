import { Image, Pressable, Text, View } from "react-native";

interface Props {
  name: string;
  imageUri?: string;
  onPress?: () => void;
}

export function DirectoryCard({ name, imageUri, onPress }: Props) {
  return (
    <Pressable
      className="w-[48%] bg-muted/20 rounded-3xl border border-border active:bg-muted/40 transition-colors overflow-hidden p-5 relative"
      style={{ aspectRatio: 1 }}
      unstable_pressDelay={100}
      onPress={onPress}
    >
      {imageUri && (
        <View className="absolute inset-0">
          <Image
            source={{ uri: imageUri }}
            className="w-full h-full opacity-70"
            resizeMode="cover"
          />
          <View className="absolute inset-0 bg-background/60" />
        </View>
      )}
      <View className="flex-1 w-full h-full justify-end items-start relative z-10">
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

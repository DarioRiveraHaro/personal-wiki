import { Pressable, View } from "react-native";
import { Plus } from "lucide-react-native";

export function CreateDirectory() {
  return (
    <Pressable 
      className="w-[48%] bg-muted/20 rounded-3xl border-2 border-dashed border-border active:bg-muted/40 transition-colors overflow-hidden"
      style={{ aspectRatio: 1 }}
    >
      <View className="flex-1 w-full h-full items-center justify-center">
        <View className="bg-background w-16 h-16 rounded-full shadow-sm border border-border items-center justify-center">
          <Plus size={32} className="text-foreground" />
        </View>
      </View>
    </Pressable>
  );
}

import { Pressable, Text, TextInput, View } from "react-native";

interface Props {
  onClose: () => void;
}

export function CreateDirectoryForm({ onClose }: Props) {
  return (
    <View className="flex-1">
      <Text className="text-2xl font-bold text-foreground mb-6">
        Create New Directory
      </Text>

      <View className="gap-y-4">
        <View className="gap-y-2">
          <Text className="text-sm font-medium text-muted-foreground">
            Directory Name
          </Text>
          <TextInput
            className="w-full bg-muted/20 border border-border rounded-xl px-4 py-3 text-foreground"
            placeholder="e.g. Vacation Photos"
            placeholderTextColor="#888"
          />
        </View>

        <View className="gap-y-2">
          <Text className="text-sm font-medium text-muted-foreground">
            Description (Optional)
          </Text>
          <TextInput
            className="w-full bg-muted/20 border border-border rounded-xl px-4 py-3 text-foreground h-24"
            placeholder="What goes here?"
            placeholderTextColor="#888"
            multiline
            textAlignVertical="top"
          />
        </View>
      </View>

      <View className="mt-auto pb-8 flex-row justify-end gap-x-4">
        <Pressable
          onPress={onClose}
          className="px-6 py-3 rounded-xl border border-border active:bg-muted/20"
        >
          <Text className="text-foreground font-medium">Cancel</Text>
        </Pressable>
        <Pressable
          onPress={onClose}
          className="px-6 py-3 rounded-xl bg-primary active:opacity-80"
        >
          <Text className="text-primary-foreground font-medium">Create</Text>
        </Pressable>
      </View>
    </View>
  );
}

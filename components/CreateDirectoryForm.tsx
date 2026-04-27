import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

interface Props {
  onClose: () => void;
  onSubmit: (name: string, description: string) => void;
}

export function CreateDirectoryForm({ onClose, onSubmit }: Props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const isFormValid = name.trim().length > 0 && description.trim().length > 0;

  const handleCreate = () => {
    if (isFormValid) {
      onSubmit(name.trim(), description.trim());
    }
  };
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
            value={name}
            onChangeText={setName}
          />
        </View>

        <View className="gap-y-2">
          <Text className="text-sm font-medium text-muted-foreground">
            Description
          </Text>
          <TextInput
            className="w-full bg-muted/20 border border-border rounded-xl px-4 py-3 text-foreground h-24"
            placeholder="What goes here?"
            placeholderTextColor="#888"
            multiline
            textAlignVertical="top"
            value={description}
            onChangeText={setDescription}
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
          onPress={handleCreate}
          className={`px-6 py-3 rounded-xl bg-primary active:opacity-80 ${!isFormValid ? 'opacity-50' : ''}`}
          disabled={!isFormValid}
        >
          <Text className="text-primary-foreground font-medium">Create</Text>
        </Pressable>
      </View>
    </View>
  );
}

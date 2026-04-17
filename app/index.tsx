import { View, Button, Alert } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center bg-white dark:bg-black">
      <Button title="Press Me" onPress={() => Alert.alert("Button Pressed")} />
    </View>
  );
}

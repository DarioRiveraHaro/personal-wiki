import { CreateDirectoryForm } from "@/components/CreateDirectoryForm";
import { Plus } from "lucide-react-native";
import { useRef, useState } from "react";
import { Animated, Dimensions, Modal, Pressable, View } from "react-native";

const { height: screenHeight } = Dimensions.get("window");

interface Props {
  onCreate: (name: string, description: string, imageUri?: string) => void;
}

export function CreateDirectory({ onCreate }: Props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(screenHeight)).current;

  const openModal = () => {
    setModalVisible(true);
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: screenHeight,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setModalVisible(false);
    });
  };

  return (
    <>
      <Pressable
        className="w-[48%] bg-muted/20 rounded-3xl border-2 border-dashed border-border active:bg-muted/40 transition-colors overflow-hidden"
        style={{ aspectRatio: 1 }}
        onPress={openModal}
        unstable_pressDelay={100}
      >
        <View className="flex-1 w-full h-full items-center justify-center">
          <View className="bg-background w-16 h-16 rounded-full shadow-sm border border-border items-center justify-center">
            <Plus size={32} className="text-foreground" />
          </View>
        </View>
      </Pressable>

      <Modal
        visible={isModalVisible}
        animationType="none"
        transparent={true}
        onRequestClose={closeModal}
      >
        <Animated.View
          className="flex-1 justify-end"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", opacity: fadeAnim }}
        >
          <Pressable className="absolute inset-0" onPress={closeModal} />
          <Animated.View
            className="h-[75%] bg-background rounded-t-3xl w-full pt-6 px-6 relative shadow-lg"
            style={{ transform: [{ translateY: slideAnim }] }}
          >
            <CreateDirectoryForm
              onClose={closeModal}
              onSubmit={(name, description, imageUri) => {
                onCreate(name, description, imageUri);
                closeModal();
              }}
            />
          </Animated.View>
        </Animated.View>
      </Modal>
    </>
  );
}

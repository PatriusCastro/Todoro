import { View, Text, TouchableOpacity } from "react-native";
import { X } from "lucide-react-native";

type TodoItemProps = {
  text: string;
  onRemove: () => void;
};

export default function TodoItem({ text, onRemove }: TodoItemProps) {
  return (
    <View className="flex-row items-center bg-gray-100 p-3 rounded-lg mb-2">
      <Text className="flex-1 text-base">{text}</Text>
      <TouchableOpacity
        onPress={onRemove}
        className="ml-2 bg-red-500 px-3 py-1 rounded-lg"
      >
        <X size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
}

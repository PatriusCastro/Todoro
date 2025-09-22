import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import "../global.css";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold mb-8 text-blue-500">
        Todoro ⏱️
      </Text>

      <Link href="/pomodoro" asChild>
        <TouchableOpacity className="bg-blue-500 px-6 py-3 rounded-full mb-4">
          <Text className="text-white font-semibold">Go to Pomodoro</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/todos" asChild>
        <TouchableOpacity className="bg-blue-500 px-6 py-3 rounded-full">
          <Text className="text-white font-semibold">Go to Todos</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

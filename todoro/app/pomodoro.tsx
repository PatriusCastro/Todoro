import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import "../global.css";

export default function Pomodoro() {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && time > 0) {
      timer = setInterval(() => setTime((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-5xl font-bold text-black mb-6">
        {formatTime(time)}
      </Text>

      <TouchableOpacity
        onPress={() => setIsRunning(!isRunning)}
        className="bg-blue-500 px-8 py-4 rounded-full"
      >
        <Text className="text-white text-lg font-semibold">
          {isRunning ? "Pause" : "Start"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

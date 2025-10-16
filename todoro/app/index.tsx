import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Pause, Play, TimerReset,  SkipForward, Flame } from "lucide-react-native";
import { useTheme } from "../context/ThemeContext";
import "../global.css";

export default function Home() {
  const { isDarkMode } = useTheme();

  const [time, setTime] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
  
    useEffect(() => {
      let timer: ReturnType<typeof setInterval>;
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
    <View className="flex-1 px-4 py-6 bg-gray-50 dark:bg-black">

      {/* Home Timer */}
      <View
        className="flex-row justify-center w-full bg-white dark:bg-neutral-900 p-4 rounded-2xl mb-5"
      >
        <View className="flex-row justify-center">
          <View>
            <Text className="text-lg font-semibold mb-0.5 text-black dark:text-white text-center">
              Task Name
            </Text>
            <Text className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Current Task
            </Text>
            <Text className="text-[60px] text-center font-bold text-black dark:text-white my-2">
              {formatTime(time)}
            </Text>
            <TouchableOpacity
              onPress={() => setIsRunning(!isRunning)}
              className="p-2 rounded-full flex flex-row items-center justify-between"
            >
              <TimerReset color="gray" size={24} onPress={() => setTime(25 * 60)} />
              {isRunning ? (
                <Pause color={isDarkMode ? "white" : "black"} size={24} />
              ) : (
                <Play color={isDarkMode ? "white" : "black"} size={24} />
              )}
              <SkipForward color="gray" size={24} onPress={() => setTime(5 * 60)} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Streak and Goal */}
      <View className="flex-row gap-4 mb-6">
        <View className="flex-1 bg-white dark:bg-neutral-900 p-4 rounded-2xl">
          <Text className="text-sm text-gray-500 dark:text-gray-400 mb-4">Streak</Text>
          <View className="flex-row items-center gap-4">
            <Flame color="#f97316" size={32} />
            <Text className="text-3xl font-bold text-black dark:text-white">7</Text>
            <Text className="text-base text-gray-500 dark:text-gray-400">Days</Text>
          </View>
        </View>
        <View className="flex-1 bg-white dark:bg-neutral-900 p-4 rounded-2xl">
          <Text className="text-sm text-gray-500 dark:text-gray-400 mb-4">Today's goal</Text>
          <View className="flex-row items-center gap-4">
            <Text className="text-3xl font-bold text-black dark:text-white">3 of 5</Text>
            <Text className="text-base text-gray-500 dark:text-gray-400">Pomodoros</Text>
          </View>
        </View>
      </View>

      {/* <Link href="/pomodoro" asChild>
        <TouchableOpacity className="bg-blue-500 px-6 py-3 rounded-full mb-4">
          <Text className="text-white font-semibold">Go to Pomodoro</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/todos" asChild>
        <TouchableOpacity className="bg-blue-500 px-6 py-3 rounded-full">
          <Text className="text-white font-semibold">Go to Todos</Text>
        </TouchableOpacity>
      </Link> */}
    </View>
  );
}

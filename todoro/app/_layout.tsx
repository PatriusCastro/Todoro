import "../global.css";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Home, Clock, ListTodo } from "lucide-react-native";

export default function Layout() {
  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#3b82f6",
          tabBarStyle: { backgroundColor: "white" },
          headerStyle: { backgroundColor: "#3b82f6" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="pomodoro"
          options={{
            title: "Pomodoro",
            tabBarIcon: ({ color, size }) => <Clock color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="todos"
          options={{
            title: "Todos",
            tabBarIcon: ({ color, size }) => <ListTodo color={color} size={size} />,
          }}
        />
      </Tabs>
    </>
  );
}

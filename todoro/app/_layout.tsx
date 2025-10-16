import "../global.css";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Home, Hourglass, ListTodo } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useState } from "react";
import MenuModal from "../components/MenuModal";
import { ThemeProvider, useTheme } from "../context/ThemeContext";

// Separate component that uses the theme
function TabsContent() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { isDarkMode } = useTheme();

  const handleMenuPress = () => {
    setIsMenuVisible(true);
  };

  return (
    <>
      <StatusBar style={isDarkMode ? "light" : "dark"} />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#3b82f6",
          tabBarInactiveTintColor: isDarkMode ? "#8e8e93" : "#6b7280",
          tabBarStyle: { 
            backgroundColor: isDarkMode ? "#171717" : "white",
            borderTopColor: isDarkMode ? "#38383a" : "#f3f4f6",
            paddingTop: 6,
            paddingBottom: 6
          },
          headerStyle: { backgroundColor: isDarkMode ? "#171717" : "white" },
          headerTintColor: isDarkMode ? "#ffffff" : "#000",
          headerTitleStyle: { fontWeight: "bold", fontSize: 24 },
          headerShadowVisible: false,
          tabBarShowLabel: false,
          headerRight: () => (
            <TouchableOpacity onPress={handleMenuPress} style={{ marginRight: 16 }}>
              <FontAwesome6 name="equals" size={24} color={isDarkMode ? "#ffffff" : "#000"} />
            </TouchableOpacity>
          ),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Hello, Kath!",
            tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="pomodoro"
          options={{
            title: "Pomodoro",
            tabBarIcon: ({ color, size }) => <Hourglass color={color} size={size} />,
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

      <MenuModal 
        visible={isMenuVisible} 
        onClose={() => setIsMenuVisible(false)} 
      />
    </>
  );
}

// Root component that wraps everything with ThemeProvider
export default function Layout() {
  return (
    <ThemeProvider>
      <TabsContent />
    </ThemeProvider>
  );
}
import { useState } from "react";
import { Modal, View, Text, TouchableOpacity, ScrollView, Switch } from "react-native";
import { 
  SlidersHorizontal, 
  Bell, 
  Shield, 
  Info, 
  HelpCircle, 
  AlertTriangle,
  ChevronRight,
  Moon
} from "lucide-react-native";
import { useTheme } from "../context/ThemeContext";

interface MenuModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function MenuModal({ visible, onClose }: MenuModalProps) {
  const { isDarkMode, toggleTheme } = useTheme();

  const handleProfilePress = () => {
    console.log('Profile pressed');
    onClose();
  };

  const handleMenuItemPress = (item: string) => {
    console.log(`${item} pressed`);
    onClose();
  };

  const handleLogout = () => {
    console.log('Logout pressed');
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-gray-50 dark:bg-black">
        {/* Header */}
        <View className="flex-row items-center justify-between px-4 pt-4 pb-4 bg-white dark:bg-neutral-900">
          <View className="flex-row items-center">
            <TouchableOpacity onPress={onClose} className="mr-3">
              <ChevronRight 
                color={isDarkMode ? "#ffffff" : "#000"} 
                size={24} 
                style={{ transform: [{ rotate: '180deg' }] }} 
              />
            </TouchableOpacity>
            <Text className="text-xl font-semibold text-black dark:text-white">
              Settings
            </Text>
          </View>
        </View>

        <ScrollView className="flex-1" contentContainerStyle={{ padding: 16 }}>
          {/* Profile Card */}
          <TouchableOpacity
            onPress={handleProfilePress}
            className="flex-row items-center justify-between bg-white dark:bg-neutral-900 p-4 rounded-2xl mb-5"
          >
            <View className="flex-row items-center">
              <View className="w-12 h-12 rounded-full bg-gray-200 dark:bg-neutral-700 mr-3" />
              <View>
                <Text className="text-base font-semibold mb-0.5 text-black dark:text-white">
                  User Profile
                </Text>
                <Text className="text-sm text-gray-500 dark:text-gray-400">
                  View and edit profile
                </Text>
              </View>
            </View>
            <ChevronRight color={isDarkMode ? "#9ca3af" : "#9ca3af"} size={20} />
          </TouchableOpacity>

          {/* Other Settings */}
          <Text className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 ml-1">
            Other settings
          </Text>

          {/* Settings Group 1 */}
          <View className="bg-white dark:bg-neutral-900 rounded-2xl mb-4">
            <MenuItem
              icon={<SlidersHorizontal color={isDarkMode ? "#ffffff" : "#000"} size={20} />}
              title="Preferences"
              onPress={() => handleMenuItemPress('Preferences')}
              isDarkMode={isDarkMode}
            />
            <Divider isDarkMode={isDarkMode} />
            <MenuItem
              icon={<Bell color={isDarkMode ? "#ffffff" : "#000"} size={20} />}
              title="Notifications"
              onPress={() => handleMenuItemPress('Notifications')}
              isDarkMode={isDarkMode}
            />
            <Divider isDarkMode={isDarkMode} />
            <MenuItem
              icon={<Shield color={isDarkMode ? "#ffffff" : "#000"} size={20} />}
              title="Security"
              onPress={() => handleMenuItemPress('Security')}
              isDarkMode={isDarkMode}
            />
            <Divider isDarkMode={isDarkMode} />
            {/* Dark Mode Toggle */}
            <View className="flex-row items-center justify-between px-4">
              <View className="flex-row items-center">
                <View className="w-6 items-center mr-3">
                  <Moon color={isDarkMode ? "#ffffff" : "#000"} size={20} />
                </View>
                <Text className="text-base text-black dark:text-white">Dark Mode</Text>
              </View>
              <Switch
                value={isDarkMode}
                onValueChange={toggleTheme}
                thumbColor={isDarkMode ? '#3b82f6' : '#f4f3f4'}
                trackColor={{ false: '#d1d5db', true: '#93c5fd' }}
                ios_backgroundColor="#d1d5db"
              />
            </View>
          </View>

          {/* Settings Group 2 */}
          <View className="bg-white dark:bg-neutral-900 rounded-2xl mb-4">
            <MenuItem
              icon={<Info color={isDarkMode ? "#ffffff" : "#000"} size={20} />}
              title="About Todoro"
              onPress={() => handleMenuItemPress('About Todoro')}
              isDarkMode={isDarkMode}
            />
            <Divider isDarkMode={isDarkMode} />
            <MenuItem
              icon={<HelpCircle color={isDarkMode ? "#ffffff" : "#000"} size={20} />}
              title="FAQs"
              onPress={() => handleMenuItemPress('FAQs')}
              isDarkMode={isDarkMode}
            />
            <Divider isDarkMode={isDarkMode} />
            <MenuItem
              icon={<AlertTriangle color={isDarkMode ? "#ffffff" : "#000"} size={20} />}
              title="Report a problem"
              onPress={() => handleMenuItemPress('Report a problem')}
              isLast
              isDarkMode={isDarkMode}
            />
          </View>

          {/* Logout Button */}
          <TouchableOpacity
            onPress={handleLogout}
            className="bg-white dark:bg-neutral-900 p-4 rounded-2xl items-center mb-10"
          >
            <Text className="text-base font-medium dark:text-white">Log in</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
}

// Helper Components
interface MenuItemProps {
  icon: React.ReactNode;
  title: string;
  onPress: () => void;
  isLast?: boolean;
  isDarkMode: boolean;
}

function MenuItem({ icon, title, onPress, isLast = false, isDarkMode }: MenuItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center justify-between p-4"
    >
      <View className="flex-row items-center">
        <View className="w-6 items-center mr-3">
          {icon}
        </View>
        <Text className="text-base text-black dark:text-white">{title}</Text>
      </View>
      <ChevronRight color="#9ca3af" size={20} />
    </TouchableOpacity>
  );
}

function Divider({ isDarkMode }: { isDarkMode: boolean }) {
  return <View className="h-px bg-gray-100 dark:bg-neutral-800 mx-4" />;
}
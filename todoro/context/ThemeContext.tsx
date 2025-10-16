import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'nativewind';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedTheme) {
        setColorScheme(savedTheme as 'light' | 'dark');
      }
      setIsLoaded(true);
    } catch (error) {
      console.error('Error loading theme:', error);
      setIsLoaded(true);
    }
  };

  const toggleTheme = async () => {
    const newTheme = colorScheme === 'dark' ? 'light' : 'dark';
    try {
      await AsyncStorage.setItem('theme', newTheme);
      setColorScheme(newTheme);
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  };

  if (!isLoaded) {
    return null; // or a loading screen
  }

  return (
    <ThemeContext.Provider value={{ 
      isDarkMode: colorScheme === 'dark', 
      toggleTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
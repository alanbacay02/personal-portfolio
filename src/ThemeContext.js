
import React, { createContext, useContext, useEffect } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage';

// Create a context to manage theme-related state
const ThemeContext = createContext();

// ThemeProvider component manages the theme state and provides it through context
export const ThemeProvider = ({ children }) => {
  // Determine the user's preference for dark mode based on system or stored preference
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
  const storedPreference = JSON.parse(window.localStorage.getItem('isDark'))
  const userPreference = storedPreference !== null ? storedPreference : systemPreference

  // Use custom hook useLocalStorage to manage darkMode state in local storage
  const [darkMode, setDarkMode] = useLocalStorage('isDark', userPreference)

   // Function to toggle dark mode
  const changeDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Effect to apply or remove 'dark' class from body based on darkMode state
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }

  }, [darkMode])

   // Provide theme-related state and functionality through the ThemeContext.Provider
  return (
    <ThemeContext.Provider value={{ darkMode, changeDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook to access theme-related state and functionality from context
export const useTheme = () => useContext(ThemeContext);
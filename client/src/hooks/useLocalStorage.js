import { useState } from 'react'

// A custom hook to manage state in local storage
export const useLocalStorage = (key, initialValue) => {
  // Initialize the state by retrieving the stored value from localStorage or using the provided initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Attempt to retrieve the item from localStorage based on the provided key
      const item = window.localStorage.getItem(key)
      // Parse the retrieved item as JSON, or use the initial value if no item is found
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // Handle any errors that might occur during the retrieval or parsing process
      console.error(error)
      // Return the initial value in case of an error
      return initialValue
    }
  })

  // Function to update the state value and store it in localStorage
  const setValue = (value) => {
    try {
      // Update the state value
      setStoredValue(value)
      // Store the updated value in localStorage as JSON using the provided key
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      // Store the updated value in localStorage as JSON using the provided key
      console.log(error)
    }
  }

  // Return the current stored value and the function to update it
  return [storedValue, setValue]
}
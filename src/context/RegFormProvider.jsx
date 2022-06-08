import React, { useState, useContext } from 'react'
const AuthContext = React.createContext()
export const useFormInput = () => {
  return useContext(AuthContext)
}
export const RegFormProvider = ({ children }) => {
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('Afghanistan')
  const value = {
    firstName,
    setFirstName,
    middleName,
    setMiddleName,
    lastName,
    setLastName,
    contactNumber,
    setContactNumber,
    email,
    setEmail,
    location,
    setLocation,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default RegFormProvider

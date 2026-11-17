import { createContext, useState } from "react"

export const AuthContext = createContext(null)

export function AuthProvider({children}) {

    const [user, setUser] = useState(null)

    function login(username, password) {
       if (username === 'toto' && password === '123456') {
        setUser(username)
        return true
       }


        return false
    }

    function logout(){
        setUser(null)
    }


  return (
    <AuthContext.Provider value={{user, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
}


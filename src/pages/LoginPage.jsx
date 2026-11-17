import { useState } from "react"
import { useAuth } from "../hooks/useAuth"

function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {login} = useAuth()


  function handleSubmit(e) {
    e.preventDefault()

    if(login(username,password)) {
      alert('Connecté!')
    } else {
      alert('Identifiants incorrects')
    }
  }

  return (
    <>
    <div className="container mt-5">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        className="form-control mb-3"
        placeholder="username"
        value={username}
        onChange={e => setUsername(e.target.value)} />

        <input 
        type="password"
        className="form-control mb-3"
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.target.value)} />

        <button className="btn btn-dark">Connexion</button>



      </form>

    </div>
    </>
  )
}

export default LoginPage
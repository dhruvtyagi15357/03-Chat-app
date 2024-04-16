import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useLogout = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuthContext()

  const logout = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/auth/signout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
      const data = await res.json()
      if (res.ok) {
        console.log(data)
        localStorage.removeItem("chat-app")
        window.location.href = "/login"
        toast.success("Logged out successfully")
        setAuthUser(null);

      } else {
        console.log(data)
        toast.error("Error " + res.status + " : " + data.error)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

    return { logout, loading }
}

export default useLogout
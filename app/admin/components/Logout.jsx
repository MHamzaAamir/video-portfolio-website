import { redirect } from "next/navigation"

const handleLogout = async () =>{

    const res = await fetch('/api/admin/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    })

    redirect("/admin")

}

const Logout = () => {
  return (
    <button className="transition-colors duration-300 ease-out hover:bg-[#444444] px-3 py-2 rounded-2xl cursor-pointer" onClick={handleLogout}>Logout</button>
  )
}

export default Logout

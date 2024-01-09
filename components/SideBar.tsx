import NavBar from '@/components/Navbar'

export default function SideBar() {
  return (
    <aside className="w-48 h-full p-2 bg-default-100">
      <h1 className="py-4 text-primary text-xl text-center font-bold">
        HackerNews
        <br />
        Explorer
      </h1>
      <NavBar />
    </aside>
  )
}

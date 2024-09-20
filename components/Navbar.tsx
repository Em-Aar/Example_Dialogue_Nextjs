import Link from "next/link"
import Button from "./Button"
export default function Navbar() {
  return (
    <nav className="m-4">
      <Link href={"/"}>
        <Button btnText="Home"
        className="bg-gray-900 text-slate-100 rounded-md px-4 py-2" />
      </Link>
    </nav>
  )
}

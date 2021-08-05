import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"
export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Hello Mike!</h1>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/company/history">History</Link>
      </div>
      <div>
        <Link to="/testing">Testing</Link>
      </div>
    </div>
  )
}

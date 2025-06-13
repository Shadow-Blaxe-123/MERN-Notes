import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link to={"/"}>Notes App</Link>
      </div>
      <div>
        <Link to={"/create"}>New Note</Link>
      </div>
    </nav>
  );
}

import Link from "next/link";

export default function Titulo() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item my-auto">
            <Link className="nav-link text-light fs-6" href="/cadastro">Cadastro</Link>
          </li>
          <Link className="navbar-brand" href="/">
            <img src="./cartaBranca.png" alt="Logo" width="62" height="48" class="d-inline-block align-text-top" />
          </Link>
          <li className="nav-item my-auto">
            <Link className="nav-link text-light fs-6" href="/listagem">Listagem</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
import Link from "next/link";
export default function Header({ title }) {
  return (
    <>
      <header>
        <h2>{title}</h2>
        <nav>
          <ul className="header-navigation">
            <Link href={"/"}>
              <li>About</li>
            </Link>
            <Link href={"/book"}>
              <li>Books</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

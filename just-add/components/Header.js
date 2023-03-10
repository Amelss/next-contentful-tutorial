import Link from "next/link";

const Header = () => {
    return (
      <header>
        <Link href="/">
            <h1>
              <span>Just Add</span>
              <span>Peanut Butter</span>
            </h1>
            <h2>Spread The Joy</h2>
        </Link>
      </header>
    );
}
 
export default Header;
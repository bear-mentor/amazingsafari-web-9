import { HouseIcon, KeyRound, PandaIcon, ShoppingCartIcon } from "lucide-react";
import { Link, Outlet } from "react-router";
import { Button } from "~/components/ui/button";

export default function LayoutMain() {
  const year = new Date().getFullYear();

  return (
    <div>
      <nav className="flex justify-center p-4">
        <ul className="flex gap-10 items-center">
          <li>
            <Button asChild>
              <Link to="/">
                <HouseIcon />
                Home
              </Link>
            </Button>
          </li>
          <li>
            <Button asChild>
              <Link to="/products">
                <PandaIcon />
                Products
              </Link>
            </Button>
          </li>
          <li>
            <Link to="/">
              <img src="/logo.svg" alt="Logo" />
            </Link>
          </li>
          <li>
            <Button asChild>
              <Link to="/cart">
                <ShoppingCartIcon />
                Cart
              </Link>
            </Button>
          </li>
          <li>
            <Button asChild>
              <Link to="/login">
                <KeyRound />
                Login
              </Link>
            </Button>
          </li>
        </ul>
      </nav>

      <Outlet />

      <footer>
        <p>&copy; {year} Amazing Safari</p>
      </footer>
    </div>
  );
}

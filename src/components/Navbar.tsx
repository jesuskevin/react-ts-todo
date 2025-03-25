import { NavbarItem } from "./NavbarItem";
import {useAuthContext} from "../hooks/useAuthContext";

export const Navbar: React.FC = () => {
  const links = [
    {
      url: "/",
      text: "Home",
    },
    {
      url: "/login",
      text: "Login",
    },
    {
      url: "/register",
      text: "Register",
    },
  ];

  const { user, logout } = useAuthContext();

  return (
    <nav className="bg-[#b83f45] text-white px-2 py-2.5 sm:px-4">
      <div className="mx-auto flex flex-wrap items-center justify-between">
        <a href="#" className="flex items-center font-bold text-2xl">
          TODO APP
        </a>
        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul
            className="mt-4 flex flex-col rounded-lg p-4
            md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium"
          >
            
            {user ? (<>
              <button onClick={logout} className="block rounded py-2 pr-4 pl-3 text-white bg-black hover:cursor-pointer">Logout</button>
            </>) :
              (links.map((link) => {
                return <NavbarItem key={link.text} {...link} />;
              }))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

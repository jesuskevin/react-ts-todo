import { NavLink } from "react-router-dom";

interface Props {
    url: string,
    text: string,
}

export const NavbarItem: React.FC<Props> = ({url, text}) => {
  return (
    <li>
      <NavLink to={url} className={({isActive}) => `block rounded py-2 pr-4 pl-3 text-white ${(isActive ? 'underline' : '')}`}>
        {text}
      </NavLink>
    </li>
  );
};

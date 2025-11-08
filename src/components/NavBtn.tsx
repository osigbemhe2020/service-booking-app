import Link from "next/link";

type NavBtnProps = {
  outlineColor: string;
  text: string;
  Icon?: React.ElementType;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const NavBtn = ({ outlineColor, text, Icon, href, onClick, type = "button" }: NavBtnProps) => {
  return (
    <li
      className={`outline ${outlineColor} rounded-lg flex items-center justify-center p-2`}
    >
      {href ? (
        <Link href={href} className="flex gap-2">
          {Icon && <Icon />}
          <p className="text-sm">{text}</p>
        </Link>
      ) : (
        <button type={type} onClick={onClick} className="flex gap-2">
          {Icon && <Icon />}
          <p className="text-sm">{text}</p>
        </button>
      )}
    </li>
  );
};
export default NavBtn;

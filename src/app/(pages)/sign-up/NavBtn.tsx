import Link from "next/link";

type NavBtnProps = {
  outlineColor: string;
  text: string;
  Icon?: React.ElementType;
  href: string;
};

const NavBtn = ({ outlineColor, text, Icon, href }: NavBtnProps) => {
  return (
    <li
      className={`outline ${outlineColor} rounded-lg flex items-center justify-center p-2`}
    >
      <Link href={href} className="flex gap-2">
        {Icon && <Icon />}
        <p className="text-sm">{text}</p>
      </Link>
    </li>
  );
};
export default NavBtn;

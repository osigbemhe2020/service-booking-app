import Link from "next/link";

type PrimaryBtnProps = {
  text: string;
  bgColor: string;
  textColor: string;
  hoverColor: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const PrimaryBtn = ({
  text,
  bgColor,
  textColor,
  hoverColor,
  href,
  onClick,
  type = "button"
}: PrimaryBtnProps) => {
  if (href) {
    return (
      <Link href={href}>
        <button
          onClick={onClick}
          type={type}
          className={`${textColor} ${bgColor} hover:${hoverColor}  w-full focus:ring-4 focus:${hoverColor} font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer`}
        >
          {text}
        </button>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${textColor} ${bgColor} hover:${hoverColor}  w-full focus:ring-4 focus:${hoverColor} font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer`}
    >
      {text}
    </button>
  );
};

export default PrimaryBtn;

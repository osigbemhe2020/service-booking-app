import Link from "next/link";

type PrimaryBtnProps = {
  text: string;
  bgColor: string;
  textColor: string;
  hoverColor: string;
  href: string;
};

const PrimaryBtn = ({
  text,
  bgColor,
  textColor,
  hoverColor,
  href,
}: PrimaryBtnProps) => {
  return (
    <Link href={href}>
      <button
        type="button"
        className={`${textColor} ${bgColor} hover:${hoverColor}  w-full focus:ring-4 focus:${hoverColor} font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer`}
      >
        {text}
      </button>
    </Link>
  );
};

export default PrimaryBtn;

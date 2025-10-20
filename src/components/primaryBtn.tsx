type PrimaryBtnProps = {
  text: string;
  bgColor: string;
  textColor: string;
  hoverColor: string;
};

const PrimaryBtn = ({
  text,
  bgColor,
  textColor,
  hoverColor,
}: PrimaryBtnProps) => {
  return (
    <button
      type="button"
      className={`${textColor} ${bgColor} hover:${hoverColor} focus:ring-4 focus:${hoverColor} font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer`}
    >
      {text}
    </button>
  );
};

export default PrimaryBtn;

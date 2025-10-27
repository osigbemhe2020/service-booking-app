
type TopHeadProps = {
    heading: string;
    subheading: string;
}

const TopHead = ({heading,subheading}:TopHeadProps) => {
  return (
    <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">{heading}</h2>
        <p className="max-w-2xl mx-auto">{subheading}</p>
    </div>
  )
}

export default TopHead
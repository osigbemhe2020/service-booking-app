
type TopHeadProps = {
    heading: string;
    subheading: string;
}

const TopHead = ({heading,subheading}:TopHeadProps) => {
  return (
    <div>
        <h2>{heading}</h2>
        <p>{subheading}</p>
    </div>
  )
}

export default TopHead
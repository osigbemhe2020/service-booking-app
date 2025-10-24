import TopHead
 from "./TopHead"
const HowCard = () =>{
    return(
        <div>
             <div>
            
             </div>
             <h3></h3>
             <p></p>
        </div> 
    )
}

const HowSection = () => {
  return (
    <div>
        <TopHead 
          heading="How Kordnerds Works?"
          subheading="A simple 3-step process to get you started"
        />
        <div>
            <HowCard/>
            <HowCard/>
            <HowCard/>
        </div>
    </div>
  )
}

export default HowSection
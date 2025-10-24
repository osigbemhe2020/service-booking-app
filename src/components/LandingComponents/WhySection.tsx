import Tophead from './TopHead'

type CardProps = {
  content: string;
  heading: string;
  icon: React.ReactNode;
}

const WhyCard = ({content,heading,icon}:CardProps) => {
  return (
    <div> 
        <span className="box-icon">{icon}</span>
      <h3 className="box-heading">{heading}</h3>
      <p> 
        {content}
      </p>
    </div>
  )
}

const WhySection = () => {
  return (
    <section>
       <div>
          <Tophead 
            heading="Why Kordnerds?"
            subheading="Discover the benefits of using Kordnerds for your business"
          />
          <div>
            <WhyCard 
             heading="Secure Payments"
              content="Safe and Secure payment processing"
              icon ={<></>}
            />
            <WhyCard 
            heading=" Smart Scheduling"
              content="Book appointments instantly with real-time availability"
              icon ={<></>}
             />
            <WhyCard 
              heading="Mobile First"
              content="Seamless experience across all devices"
              icon ={<></>}
              />     
              <WhyCard 
              heading="Verified reviews"
              content="Read real reviews from authentic customers"
              icon ={<></>}
              />     
          </div>
       </div>
    </section>
  )
}

export default WhySection
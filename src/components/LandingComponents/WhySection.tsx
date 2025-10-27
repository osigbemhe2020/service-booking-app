import Tophead from './TopHead'
import { Calendar, Shield, Star, Clock } from "lucide-react";

type CardProps = {
  content: string;
  heading: string;
  icon: React.ReactNode;
}

const WhyCard = ({content,heading,icon}:CardProps) => {
  return (
    <div className='text-center py-10 px-6 rounded-2xl  border  border-1 border-black/10 transition-all hover:shadow-lg group'> 
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary700 text-primary  mb-4 group-hover:scale-110 transition-transform">
      {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{heading}</h3>
      <p className='text-sm text-muted-foreground'> 
        {content}
      </p>
    </div>
  )
}

const WhySection = () => {
  return (
    <section className='py-20'>
       <div className='container mx-auto px-15'>
          <Tophead 
            heading="Why Choose BookIt?"
            subheading="Experience the future of service booking with our innovative platform designed for both customers and providers"
          />
          <div className=' grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <WhyCard 
             heading="Secure Payments"
              content="Safe and Secure payment processing"
              icon ={<Shield className="w-8 h-8 text-blue-500" />}
            />
            <WhyCard 
            heading=" Smart Scheduling"
              content="Book appointments instantly with real-time availability"
              icon ={<Calendar className="w-8 h-8 text-blue-500" />}
             />
            <WhyCard 
              heading="Mobile First"
              content="Seamless experience across all devices"
              icon ={<Clock className="w-8 h-8 text-blue-500" />}
              />     
              <WhyCard 
              heading="Verified reviews"
              content="Read real reviews from authentic customers"
              icon ={<Star className="w-8 h-8 text-blue-500" />}
            />
          </div>
       </div>
    </section>
  )
}

export default WhySection
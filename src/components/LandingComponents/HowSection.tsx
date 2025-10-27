import TopHead from "./TopHead"

type HowCardProps = {
   number: number,
    title: string,
    description: string
}

const HowCard = ({number,title,description}:HowCardProps) =>{
    return(
        <div  className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                {number}
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
           </div>
    )
}

const HowSection = () => {
  return (
    <section className='py-20 bg-gray-50'>
    <div className='max-w-7xl mx-auto px-15'>
        <TopHead 
          heading="How It Works"
          subheading="Get Started with 3 simple stepsv"
        />
        <div className="grid md:grid-cols-3 gap-8 ">
            <HowCard
            number = {1}
            title = "Search & Discover"
            description = "Browse through thousands of verified service providers in your area"
            />
            <HowCard
             number = {2}
             title = "Book Instantly"
             description = "Select your preferred time slot and book your service in seconds"
            />
            <HowCard
              number = {3}
              title = "Enjoy Service"
             description ="Receive your service and rate your experience to help others"
            />
        </div>
    </div>
  </section>
  )
}

export default HowSection
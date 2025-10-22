{}
import Image from "next/image";
import neonOpen from "@/assets/LandingPageAssets/neon-open.jpg";

type ItemProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const Item = ({ title, description,icon }: ItemProps) => (
  <div className="space-y-2 flex items-start gap-2">
    <div className="h-5 w-5 mt-1 flex-shrink-0">
        {icon}
    </div>
    <div>
    <h3 className="font-semibold text-[18px]">{title}</h3>
    <p className="text-sm mt-1">{description}</p>
    </div>
  </div>
);  


const Grow = () => {
  return (
   <section className="py-20 bg-blue-700 text-white overflow-hidden">
      <div className="container mx-auto px-4">
         <div className="grid gap-12 lg:grid-cols-2 ">
            <div className="space-y-8">
                <div>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
                    Grow Your Business With BookIt
                </h2>
                <p className="text-lg text-primary-foreground/90">
                    Join thousands of service providers who have transformed their business with our platform. 
                    Start receiving bookings in minutes.
                </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                    <Item 
                        title="Grow your Business"
                        description="Reach Thousands of Potential Customers"
                        icon={<></>}/>
                    <Item
                        title="Manage Bookings"
                        description="Professional booking management tools"
                        icon={<></>}
                    />
                    <Item
                         title="Get Paid Faster"
                         description="direct payments with automatic Payouts"
                         icon={<></>}
                    />
                    <Item
                        title="Stay Connected"
                        description="Real time notifications and updates"
                        icon={<></>}
                    />  
                </div>
                <div>
                    <button className="shadow-xl px-4 py-2 rounded-md hover:shadow-2xl bg-white text-blue-700 transition-all">Start your business journey</button>
                </div>
            </div>   
             <div>
               <Image
             src={neonOpen}
             alt="Open for business"
             className="relative rounded-3xl shadow-2xl w-full h-[400px]"
                />
            </div>
        </div>
    </div>
    </section>
  )
}

export default Grow
import Image from 'next/image';
import { CheckCircle2 } from "lucide-react";
import heroImage from '@/assets/LandingPageAssets/hero.jpg';

const Hero = () => {
    return (
        <section className ='h-[90vh] flex justify-center items-center px-[120px] py-[60px] bg-primary900 '>
            <div className= 'grid gap-12 lg:grid-cols-2 lg:gap-16 items-center'>
                <div className='max-w-[500px] space-y-8 text-center lg:text-left'>
                    <div><p className=' bg-primary700 rounded-full text-[12px] font-semibold text-primary100 uppercase px-4 py-1 inline-block'> 
                        🚀Now serving 1000 + customers</p></div>
                    <div>
                        <h1 className='text-[45px] md:text-[60px] font-bold text-gray-900 mb-4 leading-tight'>Book Service <span className="text-blue-600">Instantly</span></h1>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Connect with trusted service providers in your area. From beauty 
                            treatments to home repairs, 
                            book appointments in seconds with BookIt's seamless platform.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md">
                            Browse Services
                        </button>
                        <button className='px-8 py-3 text-primary500 bg-white rounded-md border-1 border-solid border-secondary300'>
                            Join as a provider
                        </button>
                    </div>
                   <div className="flex flex-wrap gap-6 text-sm text-muted-foreground justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success200" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success200" />
                <span>Easy cancellation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success200" />
                <span>Secure payments</span>
              </div>
            </div>
                </div>
                <div>
                    <Image src={heroImage} alt="Hero Image" className="h-[480px] w-[554px] rounded-[12px] object-cover" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
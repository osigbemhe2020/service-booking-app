import Image from 'next/image';
import heroImage from '@/assets/LandingPageAssets/hero.jpg'

const Hero = () => {
    return (
        <section className ='h-[90vh] flex justify-center items-center px-20 py-10 bg-primary900 '>
            <div className= 'grid grid-cols-2 gap-10'>
                <div className='max-w-[400px]'>
                    <span>icon<p> Now serving 1000 + customers</p></span>
                    <div>
                        <h1>Book Service Instantly</h1>
                        <p>
                            Connect with trusted service providers in your area. From beauty 
                            treatments to home repairs, 
                            book appointments in seconds with BookIt's seamless platform.
                        </p>
                    </div>
                    <div>
                        <button>
                            Browse Services
                        </button>
                        <button>
                            Join as a provider
                        </button>
                    </div>
                    <div>
                        <span><p>Instant Booking</p></span>
                        <span><p> Verified providers</p></span>
                        <span><p>Secure Payments</p></span>
                    </div>
                </div>
                <div>
                    <Image src={heroImage} alt="Hero Image" className='h-[500px] w-[584px] object-cover' />
                </div>
            </div>
        </section>
    );
}

export default Hero;
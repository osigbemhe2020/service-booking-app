import { Store, User, Calendar} from 'lucide-react';

const LandingHeader = () => {
  return (
    <header className="border-b border-black/10 bg-white shadow-sm">
        <div className=" mx-auto px-[160px] py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 bg-[white]  rounded-[10px] flex items-center justify-center">
                <Calendar size={24} className="text-blue-500" />
              </div>
              <div>
                <p className="font-semibold text-[20px] tracking-[-0.44px] text-gray-800 leading-snug">BookIt</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <a className="text-[16px] font-medium text-[rgba(54, 65, 83, 1)] hover:text-blue-500 transition-colors">
              Browse Services
            </a>
            < a className="text-[16px] font-medium text-[rgba(54, 65, 83, 1)] hover:text-blue-500 transition-colors">
                For Providers
            </a>
            <button className='py-1 px-2 rounded-[8px] bg-[var(--color-primary200)] text-white'>
                Get Started
            </button>
          </div>
          </div>
    </header>   
  )
}

export default LandingHeader
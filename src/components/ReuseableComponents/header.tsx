import { Store, User, Calendar,ArrowLeft} from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-black/10 bg-white shadow-sm">
        <div className="container mx-auto px-[23.5px] py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <ArrowLeft size={18} className="text-gray-600" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-[rgba(3,2,19,1)]  rounded-[10px] flex items-center justify-center">
                <Calendar size={20} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-[18px] tracking-[-0.44px] text-gray-800 leading-snug">BookIt</p>
                <p className="text-[14px] text-gray-500  tracking-[0.12px] leading-tight">Book Appointment</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors">
              <User size={18} />
              <span>My Bookings</span>
            </button>
            <button className="flex items-center p-1 border border-grey-600 space-x-1 text-gray-600 hover:text-gray-900 transition-colors">
              <Store size={18} />
              <span>Become a Provider</span>
            </button>
          </div>
          </div>
    </header>   
  )
}

export default Header
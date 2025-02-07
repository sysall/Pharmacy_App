import { ShoppingCart, Search, Menu } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              Hello <span className="text-green-500">Pharmacie</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Search className="h-6 w-6" />
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-md flex items-center">
              <Menu className="h-5 w-5 mr-2" />
              MENU
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 
import { LogIn } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              Pharmacie <span className="text-green-500">Serigne Fadilou Mbacké</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-black text-white px-4 py-2 rounded-md flex items-center">
              <LogIn className="h-5 w-5 mr-2" />
              Se Connecter
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 
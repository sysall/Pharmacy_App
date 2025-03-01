import { MapPin, Phone, Clock } from 'lucide-react';
import { useState } from 'react';
import Modal from '../Modal';
import ContactForm from '../ContactForm';

const Overview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <div className="flex items-start space-x-2">
          <MapPin className="h-5 w-5 text-gray-400 mt-1" />
          <span>Patte D'Oie, Builders L 9 Dakar - Sénégal</span>
        </div>

        <div className="flex items-center space-x-2">
          <Phone className="h-5 w-5 text-gray-400" />
          <span>Téléphone : </span>
          <a href="tel:0478542582" className="text-green-500">33 835 78 00</a>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-gray-400" />
            <span className="font-bold">Ouvert 24H / 24 </span>
          </div>
         
        </div>

        <div className="flex flex-wrap gap-4">
          <button onClick={() => setIsModalOpen(true)} 
          className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors">
            NOUS CONTACTER
          </button>
        </div>
      </div>
       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default Overview; 
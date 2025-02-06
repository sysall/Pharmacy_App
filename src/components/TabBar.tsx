import { TabType } from '../types';

interface TabBarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const TabBar = ({ activeTab, setActiveTab }: TabBarProps) => {
  return (
    <div className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8 py-4">
          {[
            { id: 'apercu', label: 'Aperçu' },
            { id: 'services', label: 'Services' },
            { id: 'expertises', label: 'Expertises' },
            { id: 'actualites', label: 'Actualités' },
            { id: 'promos', label: 'Promos' },
            { id: 'equipe', label: 'Equipe' },
            { id: 'pharmacie-de-garde', label: 'Pharmacie de garde' },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as TabType)}
              className={`${
                activeTab === id
                  ? 'text-green-500 border-b-2 border-green-500 -mb-[17px] pb-4'
                  : 'text-gray-600 hover:text-green-500'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabBar;

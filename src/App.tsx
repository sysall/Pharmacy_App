import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TabBar from './components/TabBar';
import Overview from './components/tabs/Overview';
import Services from './components/tabs/Services';
import Expertises from './components/tabs/Expertises';
import Team from './components/tabs/Team';
import { TabType } from './types';
import Promo from './components/tabs/Promo';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('apercu');
  

  const renderContent = () => {
    switch (activeTab) {
      case 'apercu':
        return <Overview />;
      case 'services':
        return <Services />;
      case 'expertises':
        return <Expertises />;
      case 'equipe':
        return <Team />;
      case 'promos':
          return <Promo />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
    </div>
  );
}

export default App;
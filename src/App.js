import React, { useState } from 'react';
import RoleSelection from './RoleSelection';
import CustomerLogin from './CustomerLogin';
import CustomerSignup from './CustomerSignup';
import ShopOwnerLogin from './ShopOwnerLogin';
import ShopOwnerSignup from './ShopOwnerSignup';
import DiscoverPage from './pages/DiscoverPage'; // ✅ corrected

function App() {
  const [screen, setScreen] = useState('role');

  const handleContinue = (selectedRole) => {
    if (selectedRole === 'customer') {
      setScreen('customerLogin');
    } else if (selectedRole === 'owner') {
      setScreen('ownerLogin');
    }
  };

  const handleBack = () => {
    setScreen('role');
  };

  return (
    <div className="App">
      {screen === 'role' && <RoleSelection onContinue={handleContinue} />}

      {screen === 'customerLogin' && (
        <CustomerLogin
          onBack={handleBack}
          onSignup={() => setScreen('customerSignup')}
          onLoginSuccess={() => setScreen('customerDashboard')}
        />
      )}

      {screen === 'customerSignup' && (
        <CustomerSignup
          onBack={() => setScreen('customerLogin')}
          onSignupSuccess={() => setScreen('customerDashboard')}
        />
      )}

      {screen === 'ownerLogin' && (
        <ShopOwnerLogin
          onBack={handleBack}
          onSignup={() => setScreen('shopOwnerSignup')}
        />
      )}

      {screen === 'shopOwnerSignup' && (
        <ShopOwnerSignup onBack={() => setScreen('ownerLogin')} />
      )}

      {screen === 'customerDashboard' && <DiscoverPage />} {/* ✅ use DiscoverPage */}
    </div>
  );
}

export default App;

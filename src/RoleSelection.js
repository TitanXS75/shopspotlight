import React, { useState } from 'react';
import './RoleSelection.css';

const RoleSelection = ({ onContinue }) => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleContinueClick = () => {
    if (selectedRole && onContinue) {
      onContinue(selectedRole);
    }
  };

  return (
    <div className="role-container">
      <h1 className="title">ShopSpotlight</h1>
      <p className="subtitle">Connect local shops with customers</p>

      <div className="card">
        <h2 className="choose-role">Choose Your Role :</h2>
        <p className="helper-text">Are you a shop owner or looking for services ?</p>

        <div
          className={`role-option ${selectedRole === 'owner' ? 'selected' : ''}`}
          onClick={() => handleSelect('owner')}
        >
          <span role="img" aria-label="shop">🏪</span>
          <div>
            <strong>Shop Owner</strong>
            <p>Manage your shop and appointments</p>
          </div>
        </div>

        <div
          className={`role-option ${selectedRole === 'customer' ? 'selected' : ''}`}
          onClick={() => handleSelect('customer')}
        >
          <span role="img" aria-label="customer">🙋‍♀️</span>
          <div>
            <strong>Customer</strong>
            <p>Discover and book local services</p>
          </div>
        </div>

        <button
          className={`continue-btn ${selectedRole ? 'enabled':''}`}
          onClick={handleContinueClick}
          disabled={!selectedRole}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default RoleSelection;

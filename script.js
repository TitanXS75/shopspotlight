// Mobile menu toggle (for customer/vendor dashboard)
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Logout button
const logoutBtns = document.querySelectorAll('#logoutBtn');
logoutBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    sessionStorage.removeItem('userRole');
    window.location.href = 'index.html';
  });
});

//////////////
// Customer.html shop listing – simple mock data rendering

if (document.getElementById('shopList')) {
  const shops = [
    {
      id: 1,
      name: 'Fresh Groceries',
      status: 'open',
      distance: '1.2 miles',
      address: '123 Main St',
      description: 'Fresh produce, dairy, and pantry staples',
      openUntil: '9:00 PM',
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: 'Quick Fix Auto',
      status: 'busy',
      distance: '2.5 miles',
      address: '456 Oak Ave',
      description: 'Auto repair and maintenance services',
      openUntil: '6:00 PM',
      img: "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: 'Style Salon',
      status: 'mild',
      distance: '3.1 miles',
      address: '789 Elm St',
      description: 'Haircuts, styling, and beauty services',
      openUntil: '8:00 PM',
      img: "https://images.unsplash.com/photo-1528699633788-424224dc89b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
  ];

  const statusClassMap = {
    open: 'status-open',
    busy: 'status-busy',
    mild: 'status-mild',
    closed: 'status-closed'
  };

  const shopListEl = document.getElementById('shopList');
  shopListEl.innerHTML = '';

  shops.forEach(shop => {
    const shopItem = document.createElement('div');
    shopItem.className = 'p-4 hover:bg-gray-50 cursor-pointer';
    shopItem.innerHTML = `
      <div class="flex items-start">
        <div class="flex-shrink-0 h-16 w-16 rounded-md bg-gray-200 overflow-hidden">
          <img src="${shop.img}" alt="Shop image" class="h-full w-full object-cover" />
        </div>
        <div class="ml-4 flex-1">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-medium text-gray-900">${shop.name}</h3>
            <span class="px-2 py-1 text-xs rounded-full ${statusClassMap[shop.status]} text-white capitalize">${shop.status.replace('-',' ')}</span>
          </div>
          <p class="text-sm text-gray-500 mt-1"><i class="fas fa-map-marker-alt mr-1"></i> ${shop.distance} away • ${shop.address}</p>
          <p class="text-sm text-gray-600 mt-1">${shop.description}</p>
          <div class="mt-2 flex items-center justify-between">
            <div class="flex items-center text-sm text-gray-500">
              <i class="fas fa-clock mr-1"></i> Open until ${shop.openUntil}
            </div>
            <button
              data-shopid="${shop.id}"
              class="text-sm font-medium text-indigo-600 hover:text-indigo-500 bookAppointmentBtn"
            >Book Appointment</button>
          </div>
        </div>
      </div>
    `;
    shopListEl.appendChild(shopItem);
  });

  // Booking modal handling (assuming exists on customer page)
  const bookingModal = document.getElementById('bookingModal');
  const cancelBookingBtn = document.getElementById('cancelBookingBtn');

  function openBookingModal() {
    if (bookingModal) {
      bookingModal.classList.remove('hidden');
    }
  }
  function closeBookingModal() {
    if (bookingModal) {
      bookingModal.classList.add('hidden');
    }
  }

  // Attach event to booking buttons
  document.querySelectorAll('.bookAppointmentBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      openBookingModal();
    });
  });

  if (cancelBookingBtn) {
    cancelBookingBtn.addEventListener('click', () => {
      closeBookingModal();
    });
  }
}

// Vendor dashboard working hours and status logic

if (document.getElementById('workingHoursContainer')) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const container = document.getElementById('workingHoursContainer');

  function createWorkingHourControl(day) {
    const div = document.createElement('div');
    div.className = 'flex items-center justify-between space-x-2 flex-wrap sm:flex-nowrap';

    const label = document.createElement('div');
    label.className = 'w-24 font-medium text-gray-700';
    label.textContent = day;

    // From select
    const fromSelect = document.createElement('select');
    fromSelect.className = 'block w-32 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm';
    ['9:00 AM','8:00 AM','10:00 AM','11:00 AM'].forEach(t => {
      const opt = document.createElement('option');
      opt.value = t;
      opt.textContent = t;
      fromSelect.appendChild(opt);
    });

    // To span
    const toSpan = document.createElement('span');
    toSpan.textContent = 'to';

    // To select
    const toSelect = document.createElement('select');
    toSelect.className = 'block w-32 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm';
    ['6:00 PM','5:00 PM','7:00 PM','8:00 PM'].forEach(t => {
      const opt = document.createElement('option');
      opt.value = t;
      opt.textContent = t;
      toSelect.appendChild(opt);
    });

    // Closed checkbox
    const closedDiv = document.createElement('div');
    closedDiv.className = 'flex items-center';
    const closedCheckbox = document.createElement('input');
    closedCheckbox.type = 'checkbox';
    closedCheckbox.className = 'h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded';
    closedCheckbox.id = day.toLowerCase() + '-closed';
    closedCheckbox.name = day.toLowerCase() + '-closed';
    const closedLabel = document.createElement('label');
    closedLabel.htmlFor = closedCheckbox.id;
    closedLabel.className = 'ml-2 block text-sm text-gray-700';
    closedLabel.textContent = 'Closed';
    closedDiv.appendChild(closedCheckbox);
    closedDiv.appendChild(closedLabel);

    const timeWrapper = document.createElement('div');
    timeWrapper.className = 'flex-1 flex items-center space-x-2';
    timeWrapper.appendChild(fromSelect);
    timeWrapper.appendChild(toSpan);
    timeWrapper.appendChild(toSelect);

    div.appendChild(label);
    div.appendChild(timeWrapper);
    div.appendChild(closedDiv);

    // Disable selects if closed checkbox is checked
    closedCheckbox.addEventListener('change', () => {
      fromSelect.disabled = closedCheckbox.checked;
      toSelect.disabled = closedCheckbox.checked;
    });
    return div;
  }

  days.forEach(day => {
    const controls = createWorkingHourControl(day);
    container.appendChild(controls);
  });
}

// Fix radio button behavior to NOT open appointment modal in vendor dashboard
if (document.getElementById('updateStatusBtn')) {
  const statusRadios = document.querySelectorAll('input[name="status"]');
  const updateStatusBtn = document.getElementById('updateStatusBtn');

  updateStatusBtn.addEventListener('click', () => {
    const selectedStatus = Array.from(statusRadios).find(r => r.checked).value;
    alert(`Status updated to: ${selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)}`);
    // Custom: Update UI or make API calls here.
  });

  // Prevent appointment modal from opening on status radio clicks
  statusRadios.forEach(radio => {
    radio.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });
}

// Redirect check on customer.html and vendor.html to prevent unauthorized access
window.addEventListener('DOMContentLoaded', () => {
  const role = sessionStorage.getItem('userRole');
  const onCustomerPage = window.location.pathname.endsWith('customer.html');
  const onVendorPage = window.location.pathname.endsWith('vendor.html');

  if (!role) {
    // No logged in user, redirect to login page
    window.location.href = 'index.html';
  } else {
    if (role === 'customer' && !onCustomerPage) {
      window.location.href = 'customer.html';
    } else if (role === 'shopowner' && !onVendorPage) {
      window.location.href = 'vendor.html';
    }
  }
});

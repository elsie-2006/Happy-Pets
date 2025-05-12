function openForm() {
    document.getElementById('adoptionForm').style.display = 'block';
  }
  
  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh
  
    const adoptBtn = document.getElementById('adoptBtn');
    adoptBtn.textContent = 'Adopted';
    adoptBtn.disabled = true;
  
    document.getElementById('adoptionForm').style.display = 'none';
  });
  function openForm() {
    document.getElementById('bookingForm').style.display = 'block';
  }
  
  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh
  
    const adoptBtn = document.getElementById('book');
    adoptBtn.textContent = 'booked';
    adoptBtn.disabled = true;
  
    document.getElementById('bookingForm').style.display = 'none';
  });
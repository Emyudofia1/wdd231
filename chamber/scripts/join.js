const pageLoadedTime = document.querySelector('#timestamph');
const currentTime = new Date();
pageLoadedTime.value = currentTime;

document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.dataset.modal;
      document.getElementById(modalId).classList.remove('hidden');
    });
  });
  
  document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.dataset.modal;
      document.getElementById(modalId).classList.add('hidden');
    });
  });
  
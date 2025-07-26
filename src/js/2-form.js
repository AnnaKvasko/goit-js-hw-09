const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: ''
};

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', evt => {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  });

  form.addEventListener('submit', evt => {
    evt.preventDefault();
  
    const { email, message } = formData;
  
    if (!email.trim() || !message.trim()) {
      alert('Fill please all fields');
      return;
    }
  
    console.log(formData);
  
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: '', message: '' };
    form.reset();
  });
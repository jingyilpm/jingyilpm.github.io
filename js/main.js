'use strict';

const copyBtn = document.getElementById('copyEmailBtn');
const toast = document.getElementById('copyToast');
const email = 'shizuwang1209@gmail.com';

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(email).then(() => {
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 400);
  });
});

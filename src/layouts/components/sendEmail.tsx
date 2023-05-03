import React from 'react';


export default function sendEmail(): void {
  const email = 'zeshanahmednobin@gmail.com';
  window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
}

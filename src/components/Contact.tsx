import React from 'react';

export default function Contact() {
  return (
    <div className="mt-16">
      <div className="section-divider-container">
        <span className="section-divider inline-block text-gray-400 uppercase tracking-wider text-sm">Contact</span>
      </div>

      <section className="mt-8">
        <div className="contact-grid">
          <div className="contact-icons flex gap-6">
            <a href="mailto:ad.siddiqui2@gmail.com" className="text-gray-600 hover:text-black transition-colors" aria-label="Email">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://x.com/adeelsid7" target="_blank" className="text-gray-600 hover:text-black transition-colors" aria-label="X (Twitter)">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/adeel-siddiqui37/" target="_blank" className="text-gray-600 hover:text-black transition-colors" aria-label="LinkedIn">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://github.com/adsiddiqui" target="_blank" className="text-gray-600 hover:text-black transition-colors" aria-label="GitHub">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12C2 16.419 4.865 20.167 8.84 21.619C9.34 21.713 9.52 21.419 9.52 21.167C9.52 20.915 9.52 20.237 9.52 19.325C7 19.859 6.35 17.825 6.35 17.825C5.85 16.619 5.125 16.325 5.125 16.325C4.125 15.725 5.187 15.725 5.187 15.725C6.25 15.819 6.85 16.719 6.85 16.719C7.85 18.219 9.477 17.825 9.52 17.619C9.614 17.013 9.901 16.619 10.189 16.419C7.977 16.219 5.625 15.319 5.625 11.513C5.625 10.419 6.037 9.513 6.85 8.813C6.756 8.561 6.344 7.561 7.037 6.219C7.037 6.219 7.937 5.967 9.52 7.125C10.307 6.873 11.157 6.747 12.001 6.747C12.845 6.747 13.695 6.873 14.482 7.125C16.065 5.967 16.965 6.219 16.965 6.219C17.658 7.561 17.246 8.561 17.152 8.813C17.965 9.513 18.377 10.419 18.377 11.513C18.377 15.319 16.025 16.219 13.813 16.419C14.101 16.619 14.389 17.019 14.389 17.725C14.389 18.631 14.389 20.819 14.389 21.167C14.389 21.419 14.569 21.713 15.069 21.619C19.044 20.167 21.909 16.419 21.909 12C21.909 6.477 17.432 2 11.909 2H12Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 
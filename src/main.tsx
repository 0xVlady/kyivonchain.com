import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Disable automatic scroll restoration to handle it manually
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Reset scroll position on page load/refresh
window.addEventListener('load', () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
});

// Handle mobile pull-to-refresh
window.addEventListener('beforeunload', () => {
  // Force scroll to top before unload
  window.scrollTo(0, 0);
});

createRoot(document.getElementById("root")!).render(<App />);

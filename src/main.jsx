
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ToastContainer} from 'react-toastify'; // import the ToastContainer component, which is required to show toasts on the screen.
import "react-toastify/dist/ReactToastify.css"; // This imports the CSS styling for toast notifications

createRoot(document.getElementById('root')).render(
   <div>
     <App />
     <ToastContainer></ToastContainer>
  </div>
)

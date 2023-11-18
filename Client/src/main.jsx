//Component imports 
import { Toaster } from 'react-hot-toast';
import App from './App.jsx';
// CSS import
import './index.css';
// Library imports
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <App />
     <Toaster/>
  </BrowserRouter>
 
)

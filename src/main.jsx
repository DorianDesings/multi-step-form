import { createRoot } from 'react-dom/client';
import App from './App';
import './index.scss';
import './scss/config/variables.scss';

const container = document.getElementById('root');

createRoot(container).render(<App />);

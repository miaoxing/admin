import { createRoot } from 'react-dom/client';

import './bootstrap';
import 'antd/dist/reset.css';
import '../scss/index.scss';

import AppContainer from '../components/AppContainer';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppContainer/>);

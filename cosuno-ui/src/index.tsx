import React from 'react';
import { createRoot } from 'react-dom/client';
import 'antd/dist/antd.css';
import './index.scss';

import App from './app/app';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);

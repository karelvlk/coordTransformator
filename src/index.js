import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import reportWebVitals from './reportWebVitals';
import { loadTheme } from 'office-ui-fabric-react'
import { initializeIcons } from '@uifabric/icons';
initializeIcons();

loadTheme({
  palette: {
    themePrimary: '#ffc300',
    themeLighterAlt: '#fffdf5',
    themeLighter: '#fff5d6',
    themeLight: '#ffedb3',
    themeTertiary: '#ffdb66',
    themeSecondary: '#ffcb1f',
    themeDarkAlt: '#e6b000',
    themeDark: '#c29500',
    themeDarker: '#8f6d00',
    neutralLighterAlt: '#1c1c1c',
    neutralLighter: '#252525',
    neutralLight: '#343434',
    neutralQuaternaryAlt: '#3d3d3d',
    neutralQuaternary: '#454545',
    neutralTertiaryAlt: '#656565',
    neutralTertiary: '#c8c8c8',
    neutralSecondary: '#d0d0d0',
    neutralPrimaryAlt: '#dadada',
    neutralPrimary: '#ffffff',
    neutralDark: '#f4f4f4',
    black: '#f8f8f8',
    white: '#121212',
  },
  defaultFontStyle: { fontFamily: 'system-ui', fontWeight: 'regular' },
  fonts: {
    small: {
      fontSize: '12px',
      color: 'white'
    },
    medium: {
      fontSize: '16px',
      color: 'white'
    },
    large: {
      fontSize: '20px',
      fontWeight: 'semibold',
      color: 'white'
    },
    xLarge: {
      fontSize: '36px',
      fontWeight: 'semibold',
      color: 'white'

    }
  },
});

document.documentElement.style.background = '#121212'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

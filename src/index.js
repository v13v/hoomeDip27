'use strict';

import 'nodelist-foreach-polyfill';
import "@babel/polyfill";
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import modalWin1 from './modules/modalWin1';
import submissionForm from './modules/submissionForm';
import modalWin2 from './modules/modalWin2';
import accordion from './modules/accordion';
import maskPhone from './modules/mascPhone';
import popupCheck from './modules/popupCheck';
import showBlock from './modules/showBlock';
import calcAccordion from './modules/calcAccordion';
import consult from './modules/consult';

consult();
calcAccordion();
showBlock();
popupCheck();
maskPhone('.phone-user');
accordion();
modalWin2();
modalWin1();
submissionForm();
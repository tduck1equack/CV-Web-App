import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import {useState} from 'react'
import NameCard from './components/NameCard.js';
import Scrollbar from './components/Scrollbar.js';
import Navbar from './components/Navbar.js';
import Picture from './components/ProfilePicture';

const App = () => {
	return (
		<div style={{backgroundColor: '#729a99'}}>
			<div className='inner-container'>
				<Picture source="https://st3.depositphotos.com/6672868/13701/v/1600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" one="Facebook" two="Instagram" three="Github"/>
				<Scrollbar main='General Information' first="Experience" second="Pricing" dropdown="Services" dropdown_first="Temp" dropdown_second="Temp" dropdown_miscellaneous="Temp"/>
			</div>			
		</div>
	)
}


export default App;

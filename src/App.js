import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import {useState} from 'react'
import NameCard from './components/NameCard.js';
import Scrollbar from './components/Scrollbar.js';
import Navbar from './components/Navbar.js';
import Picture from './components/ProfilePicture';
import ScrollbarAddress from './components/ScrollbarAddress';

const App = () => {
	const [tab, setTab] = useState(1);
	const buttonGeneral = (event) => {
		setTab(1);
	}
	const buttonAddress = (event) => {
		setTab(2);
	}
	const buttonContact = (event) => {
		setTab(3);
	}
	const buttonPictures = (event) => {
		setTab(4);
	}
	const buttonMusic = (event) => {
		setTab(5);
	}
	let content = <Scrollbar main='General Information' first="Experience" second="Pricing" dropdown="Services" dropdown_first="Temp" dropdown_second="Temp" dropdown_miscellaneous="Temp"/>
	switch (tab) {
		case 1:
			content = <Scrollbar main='General Information' first="Experience" second="Pricing" dropdown="Services" dropdown_first="Temp" dropdown_second="Temp" dropdown_miscellaneous="Temp"/>
			break;
		case 2:
			content = <ScrollbarAddress main='Test Tab 2' first="First Btn" second="Second" dropdown="Dropdown" dropdown_first="Temp" dropdown_second="Temp" dropdown_miscellaneous="Temp"/>;
			break;
		case 3:
			content = <ScrollbarAddress main='Test Tab 3' first="First Btn" second="Second" dropdown="Dropdown" dropdown_first="Temp" dropdown_second="Temp" dropdown_miscellaneous="Temp"/>;
			break;
		case 4:
			content = <ScrollbarAddress main='Test Tab 4' first="First Btn" second="Second" dropdown="Dropdown" dropdown_first="Temp" dropdown_second="Temp" dropdown_miscellaneous="Temp"/>;
			break;
		case 5:
			content = <ScrollbarAddress main='Test Tab 5' first="First Btn" second="Second" dropdown="Dropdown" dropdown_first="Temp" dropdown_second="Temp" dropdown_miscellaneous="Temp"/>;
			break;
		}
	return (
		<div style={{backgroundColor: '#729a99'}}>
			<div className='inner-container'>
				<div className="menu-bar">
            		<button className="primary-button square-50px">
                		<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-menu-button-wide" viewBox="0 0 16 16">
                    		<path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-13z"/>
                    		<path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
                		</svg>
            		</button>
            		<div className="middle-menu">
                		<button className="menu-button square-50px" onClick={buttonGeneral}>
                    `		<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        		<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                    		</svg>
                		</button>
                		<button className="menu-button square-50px" onClick={buttonAddress}>
                    		<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
                        		<path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                    		</svg>
                		</button>
                		<button className="menu-button square-50px" onClick={buttonContact}>
                    		<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
                        		<path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                    		</svg>
                		</button>
		                <button className="menu-button square-50px" onClick={buttonPictures}>
                    		<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
                        		<path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
								<path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/>
                    		</svg>
                		</button>
                		<button className="menu-button square-50px" onClick={buttonMusic}>
                    		<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-music-note" viewBox="0 0 16 16">
								<path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
								<path fill-rule="evenodd" d="M9 3v10H8V3h1z"/>
                        		<path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z"/>
                   			</svg>
                		</button>
            		</div>
            		<button type='button' className="miscellaneous-button square-50px" onClick="location.href='https://n.foxdsgn.com/niko/wp-content/uploads/2019/06/cv_template_sheet_en.pdf'">
                		<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cloud-download" viewBox="0 0 16 16">
                    		<path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                    		<path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
                		</svg>
            		</button>
        		</div>
				<Picture source="https://st3.depositphotos.com/6672868/13701/v/1600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" one="Facebook" two="Instagram" three="Github"/>
				{content}
			</div>			
		</div>
	)
}


export default App;

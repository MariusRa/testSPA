import "../../sass/Custom.scss"
import React from 'react';

const Footer = () =>{
	return(
		<footer className={"container-fluid"}>
			{/* left footer */}
			<div className="afooter container">
			<div className="footer-left">
				<p className="footer-copyright">&copy; {new Date().getFullYear()} Festo Corporation. All Rights Reserved</p>
			</div>
			{/* right footer */}
			<div className="footer-right">
				<div className="footer-links">
					<a href="https://www.festo.com/us/en/e/legal/-id_3741/">Imprint</a>
					<a href="https://www.festo.com/us/en/e/privacy-statement-id_3749/">Data privacy</a>
					<a href="https://www.festo.com/us/en/e/legal/terms-and-conditions-of-sale-id_3747/">Terms and Conditions of Sale</a>
					<a className={"lastA"} href="https://www.festo.com/us/en/e/cloud-services-id_129924/">Cloud Services</a>
				</div>
			</div>
			</div>
		</footer>
	)
}

export default Footer;














// function Footer() {
// return (
// 	<div className="main-footer">
// 		<div className="container">
// 			<div className="footer-bottom">
// 				<p className="text-xs-left">
// 					&copy;{new Date().getFullYear()} bla bla bla all rights yes
// 				</p>
// 			</div>
// 		</div>
// 		</div>
// );
// }

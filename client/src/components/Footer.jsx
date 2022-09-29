import { Link } from 'react-router-dom'

export default function Footer() {
  	return (
		<footer className="bg-pink footer">
			<div className="footer__logo">
				<div className="footer__logo-icon">
					<img src="/image/logo.png" alt="A cupcake, logo of website" />
				</div>
				<h1 className="fs-800 ff-serif color-heading">TORONTO<br />CUPCAKE</h1>
			</div>
			<div className="footer__nav">
				<h3 className="fs-600 color-heading">Navigation</h3>
				<ul>
					<Link to='/' style={{textDecoration: 'none'}}>
						<li><span>Home</span></li>
					</Link>
					<Link to='/' style={{textDecoration: 'none'}}>
						<li><span>Cupcakes</span></li>
					</Link>
					<Link to='/' style={{textDecoration: 'none'}}>
						<li><span>Corporate</span></li>
					</Link>
					<Link to='/' style={{textDecoration: 'none'}}>
						<li><span>Connect</span></li>
					</Link>
					<Link to='/' style={{textDecoration: 'none'}}>
						<li><span>Faq</span></li>
					</Link>
					<Link to='/' style={{textDecoration: 'none'}}>
						<li><span>About</span></li>
					</Link>
				</ul>
			</div>
			<div className="footer__social">
				<h3 className="fs-600 color-heading">Stay Connected</h3>
				<div className="footer__icon-list">
					<Link to="/" className="footer__icon">
						<img src="/image/facebook.png" alt="facebook icon" />
					</Link>
					<Link to="/" className="footer__icon">
						<img src="/image/twitter.png" alt="twitter icon" />
					</Link>
					<Link to="/" className="footer__icon">
						<img src="/image/instagram.png" alt="instagram icon" />
					</Link>
					<Link to="/" className="footer__icon">
						<img src="/image/youtube.png" alt="youtube icon" />
					</Link>
				</div>
			</div>
		</footer>
	)
}

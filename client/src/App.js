import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Connect from './pages/Connect';
import Faq from './pages/Faq'
import About from './pages/About';
import Corporate from './pages/Corporate';
import Cupcakes from './pages/Cupcakes';
import ProductDetails from './pages/ProductDetails';
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();

function App() {
  	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path='/'>
						<Route index element={<Home />} />
						<Route path='cupcakes' element={<Cupcakes />} key={Date.now()} />
						<Route path='connect' element={<Connect />} key={Date.now()} />
						<Route path='corporate' element={<Corporate />} key={Date.now()} />
						<Route path='about' element={<About />} key={Date.now()} />
						<Route path='faq' element={<Faq />} key={Date.now()} />
						<Route path='product/:param/:id' element={<ProductDetails key={Date.now()} />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
  	);
}

export default App;

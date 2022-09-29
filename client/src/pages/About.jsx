import '../styles/about.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
		<Header />
		<div style= {{minHeight: "100vh"}}>
			<div className="section-container">
				<div className="columns image" style={{backgroundImage: "url('image/girl.jpg')"}}>
					&nbsp;
				</div>
				<div className="columns content">
					<div className="content-container">
						<h1>ABOUT MICHELLE</h1>
						<h3>
						Toronto Cupcake was created by Michelle
						Harrison so she could persue her love of baking.
						A lifelong baker, inspired by her mother, Michelle
						opened Toronto Cupcake in August 2010 as one of Canada’s first gourmet cupcakeries.
						</h3>
					</div>
				</div>
			</div>
			<div className="section-container">
				<div className="columns content">
					<div className="content-container">
						<h1>ABOUT CUPCAKES</h1>
						<h3>
						We are driven by loving what we do and what we make everyday. We get to use the
						finest ingredients to make what we believe are the tastiest treats around.
						And.. we love the idea that our treats are making people happy every time
						they bite into one. How much fun is that!
						</h3>
					</div>
				</div>
				<div className="columns image" style={{backgroundImage: "url('image/cake.jpg')"}}>
					&nbsp;
				</div>
			</div>
    	</div>
		<Footer />
    </>
  )
}



    



    
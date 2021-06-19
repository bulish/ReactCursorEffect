import './styles.scss';
import { gsap, TweenMax } from 'gsap';

function App() {
  document.body.addEventListener('mousemove', function(e) {
    TweenMax.to('.cursor__ball', 0.4, {
      x: e.pageX - 15,
      y: e.pageY - 15,
    });
  });

  const mouseEnterFunction = () => {
    gsap.to(".cursor", {display: "block"});
  }
  const mouseLeaveFunction = () => {
			gsap.to('.cursor', { display: 'none' });
	};
  return (
		<main>
			<section onMouseEnter={mouseEnterFunction} onMouseLeave={mouseLeaveFunction}>
				<h1>
					Cursor Effect
				</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ad
					sequi, voluptate ea maiores quo placeat amet dicta officia, sed
					eveniet molestiae asperiores est sint ut similique. Perspiciatis
					placeat dolore mollitia voluptas voluptates ratione cum deserunt
					dolorem nam quam ipsa soluta nulla culpa suscipit nemo, excepturi
					sequi hic officia magni.
				</p>
			</section>
			<div className="cursor">
				<div className="cursor__ball ">
					<svg height="100" width="100">
						<circle cx="50" cy="50" r="40" strokeWidth="0"></circle>
					</svg>
				</div>
			</div>
		</main>
	);
}

export default App;

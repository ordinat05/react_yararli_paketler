import React, { useRef } from 'react'
import CountUp, { useCountUp } from 'react-countup';
import './sayac.css'

function Sayac() {
	const countUpRef = React.useRef(null);
	// const paraBirimi = "&#8378;";
	const { start, pauseResume, reset, update } = useCountUp({
		ref: countUpRef,
		start: 0,
		end: 100,
		duration: 5,
	});
	return (
		<div className='sayac'>
			<div className="kutular">
				<div className="kutu kutu1">{<CountUp end={100} duration={2} delay={3} suffix='&#8378;' />}</div>
				<div className="kutu kutu2" ref={countUpRef}>0</div>
				<div className="kutu kutu3">{<CountUp end={500} duration={1} suffix='&#8378;' />}</div>
			</div>
			<div className="butonlar">
				<button class="btn btn-success" onClick={start}>BAŞLAT</button>
				<button class="btn btn-warning" onClick={pauseResume}>DUR || DEVAM</button>
				<button class="btn btn-primary" onClick={() => update(120)}>ARTTIR</button>
				<button class="btn btn-danger" onClick={reset}>&nbsp; SİL &nbsp;</button>
			</div>
			{/* <h1>Sayacdan gelen yazı</h1> */}
		</div>
	)
}

export default Sayac

import React, {useEffect, useRef} from "react";

import SmoothScrollTo from "../hooks/smoothScrollTo";
import BlurText from "../styles/BlurText";
import TextPressure from "../styles/TextPressure";
import SplitText from "../styles/SplitText";

import WOW from "wowjs";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function Background() {

	useEffect(() => {
		new WOW.WOW().init();
	},[]	
	)

	return (
		<div id="my-background" className="background">
			<div id="stars" />
			<div id="stars2" />
			<div id="stars3" />
			<div className="top-container flex">
			<SplitText
  text="Hello, I'm Ram!"
  className="text-2xl font-semibold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>
			<div className="bottom-container flex" alignItems="center" justifyContent="bottom">
				<button className={"work-button wow bounceIn"} data-wow-offset="0"
					onClick={() => SmoothScrollTo("my-projects")}>
					View my work
				</button>
			</div>
		</div>
		</div>
		);
}
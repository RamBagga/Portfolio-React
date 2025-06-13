import React, {useEffect, useRef} from "react";

import SmoothScrollTo from "../hooks/smoothScrollTo";
import BlurText from "../styles/BlurText";
import TextPressure from "../styles/TextPressure";

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
				 <TextPressure
    text="Hi I'm Ram Bagga"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={10}
  />
			</div>
			<div className="bottom-container flex" alignItems="center" justifyContent="bottom">
				<button className={"work-button wow bounceIn"} data-wow-offset="0"
					onClick={() => SmoothScrollTo("my-projects")}>
					View my work
				</button>
			</div>
		</div>
		);
}
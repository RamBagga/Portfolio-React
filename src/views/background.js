import React, {useEffect, useRef} from "react";

import SmoothScrollTo from "../hooks/smoothScrollTo";
import ASCIIText from '../styles/AsciiText';

import WOW from "wowjs";

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
					<ASCIIText   text='Hello, I&apos;m Ram Bagga.
					I&apos;m a Software Developer, Full-stack proficient.'
					enableWaves={true}asciiFontSize={8}/>
				<button className={"work-button wow bounceIn"} data-wow-offset="0"
					onClick={() => SmoothScrollTo("my-projects")}>
					View my work
				</button>
			</div>
		</div>
		);
}
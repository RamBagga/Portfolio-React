import React from "react";

import myImage from "../../img/myImage.png";

//import skillBars
import SkillBars from "./about.description.skillBars";

export default function AboutDescription(props) {
    return (
        <div className="row wow fadeIn" style={{ marginTop: 7 + "rem" }}>
            <div className="col-12 col-lg-6 hidden">
                <img
                    className={"img-fluid"}
                    src={myImage}
                    alt="Portfolio Image"
                    style={{
                        borderRadius: 50 + "%",
                        height: 260 + "px",
                        width: 260 + "px"
                    }}
                />
                <p className="mytext pt-3">
                    I am a full stack proficient software engineer, specializing in building fault tolerant systems and building responsive web applications.
                </p>
            </div>

            <SkillBars />

        </div>
    );
}
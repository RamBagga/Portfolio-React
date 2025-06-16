import React, { useState } from 'react';


//import images
import tnu1 from "../../img/tnu1.png";
import tnu2 from "../../img/tnu2.png";
import formCraft from "../../img/formCraft.png";

export default function ProjectList() {

    const [projects] = useState([
        {
            name: "SkillUp",
            image: tnu1,
            // button: "tnu1"
        },
        {
            name: "SkillUp",
            image: tnu2,
            // button: "agua"
        },
        {
            name: "FormCraft",
            image: formCraft,
            // button: "todo"
        }
    ]);


    function showModal(name) {
        const modalBG = document.getElementById("gallery-card");
        const modal = document.getElementById(name);
        modalBG.style.display = "block";
        modal.style.display = "block";
    }

    function addbackground(image) {
        const style = {
            backgroundImage: `url(${image})`
            }
        return style;
    }

    return (
        <div className="row my-5">
            {
                projects.map((project, index) => {
                return(
                    <div className={"testbg col-12 col-sm-12 col-md-4 wow fadeIn"} key={index} style={addbackground(project.image)}>
                        <div className="overlay">
                            <div className="text">
                                <h2>{project.name}</h2>
                            </div>
                            {/* <div>
                            </div> */}
                        </div>
                    </div>
                )})
            }
        </div>
    );
}
import React, {useState} from "react";

export default function SkillBars() {

    //state for specific techs you know
    const [technologies, setTechnologies] = useState([
        {
            name: "Java",
            percentage: 90
        },
        {
            name: "Spring Boot",
            percentage: 90
        },
        {
            name: "React.js",
            percentage: 70
        },
        {
            name: "C++",
            percentage: 70
        },
        {
            name: "JavaScript",
            percentage: 50
        }
    ]);

    return(
        <div className={"col-12 col-sm-12 col-md-12 col-lg-6 wow fadeIn"}>
            {
                technologies.map((tech, index) => {
                    return (
                        <div className="progress mb-3" key={index}>
                            <div
                                className={"progress-bar fill-"+ tech.percentage.toString() +"-bar"}
                                role="progressbar"
                                style={{ width: tech.percentage + "%" }}
                                aria-valuemin="0"
                                aria-valuemax="100">
                                {tech.name}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}
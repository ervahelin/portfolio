import React from "react";

function Skills() {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <div className="flex flex-row gap-4 justify-center">
        <div className="skill">
        html
        </div>
        <div className="skill text-primary border-primary">
        Figma
        </div>
        <div className="skill">
        React
        </div>
      </div>
      <div className="flex flex-row gap-4 justify-center ">
        <div className="skill text-primary border-primary">
        SASS
        </div>
        <div className="skill">
        Wordpress
        </div>
      </div>
      <div className="flex flex-row gap-4 justify-center">
        <div className="skill">
        Postgress
        </div>
        <div className="skill text-primary border-primary">
        CSS
        </div>
        <div className="skill">
        Git
        </div>
      </div>
      <div className="flex flex-row gap-4 justify-center">
        <div className="skill text-primary border-primary">
        Tailwind
        </div>
        <div className="skill">
        Javascript
        </div>
      </div>
      
    </div>
  );
}

export default Skills;

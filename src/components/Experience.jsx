import React from "react";

function Experience() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-5">
        <h3 className="uppercase text-2xl">01 WORK</h3>
        <ul className="pl-10">
          <li className="text-primary">
            <strong>florianmatthias</strong> - internship - 6 months
          </li>
          <li>
            <strong>FH Salzburg</strong> - HR Student Assistent - 4 months
          </li>
          <li>
            <strong>Bakery Ruetz</strong> - Selling
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="uppercase text-2xl">02 EDUCATION</h3>
        <ul className="pl-10">
          <li className="text-primary">
            <strong>Fachhochschule Salzburg</strong> - MultiMediaTechnology -
            2026
          </li>
          <li>
            <strong>Ferrarischule Innsbruck </strong> - Mediendesign - 2022
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="uppercase text-2xl">03 LANGUAGES</h3>
        <div className="flex flex-row">
          <ul className="pl-10">
            <li>
              <strong>German</strong> - C2
            </li>
            <li>
              <strong>Turkish</strong> - C1
            </li>
          </ul>
          <ul className="pl-10">
            <li>
              <strong>English</strong> - B2
            </li>
            <li>
              <strong>Kurdish</strong> - B1
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;

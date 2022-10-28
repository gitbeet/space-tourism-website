import React, { useEffect, useState } from "react";
import "../css/Crew.css";
import data from "../data.json";
import Background from "./Background";

function Crew() {
  const [crewMember, setCrewMember] = useState("Douglas Hurley");
  const [image, setImage] = useState();

  const currentCrewMember = data["crew"].find(
    (member) => member.name === crewMember
  );
  const nameArray = crewMember.toLowerCase().split(" ");

  useEffect(() => {
    import(`../assets/crew/image-${nameArray[0]}-${nameArray[1]}.png`).then(
      (image) => setImage(image.default)
    );
  }, [crewMember]);

  return (
    <div className="container">
      <Background page={"crew"} />
      <div class="wrapper">
        <div className="crew-container">
          <div class="image-container">
            <img
              key={`planet-${crewMember}`}
              className="crew-image"
              src={image}
              alt="crew member"
            />
          </div>
          <div className="crew-text">
            <div className="button-container">
              {data["crew"].map((member) => (
                <div
                  onClick={() => setCrewMember(member.name)}
                  className={`${
                    member.name === crewMember
                      ? "button-dot-active button-dot"
                      : "button-dot"
                  }`}
                ></div>
              ))}
            </div>
            <div class="crew-info">
              <h4 className="crew-role">
                {currentCrewMember.role.toUpperCase()}
              </h4>
              <h5 className="crew-name font-one color-white">
                {currentCrewMember.name.toUpperCase()}
              </h5>
              <p className="crew-bio text-center">{currentCrewMember.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;

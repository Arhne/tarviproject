'use client';
import React, {useState} from "react";
import { team_members } from ".";
import Image from "next/image";
import style from "./styles.module.scss"

const Team = () => {


const [selectedMember, setSelectedMember] = useState<string | null>(null);


const handleMemberClick = (bio: string) => {
  setSelectedMember(bio);
};
return (
  <div className={style.Team}>
    <h2>Meet the <span className="gradcolor">Team</span></h2>

    {selectedMember && (
        <div className={style.description}>
          <p>{selectedMember}</p>
        </div>
      )}

      
    <div className={style.memberpic}>
      {team_members.map((member) => (
        <div key={member.key} className={style.imgwrap} onClick={() => handleMemberClick(member.bio)}>
        <Image
          src={member.pic}
          alt="team members image"
          width={250}
          height={250}
          className={style.img}
        />
        <div className={style.overlay}>
          <p className={style.title}>{member.name.toUpperCase()}</p>
          <p className={style.role}>{member.role.toUpperCase()}</p>
        </div>
        </div>
      ))}
      

      </div>
  
      
  </div>
);
}
export default Team;

"use client";

import React, { useState } from "react";
import { team_members } from ".";
import Image from "next/image";
import style from "./styles.module.scss";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<{
    name: string;
    role: string;
    bio: string;
  } | null>(null);

  const handleMemberClick = (member: (typeof team_members)[number]) => {
    setSelectedMember({
      name: member.name,
      role: member.role,
      bio: member.bio,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderGroup = (
    title: string,
    members: typeof team_members,
    featured = false
  ) => (
    <section className={style.group}>
      <h2>{title}</h2>
      <div className={`${style.memberpic} ${featured ? style.featured : ""}`}>
        {members.map((member) => (
          <button
            type="button"
            key={member.key}
            className={style.imgwrap}
            onClick={() => handleMemberClick(member)}
          >
            <Image
              src={member.pic}
              alt={member.name}
              width={400}
              height={480}
              className={style.img}
            />
            <div className={style.meta}>
              <p className={style.title}>{member.name}</p>
              <p className={style.role}>{member.role}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );

  return (
    <div className={style.Team}>
      <header className={style.pageHead}>
        <p className={style.kicker}>Leadership</p>
        <h1>Meet the team</h1>
        <p className={style.lead}>
          The people guiding TARV&apos;s mission to rebuild and rebrand the
          African continent.
        </p>
      </header>

      {selectedMember && (
        <div className={style.description}>
          <button
            type="button"
            className={style.closeBio}
            onClick={() => setSelectedMember(null)}
          >
            Close
          </button>
          <p className={style.bioName}>{selectedMember.name}</p>
          <p className={style.bioRole}>{selectedMember.role}</p>
          <p>{selectedMember.bio}</p>
        </div>
      )}

      {renderGroup("Founder", team_members.slice(0, 1), true)}
      {renderGroup("Co-founders", team_members.slice(1, 4))}
      {renderGroup("Management team", team_members.slice(4))}
    </div>
  );
};

export default Team;

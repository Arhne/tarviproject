
'use client';
import React, {useState} from "react";
import { services } from ".";
import Image from "next/image";
import style from "./styles.module.scss"


interface ServiceMember {
    key: number;
    pic: string;
    
  }

const Services = () => {
 
return (
  <div className={style.service}>
    <h2>Our <span className="gradcolor">Services</span></h2>
    <div className={style.memberpic}>
      {services.map((member:ServiceMember) => (
        <div key={member.key} className={style.imgwrap}>
        <Image
          src={member.pic}
          alt="service image"
          width={250}
          height={250}
          className={style.img}
        />
        </div>
      ))}
      

      </div>
  </div>
);

}

export default Services;
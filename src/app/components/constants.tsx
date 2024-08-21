import React, { ReactNode } from "react";
import { FcIdea } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { GoLaw } from "react-icons/go";
import { FaRecycle } from "react-icons/fa6";
import { PiHandshakeDuotone } from "react-icons/pi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";


export interface IRoute{
img: ReactNode;
key: number;
heading: string, 
text: string 
}
export const objectives: IRoute[] = [
    {
        img: <FcMoneyTransfer/>,
        key: 1,
        heading: "Facilitate Investment:",
        text: `Attract direct foreign investment to Africa by 
                organizing impactful dialogues and summits, showcasing investment 
                opportunities by fostering connections between investors, businesses, 
                and governments.`
    },

    {
        img: <FcIdea/>,
        key: 2,
        heading: "Empower MSMEs:",
        text: `Support the growth of Micro, Small, and Medium Enterprises 
                (MSMEs) in Africa by providing networking opportunities, with a focus on 
                inclusivity and equitable distribution of resources.`
    },
    {
        img: <GoLaw style={{ color: 'pink' }}/>,
        key: 3,
        heading: "Advocate for Bottom-Up Approach:",
        text: `Work closely with government and agencies, 
                guiding them to adopt an approach in policy-making and development initiatives, 
                ensuring that the needs and aspirations of local communities are prioritized.
              `
    },
    {
        img: <FaRecycle style={{ color: 'purple' }}/>,
        key: 4,
        heading: "Foster Responsible Resource Utilization:",
        text: `Promote sustainable practices and 
                responsible resource utilization, ensuring that Africa's natural resources are 
                developed in an environmentally conscious manner, while protecting the rights and 
                interests of local communities. `
    },
    {
        img: <PiHandshakeDuotone style={{ color: 'red' }}/>,
        key: 5,
        heading: "Development Partnerships:",
        text: `Cultivate strategic 
                partnerships with entities that share our values and commitment to Africa's 
                development, fostering mutually beneficial relationships.`
    },
    {
        img: <MdOutlineConnectWithoutContact style={{ color: 'green' }}/>,
        key: 6,
        heading: "Drive Social Impact:",
        text: `Create positive social impact by 
                supporting initiatives that address pressing social challenges in Africa, 
                including education, healthcare, gender equality, and poverty alleviation
                (Do the right thing/CSR).
              `
    },
]
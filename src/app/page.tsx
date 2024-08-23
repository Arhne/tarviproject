import Image from "next/image";
import styles from "./page.module.scss";
import Card from "./components/custom-card/index";
import { objectives } from "./components/constants";
import visionImg from "./components/assests/03.webp";
import missionImg from "./components/assests/02.webp";
import { Banners } from "./components/custom-banner/index";

export default function Home() {
  return (
    <>
      <div className={styles.homewrap}>
        <div className={styles.hometext}>
          <div>
            <h1>
              {" "}
              THE <span className="gradcolor">AFRICAN REBIRTH</span> VISION
              INTERNATIONAL{" "}
            </h1>
            <p>...Rebuilding and Rebranding the African Continent</p>

            <p>Building Trade, Finance and Investment Bridges across Africa</p>
          </div>
        </div>
      </div>

      <h1 className={styles.brand_desc}>
        Who We <span className="gradcolor">Are</span>

      </h1>
      <div className={styles.motto} id="about">
        <p>
          The African Rebirth Vision International (TARVi) supports constructive
          public and private partnerships, representing local and foreign
          investments across Africa. Our core objective is to safeguard and
          advance business and community interests by engaging with government
          bodies, and regulators. We advocate for favorable regulations and
          legislation that foster investment, economic growth, and job creation.
        </p>

        <p>
          By proactively addressing challenges and promoting investment
          potentials through media partnerships, we aim to enhance the
          attractiveness of African countries, encourage rebranding, and
          stimulate investor interest, ultimately fostering sustained economic
          development.
        </p>
      </div>

      <Banners
        title="OUR SHARED"
        picture={visionImg}
        gradtitle="VISION"
        content={`Rebuilding and rebranding to create an empowered Africa,
       utilizing its abundant resources for the benefit of all,
        while fostering sustainable growth and promoting equitable foreign partnerships`}
        titletwo="OUR"
        picturetwo={missionImg}
        gradtitletwo="MISSION"
        contenttwo={` Our mission is to champion Africa's development and economic growth 
        through a bottom-up approach, guiding governments to adopt inclusive 
        policies and initiatives. `}
        secondcontent={`  We strive to attract foreign partnerships that align with our values, 
                        ensuring that Africa's resources are harnessed responsibly and utilized to uplift 
                        African communities, foster entrepreneurship, and drive sustainable development.
                       `}
      />

      <section className={styles.objectivesection}>
        {" "}
        <h1> Objectives</h1>
        <div className={styles.objectiv}>
          {objectives.map((objective) => (
            <div key={objective.key}>
              <Card
                // icon={<objective.img size={120}/>}
                icon={<div style={{ fontSize: "120px" }}>{objective.img}</div>}
                title={objective.heading}
                content={objective.text}
              />
            </div>
          ))}
        </div>
      </section>

      <section className={styles.history}>
       
        <div className={styles.brand_history}>
          <h1>
            Our <span className="gradcolor">History</span>
          </h1>
          <p>
            {" "}
            TARVi traces its roots to a successful partnership between Hapel
            Group, a leading construction heavyweight in Nigeria, and
            Stefanutti, one of Africa&apos;s largest construction companies.
          </p>
          <p>
            {" "}
            This collaboration generated over 5,000 jobs and 200 infrastructure
            projects, benefiting local communities. Inspired by this success,
            TARVi was established to build upon past achievements and expand
            efforts across Africa.{" "}
          </p>
          <p>
            Our mission revolves around fostering constructive public and
            private partnerships, leveraging resources for Africa&apos;s development,
            and promoting favorable investment climates.
          </p>

          <p>
            Through strategic media partnerships, we aim to enhance Africa&apos;s
            appeal, encourage investment, and drive sustained economic growth.
          </p>
        </div>

        <Image
          src="/historyimg.jpg"
          width={800}
          height={800}
          className={styles.sideimg}
          alt="advert"
        />
      </section>

    </>
  );
}

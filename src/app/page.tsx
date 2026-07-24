import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import Card from "./components/custom-card/index";
import { objectives } from "./components/constants";
import visionImg from "./components/assests/hapelmeeting.jpeg";
import missionImg from "./components/assests/boardroom.jpg";
import { Banners } from "./components/custom-banner/index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TARV — The African Rebirth Vision",
  description: "Rebuilding and rebranding the African continent through trade, finance, and investment bridges.",
};

export default function Home() {
  return (
    <>
      <section className={styles.homewrap}>
        <Image
          src="/herobg.jpg"
          alt="African landscape and opportunity"
          fill
          priority
          className={styles.heroImg}
          sizes="100vw"
        />
        <div className={styles.heroScrim} />
        <div className={styles.hometext}>
          <p className={`${styles.brandMark} rise-in`}>The African Rebirth Vision</p>
          <h1 className="rise-in-delay">
            Rebuilding Africa through trade, finance &amp; partnership
          </h1>
          <p className={`${styles.heroLead} rise-in-delay-2`}>
            We connect governments, investors, and communities to unlock
            sustainable growth across the continent.
          </p>
          <div className={`${styles.ctaRow} rise-in-delay-2`}>
            <Link href="/contact" className={styles.primaryCta}>
              Partner with us
            </Link>
            <Link href="/services" className={styles.secondaryCta}>
              Explore services
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.logo_display}>
        <Image
          src="/logo-brand.png"
          width={280}
          height={110}
          className={styles.brandmargin}
          alt="TARV brand mark"
        />
        <p>Building trade, finance and investment bridges across Africa</p>
      </section>

      <section className={styles.about} id="about">
        <div className={styles.aboutIntro}>
          <p className={styles.kicker}>Who we are</p>
          <h2>
            Advancing Africa&apos;s economic story with clarity and purpose
          </h2>
        </div>
        <div className={styles.motto}>
          <p>
            The African Rebirth Vision International (TARV) supports constructive
            public and private partnerships, representing local and foreign
            investments across Africa. Our core objective is to safeguard and
            advance business and community interests by engaging with government
            bodies and regulators. We advocate for favorable regulations and
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
      </section>

      <Banners
        title="Our shared"
        picture={visionImg}
        gradtitle="vision"
        content={`Rebuilding and rebranding to create an empowered Africa, utilizing its abundant resources for the benefit of all, while fostering sustainable growth and promoting equitable foreign partnerships.`}
        titletwo="Our"
        picturetwo={missionImg}
        gradtitletwo="mission"
        contenttwo={`Our mission is to champion Africa's development and economic growth through a bottom-up approach, guiding governments to adopt inclusive policies and initiatives.`}
        secondcontent={`We strive to attract foreign partnerships that align with our values, ensuring that Africa's resources are harnessed responsibly and utilized to uplift African communities, foster entrepreneurship, and drive sustainable development.`}
      />

      <section className={styles.objectivesection}>
        <div className={styles.objectiveHead}>
          <p className={styles.kicker}>What we pursue</p>
          <h2>Objectives</h2>
        </div>
        <div className={styles.objectiv}>
          {objectives.map((objective, i) => (
            <Card
              key={objective.key}
              index={i + 1}
              icon={objective.img}
              title={objective.heading}
              content={objective.text}
            />
          ))}
        </div>
      </section>

      <section className={styles.history}>
        <div className={styles.historyMedia}>
          <Image
            src="/historyimg.jpg"
            width={1200}
            height={900}
            className={styles.sideimg}
            alt="TARV partnership history"
          />
        </div>
        <div className={styles.brand_history}>
          <p className={styles.kicker}>Our roots</p>
          <h2>
            A history built on results
          </h2>
          <p>
            TARV traces its roots to a successful partnership between Hapel
            Group, a leading construction heavyweight in Nigeria, and
            Stefanutti, one of Africa&apos;s largest construction companies.
          </p>
          <p>
            This collaboration generated over 5,000 jobs and 200 infrastructure
            projects, benefiting local communities. Inspired by this success,
            TARV was established to build upon past achievements and expand
            efforts across Africa.
          </p>
          <p>
            Our mission revolves around fostering constructive public and
            private partnerships, leveraging resources for Africa&apos;s
            development, and promoting favorable investment climates.
          </p>
          <p>
            Through strategic media partnerships, we aim to enhance
            Africa&apos;s appeal, encourage investment, and drive sustained
            economic growth.
          </p>
        </div>
      </section>
    </>
  );
}

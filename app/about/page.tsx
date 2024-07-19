import { Avatar, Chip, Tooltip, Zoom } from "@mui/material";
import Image from "next/image";
import styles from "./page.module.scss";
import {
  Hobby,
  Skill,
  hobbies,
  jobs as jobsMeta,
  skills as skillsItems,
} from "./data";
import { useTranslations } from "next-intl";
import SuperImage from "@/components/SuperImage/SuperImage";
import CircleProgress from "@/components/CircleProgress/CircleProgress";
import PageTransition from "@/components/PageTransition/PageTransition";
import InViewElement from "@/components/InViewElement/InViewElement";

function Expirience() {
  const t = useTranslations("about");
  const jobs = ["bunsan", "myself", "devowrms", "wellcom", "siweb"];

  return (
    <div>
      <h3 className="heading--3"> {t("experience.title")} </h3>
      <ul className={styles.jobsExperience}>
        {jobs.map((key, index) => (
          <li className={styles.jobsExperience_item} key={`jobitem-${index}`}>
            <span className={styles.jobsExperience_bullet}></span>
            <div className={styles.jobsExperience_description}>
              <p className="text--content-bold">
                {t(`experience.item.${key}.position`)}
              </p>

              <p className="text--content">
                <a
                  href={jobsMeta.get(key)?.urlCompany}
                  target="_blank"
                  rel="noreferrer"
                >
                  @{t(`experience.item.${key}.company`)}
                </a>
                <time className="ml--1">
                  {t(`experience.item.${key}.period`)}
                </time>
              </p>

              <div className={styles.jobsExperience_technologies}>
                {jobsMeta
                  .get(key)
                  ?.technologies.map((tech, index) => (
                    <Image
                      key={`tech-${tech}-${index}`}
                      src={`/images/technologies/${tech}.svg`}
                      alt={tech}
                      title={tech}
                      width={16}
                      height={16}
                    />
                  ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Education() {
  const t = useTranslations("about");
  const items = ["college", "highschool", "juniorHighschool"];

  return (
    <InViewElement tag="div">
      <>
        <h3 className="heading--3">{t("education.title")}</h3>
        {items.map((key, index) => (
          <div key={`schoolgrade-${index}`}>
            <p className="text--content-bold">
              {t(`education.item.${key}.title`)}
            </p>
            <p className="text--content">
              {t(`education.item.${key}.description`)}
            </p>
            <time>{t(`education.item.${key}.period`)}</time>
          </div>
        ))}
      </>
    </InViewElement>
  );
}

function Hobbies() {
  const HOBBIES_PER_COLUMN = 3;
  const t = useTranslations("about");

  const hobbiesChunks = hobbies.reduce((acc: Hobby[][], _hobby, index) => {
    if (index % HOBBIES_PER_COLUMN === 0)
      acc.push(hobbies.slice(index, index + HOBBIES_PER_COLUMN));
    return acc;
  }, []);

  return (
    <InViewElement tag="div">
      <>
        <h3 className="heading--3"> {t("hobbies.title")} </h3>
        <div className={styles.hobbies}>
          {hobbiesChunks.map((chunk, index) => {
            return (
              <div
                key={`hobbies-chunk-${index}`}
                className={styles.hobbies_column}
              >
                {chunk.map((hobby, index) => {
                  return (
                    <SuperImage
                      key={`hobby-${index}`}
                      src={hobby.src}
                      alt={t(hobby.alt)}
                      width={hobby.width}
                      height={hobby.height}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </>
    </InViewElement>
  );
}

function Skills() {
  const t = useTranslations("about");

  const greatesSkillPointSum = skillsItems.reduce((acc, skill) => {
    const skillPoints = skill.projects + skill.courses;
    if (skillPoints > acc) return skillPoints;
    return acc;
  }, 0);

  const getSkillValue = (skill: Skill) => {
    const skillPoints = skill.projects + skill.courses;
    return (skillPoints / (greatesSkillPointSum - 1)) * 100;
  };

  return (
    <InViewElement tag="div">
      <>
        <h4 className="heading--4"> {t("skills.title")} </h4>
        <div className={styles.skillsList}>
          {skillsItems.map((skill, index) => {
            return (
              <CircleProgress
                key={`skill-${index}`}
                value={getSkillValue(skill)}
                color="info"
                size={96}
                thickness={2}
              >
                <Tooltip
                  slotProps={{
                    popper: {
                      modifiers: [
                        {
                          name: "offset",
                          options: {
                            offset: [0, 4],
                          },
                        },
                      ],
                    },
                  }}
                  title={t("skills.description", {
                    projects: skill.projects,
                    courses: skill.courses,
                  })}
                  TransitionComponent={Zoom}
                  leaveDelay={750}
                  arrow
                >
                  <div className={styles.skillsList_skillItem}>
                    <span className="text--sm-bold">{skill.name}</span>
                    <Image
                      src={`/images/technologies/${skill.icon}.svg`}
                      alt={skill.name}
                      width={24}
                      height={24}
                    />
                  </div>
                </Tooltip>
              </CircleProgress>
            );
          })}
        </div>
      </>
    </InViewElement>
  );
}

export const metadata = {
  title: "About",
  description:
    "This is a page where I share my experiences, education, skills, and hobbies.",
};

export default function About() {
  const t = useTranslations("about");

  return (
    <PageTransition className={`container ${styles.aboutMe}`}>
      <h1 className="heading--1">
        {t("title")}
        <hr className="divider mt--1" />
      </h1>

      <div className={styles.aboutMe_from}>
        <Image
          src="/images/yo_2.png"
          alt="Andrew Gonzalez"
          width={120}
          height={120}
          className={`circle ${styles.aboutMe_photo}`}
        />

        <Chip
          avatar={<Avatar alt="Mx" src="/images/mx-flag.png" />}
          label={t("from")}
          size="small"
        />
      </div>

      <div className={styles.aboutMe_brief}>
        <p className="text--content text--info">{t("description1")}</p>
        <p className="text--content mt--2">{t("description2")}</p>
      </div>

      <Expirience />

      <Education />

      <Skills />

      <Hobbies />
    </PageTransition>
  );
}

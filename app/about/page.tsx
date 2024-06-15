import { LocationOn } from "@mui/icons-material"
import { Chip, Tooltip, Zoom } from "@mui/material"
import Image from "next/image"
import styles from "./page.module.scss"
import { Skill, jobs as jobsMeta, skills as skillsItems } from "./data"
import { useTranslations } from "next-intl"
import SuperImage from "@/components/SuperImage/SuperImage"
import CircleProgress from "@/components/CircleProgress/CircleProgress"

interface Hobby {
  src: string
  alt: string
  width: number
  height: number
}

function Expirience() {
  const t = useTranslations('about')
  const jobs = ["bunsan", "myself", "devowrms", "wellcom", "siweb"]

  return (
    <div >
      <h3 className="heading--3 text--secondary"> {t("experience.title")} </h3>
      <ul className={styles.jobsExperience}>
        {
          jobs.map((key, index) => (
            <li className={styles.jobsExperience_item} key={`jobitem-${index}`} >
              <span className={styles.jobsExperience_bullet}></span>
              <div className={styles.jobsExperience_description}>

                <p className="text--content-bold">
                  {t(`experience.item.${key}.position`)}
                </p>

                <p className="text--content">
                  <a href={jobsMeta.get(key)?.urlCompany} target="_blank" rel="noreferrer" >@{t(`experience.item.${key}.company`)}</a>
                  <time className="ml--1">{t(`experience.item.${key}.period`)}</time>
                </p>

                <div className={styles.jobsExperience_technologies}>
                  {jobsMeta.get(key)?.technologies.map((tech, index) => (<Image key={`tech-${tech}-${index}`} src={`/images/technologies/${tech}.svg`} alt={tech} title={tech} width={16} height={16} />))}
                </div>

              </div>
            </li>
          ))
        }
      </ul>
    </div>)
}

function Education() {
  const t = useTranslations('about')
  const items = ["college", "highschool", "juniorHighschool"]
  return (<div >
    <h3 className="heading--3 text--secondary"> {t("education.title")} </h3>
    {items.map((key, index) => (
      <div key={`schoolgrade-${index}`}>
        <p className="text--content-bold">
          {t(`education.item.${key}.title`)}
        </p>
        <p className="text--content">
          {t(`education.item.${key}.description`)}
        </p>
        <time>
          {t(`education.item.${key}.period`)}
        </time>
      </div>
    ))}
  </div>)
}

function Hobbies() {
  const HOBBIES_PER_COLUMN = 3
  const t = useTranslations('about')
  const hobbies: Hobby[] = [
    { src: "/images/hobbies/videogames.png", alt: t("hobbies.gallery.videogames"), width: 329, height: 276 },
    { src: "/images/hobbies/cdmx.png", alt: t("hobbies.gallery.mexicoCity"), width: 377, height: 295 },
    { src: "/images/hobbies/oaxaca_2.jpg", alt: t("hobbies.gallery.oaxaca"), width: 330, height: 586 },
    { src: "/images/hobbies/navidad.png", alt: t("hobbies.gallery.christmas"), width: 361, height: 348 },
    { src: "/images/hobbies/aztec_stone.jpg", alt: t("hobbies.gallery.museums"), width: 330, height: 586 },
    { src: "/images/hobbies/huatulco.png", alt: t("hobbies.gallery.huatulco"), width: 543, height: 223 },
    { src: "/images/hobbies/emotional_state.jpg", alt: t("hobbies.gallery.thisIsFine"), width: 330, height: 586 },
    { src: "/images/hobbies/running.png", alt: t("hobbies.gallery.running"), width: 363, height: 465 },
  ]

  const hobbiesChunks = hobbies.reduce((acc: Hobby[][], _hobby, index) => {
    if (index % HOBBIES_PER_COLUMN === 0) acc.push(hobbies.slice(index, index + HOBBIES_PER_COLUMN));
    return acc
  }, [])



  return (<div >
    <h3 className="heading--3 text--secondary"> {t("hobbies.title")} </h3>
    <div className={styles.gallery}>
      {
        hobbiesChunks.map((chunk, index) => {
          return <div key={`hobbies-chunk-${index}`} className={styles.gallery_column}>
            {chunk.map((hobby, index) => {
              return <SuperImage src={hobby.src} alt={hobby.alt} width={hobby.width} height={hobby.height} />
            })}
          </div>
        })
      }
    </div>
  </div>)
}

function Skills() {
  const t = useTranslations('about')

  const greatesSkillPointSum = skillsItems.reduce((acc, skill) => {
    const skillPoints = skill.projects + skill.courses
    if (skillPoints > acc) return skillPoints
    return acc
  }, 0)

  const getSkillValue = (skill: Skill) => {
    const skillPoints = skill.projects + skill.courses
    return (skillPoints / (greatesSkillPointSum - 1)) * 100
  }


  return (<div >
    <h4 className="heading--4 text--secondary"> {t("skills.title")} </h4>
    <div className={styles.aboutMe_skillsList}>
      {skillsItems.map((skill, index) => {
        return <CircleProgress key={`skill-${index}`} value={getSkillValue(skill)} color="info" size={96} thickness={2}>
          <Tooltip slotProps={{
            popper: {
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [0, 4],
                  },
                },
              ],
            },
          }} title={t("skills.description", { projects: skill.projects, courses: skill.courses })} TransitionComponent={Zoom} leaveDelay={750} arrow>
            <div className={styles.aboutMe_skillItem}>
              <span className="text--sm-bold">{skill.name}</span>
              <Image src={`/images/technologies/${skill.icon}.svg`} alt={skill.name} width={24} height={24} />
            </div>
          </Tooltip>
        </CircleProgress>
      })}

    </div>

  </div>)
}

export default function About() {
  const t = useTranslations('about')

  return (
    <section className={`container ${styles.aboutMe}`}>
      <div >
        <h1 className="heading--1">{t("title")}</h1>
        <img src="/images/yo_2.png" alt="Andrew" width={120} height={120} className={`circle ${styles.photoOfMe}`} />
        <Chip icon={<LocationOn />} label="Mexico City, Mexico" size="small" />
      </div>
      <div className={styles.aboutMe_brief}>
        <p className="text--content text--info">
          {t("description1")}
        </p>

        <p className="text--content mt--2">
          {t("description2")}
        </p>

      </div>

      <Expirience />

      <Education />

      <Skills />
      <Hobbies />
    </section>
  )
}



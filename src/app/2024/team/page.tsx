'use client'

import { useState, useRef } from 'react'
import { motion, Variants, useInView } from 'framer-motion'
import SpeakerCard from '../../../components/SpeakerCard'

type TeamName =
    | 'Core'
    | 'Organising'
    | 'Web Dev'
    | 'Marketing'
    | 'Design'
    | 'Sponsorship'
    | 'Hospitality'
    | 'Content & Curation'
    | 'Productions'

interface Member {
    id: number
    name: string
    title: string
    company: string
    image: string
    bio: string
    description: string
    expertise: string[]
    social: {
        linkedin: string
        instagram?: string
        twitter: string
        website: string
    }
}

export default function TeamsPage() {
    const [activeTeam, setActiveTeam] = useState<TeamName>('Web Dev')

    const teams: Record<TeamName, Member[]> = {
        Core: [
            { id: 1, name: "Dr. E Saibaba Reddy", title: "Principal", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/core/saibaba.jpg?updatedAt=1729522758652", bio: "", description: "", expertise: [], social: { linkedin: "", instagram: "", twitter: "", website: "" } },
            { id: 2, name: "Dr. A Padmaja", title: "Dean", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/core/WhatsApp%20Image%202024-10-21%20at%2017.24.34_ff68359b.jpg?updatedAt=1729534845207", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/dr-padmaja-meesala-ba3a729/", instagram: "", twitter: "", website: "" } },
            { id: 3, name: "Mrs. G Srilatha", title: "Academic Coordinator", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/core/srilatha.jpg?updatedAt=1729522759229", bio: "", description: "", expertise: [], social: { linkedin: "", instagram: "", twitter: "", website: "" } },
            { id: 4, name: "Mr. R V Chalam", title: "Sr Administrative Officer", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/core/chalam.jpg?updatedAt=1729522756976", bio: "", description: "", expertise: [], social: { linkedin: "", instagram: "", twitter: "", website: "" } },
            { id: 5, name: "Dr. G Sreeram Reddy", title: "HOD-ME", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/core/sreeramreddy.jpg?updatedAt=1729522759243", bio: "", description: "", expertise: [], social: { linkedin: "", instagram: "", twitter: "", website: "" } },
            { id: 6, name: "Dr. A Srujana", title: "HOD-EEE", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/core/srujana.jpg?updatedAt=1729522759124", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/srujana-avula-a66167ba/", instagram: "", twitter: "", website: "" } },
            { id: 7, name: "Mr. B Srinivasulu", title: "HOD-IT", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/core/srinivas.jpg?updatedAt=1729522758877", bio: "", description: "", expertise: [], social: { linkedin: "", instagram: "", twitter: "", website: "" } },
            { id: 8, name: "Dr. M Rajendra Prasad", title: "HOD-ECE", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/core/rajendraprasad.jpg?updatedAt=1729522758544", bio: "", description: "", expertise: [], social: { linkedin: "", instagram: "", twitter: "", website: "" } },
            { id: 9, name: "Dr. Pallavi Badry", title: "HOD-CE", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/core/pallavibadry.jpg?updatedAt=1729522757322", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/dr-pallavi-badry-51382117/", instagram: "", twitter: "", website: "" } },
        ],
        Organising: [
            { id: 11, name: "Keerthana", title: "Licensee | Organiser", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/organizing/Keerthana.jpg?updatedAt=1729522747620", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/sai-keerthana-kurapati-15841b24a/", instagram: "", twitter: "", website: "" } },
            { id: 12, name: "Akash MallaReddy", title: "Co-Organiser", company: "TEDˣ", image: "https://ik.imagekit.io/tedxvjit/public/teams/organizing/akash.png?updatedAt=1729522747039", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/akash-rao-mallareddy/", instagram: "", twitter: "", website: "" } },
            { id: 13, name: "Dr. Ramesh Cheripelli", title: "Faculty Coordinator", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/organizing/ramesh.jpg?updatedAt=1729522748720", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/dr-ramesh-cheripelli-66057399/", instagram: "", twitter: "", website: "" } },
        ],
        "Web Dev": [
            { id: 20, name: "S Vijayanand", title: "Team Lead", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Web%20dev/IMG_5691.png?updatedAt=1729535555604", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/vijayanand01/", instagram: "", twitter: "", website: "" } },
            { id: 21, name: "Varshith Reddy", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Web%20dev/varshith.jpg?updatedAt=1729522733480", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/varshithreddy-aileni/", instagram: "", twitter: "", website: "" } },
            { id: 22, name: "Shiva Sai kumar", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Web%20dev/shiva.jpg?updatedAt=1729522733280", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/shivasai-pondurthi/", instagram: "", twitter: "", website: "" } },
            { id: 23, name: "Vijay Guttula", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/vjlive/TEDx%20VJIT%202025/Tech/Vijay%20Guttula.jpg?updatedAt=1757798815754", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/vijay-guttula/", instagram: "", twitter: "", website: "" } },
            { id: 24, name: "Nitesh Agarwal", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Web%20dev/nitesh.jpg?updatedAt=1729522733420", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/nitesh-agarwal52/", instagram: "", twitter: "", website: "" } },
            { id: 25, name: "Hussain Basha", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Web%20dev/basha.jpg?updatedAt=1729522733263", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/hussain-basha-dudekula-643423299/", instagram: "", twitter: "", website: "" } },
            { id: 26, name: "Vikhyath Gupta", title: "Team Member", company: "VJIT", image: "https://media.licdn.com/dms/image/v2/D5603AQEKauVG5OCQMQ/profile-displayphoto-shrink_800_800/B56ZW.5noAGUAc-/0/1742664531376?e=1760572800&v=beta&t=gXbok1MSB9DCbvp0W2bKAKXQCzQxG59itSGRRie1sUY", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/vikhyath-gupta/", instagram: "", twitter: "", website: "" } },
        ],
        Marketing: [
            { id: 30, name: "Bharath Kumar Agnur", title: "Team Lead", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Marketing/bharat.jpg?updatedAt=1729522750955", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/bharath-kumar-agnur/", instagram: "", twitter: "", website: "" } },
            { id: 31, name: "Anirudh Singh", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Marketing/Anirudh.jpg?updatedAt=1729522749679", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/anirudh-singh-495127324/", instagram: "", twitter: "", website: "" } },
            { id: 32, name: "Shiva Sharan", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Marketing/Shiva.png?updatedAt=1729522750744", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/shiva-sharan-koninty/", instagram: "", twitter: "", website: "" } },
            { id: 33, name: "Akshith", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Marketing/DSC01037.JPG?updatedAt=1729787143875", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/akshith-reddy-k-7a4566319/", instagram: "", twitter: "", website: "" } },
            { id: 34, name: "Amitouja Bose Tagore", title: "Team Member", company: "VJIT", image: "https://media.licdn.com/dms/image/v2/D5603AQFcGn9_-cp1Vg/profile-displayphoto-crop_800_800/B56ZkLsTZ2HAAI-/0/1756837789722?e=1760572800&v=beta&t=uZE2B0__xDEE5-nnkPC3mjhuI8qq6tMI4ALf8L0elyo", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/amitouja/", instagram: "", twitter: "", website: "" } },
            { id: 35, name: "Sindhu", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Marketing/Sindhu.jpg?updatedAt=1729522751368", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/chintakuntla-sindhu-886896259/", instagram: "", twitter: "", website: "" } },
            { id: 36, name: "Soumya", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Marketing/Sowmya.jpg?updatedAt=1729522751765", bio: "", description: "", expertise: [], social: { linkedin: "", instagram: "", twitter: "", website: "" } },
        ],
        Design: [
            { id: 40, name: "Sai Teja Naraboina", title: "Team Lead", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Design/Teja.jpg?updatedAt=1729522756289", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/naraboinasaiteja/", instagram: "", twitter: "", website: "" } },
            { id: 41, name: "Tanvi Deshmukh", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Design/tanvi.jpg?updatedAt=1729522756293", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/deshmukh-tanvi-2107ss/", instagram: "", twitter: "", website: "" } },
            { id: 42, name: "Bandi Bhagavathi", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Design/Bandi.jpg?updatedAt=1729522756203", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/bhagavathi-bandi-b7a256299/", instagram: "", twitter: "", website: "" } },
            { id: 43, name: "Yashasvi", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Design/Yashasvi.jpg?updatedAt=1729522756554", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/yashhasvi/", instagram: "", twitter: "", website: "" } },
            { id: 44, name: "Sai Krishna", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Design/Krishna.JPG?updatedAt=1729563492892", bio: "", description: "", expertise: [], social: { linkedin: "", instagram: "", twitter: "", website: "" } },
            { id: 45, name: "Himabala", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Design/HimaBala.jpg?updatedAt=1729522756069", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/himabala-bandaru-176508281/", instagram: "", twitter: "", website: "" } },
            { id: 46, name: "Sujay", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Design/Sujay.png?updatedAt=1729522756255", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/sujay-hiremath-672931255/", instagram: "", twitter: "", website: "" } },
            { id: 47, name: "Ananditha", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Design/Ananditha.jpg?updatedAt=1729563428254", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/ananditha-gangadharpalli-7666a6296/", instagram: "", twitter: "", website: "" } },
            { id: 48, name: "Sana", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Design/sana.jpg?updatedAt=1729563651366", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/sana-fatima-641a4628a/", instagram: "", twitter: "", website: "" } },
            { id: 49, name: "Swetha", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Design/sweta.jpg?updatedAt=1729563490954", bio: "", description: "", expertise: [], social: { linkedin: "", instagram: "", twitter: "", website: "" } },
        ],
        Sponsorship: [
            { id: 50, name: "Ansh Kamlekar", title: "Team Lead", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Partnerships/ansh.jpg?updatedAt=1729522743665", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/ansh-kamlekar-6a615b26a/", instagram: "", twitter: "", website: "" } },
            { id: 51, name: "Stephanie", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Partnerships/pili.jpg?updatedAt=1729680099868", bio: "", description: "", expertise: [], social: { linkedin: "", instagram: "", twitter: "", website: "" } },
            { id: 52, name: "Parth Asawa", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Partnerships/Parth.jpg?updatedAt=1729522746670", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/parthasawa/", instagram: "", twitter: "", website: "" } },
            { id: 53, name: "Apeksha", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Partnerships/Apeksha.jpg?updatedAt=1729522744129", bio: "", description: "", expertise: [], social: { linkedin: "", instagram: "", twitter: "", website: "" } },
            { id: 54, name: "Siri", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Partnerships/Siri.jpg?updatedAt=1729522746714", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/siridasari36/", instagram: "", twitter: "", website: "" } },
            { id: 55, name: "Gowthami", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Partnerships/Gowthami.jpg?updatedAt=1729522744582", bio: "", description: "", expertise: [], social: { linkedin: "", instagram: "", twitter: "", website: "" } },
            { id: 56, name: "Hima Varshini", title: "Team Member", company: "VJIT", image: "/2024/team/partnership/Himavarshini.jpg", bio: "", description: "", expertise: [], social: { linkedin: "", instagram: "", twitter: "", website: "" } },
            { id: 57, name: "Syed Asif", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Partnerships/Asif.jpg?updatedAt=1729522744324", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/syed-asif2505/", instagram: "", twitter: "", website: "" } },
        ],
        "Content & Curation": [
            { id: 60, name: "Akshaya Reddy Konatham", title: "Team Lead", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Communication/akshaya.jpg?updatedAt=1729522759338", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/akshaya-reddy-konatham-8ab714279/", instagram: "", twitter: "", website: "" } },
            { id: 61, name: "Amena Yasmeen", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Communication/amena.jpeg?updatedAt=1729522759692", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/amenayasmeen/", instagram: "", twitter: "", website: "" } },
            { id: 62, name: "Bhavagnya", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Communication/Bhavagnya.jpg?updatedAt=1729522760405", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/bhavagnya-p-384858297/", instagram: "", twitter: "", website: "" } },
            { id: 63, name: "Ashwin", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Communication/_DSC6795-2.jpg?updatedAt=1729680640416", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/ashw1n-kumar/", instagram: "", twitter: "", website: "" } },
            { id: 64, name: "Tulsy", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Communication/Tulsy.jpg?updatedAt=1729522761984", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/tulsy-pamarthi-48a820257/", instagram: "", twitter: "", website: "" } },
            { id: 65, name: "Rishika Devi", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Communication/Rishika.jpg?updatedAt=1729522761582", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/rishika-devi-362102285/", instagram: "", twitter: "", website: "" } },
            { id: 66, name: "Veda Sri", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Communication/vedasri.jpg?updatedAt=1729522761859", bio: "", description: "", expertise: [], social: { linkedin: "", instagram: "", twitter: "", website: "" } },
            { id: 67, name: "Neeraj", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Communication/neeraj.jpg?updatedAt=1729522761679", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/patibanda-sai-neeraj-607986291/", instagram: "", twitter: "", website: "" } },
            { id: 68, name: "Sathwik", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Communication/Sathwik.jpg?updatedAt=1729522761782", bio: "", description: "", expertise: [], social: { linkedin: "", instagram: "", twitter: "", website: "" } },
        ],
        Hospitality: [
            { id: 70, name: "Harshith Pilli", title: "Team Lead", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Hospitality/harshith.jpg?updatedAt=1729522753013", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/harshith-pilli-73012125a/", instagram: "", twitter: "", website: "" } },
            { id: 71, name: "Venkat Vatshal", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Hospitality/Venkat.jpg?updatedAt=1729522755136", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/venkat-vatshal-9129b1212/", instagram: "", twitter: "", website: "" } },
            { id: 72, name: "Rohan", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Hospitality/Rohan.jpg?updatedAt=1729522752992", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/rohan-kumar-105891259/", instagram: "", twitter: "", website: "" } },
            { id: 73, name: "Sri Ram", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Hospitality/sriram.jpg?updatedAt=1729522753985", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/v-sriram-reddy/", instagram: "", twitter: "", website: "" } },
            { id: 74, name: "Gokul Pilligundla", title: "Team Member", company: "VJIT", image: "https://media.licdn.com/dms/image/v2/D4E03AQHWV4e4ZnldVQ/profile-displayphoto-shrink_800_800/B4EZU35g0OGwAc-/0/1740399579484?e=1760572800&v=beta&t=3CeZ5vnyqRaluzQez9yW48ROV8Ieki4IXDclvGp44Sk", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/gokul-pilligundla/", instagram: "", twitter: "", website: "" } },
            { id: 75, name: "Varuni", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Hospitality/WhatsApp%20Image%202024-10-23%20at%2015.44.58_9e5b093c.jpg?updatedAt=1729678646852", bio: "", description: "", expertise: [], social: { linkedin: "", instagram: "", twitter: "", website: "" } },
            { id: 76, name: "Shreya", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Hospitality/Shreya.jpg?updatedAt=1729522753372", bio: "", description: "", expertise: [], social: { linkedin: "", instagram: "", twitter: "", website: "" } },
            { id: 77, name: "Sunayana", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Hospitality/DSC04775.JPG?updatedAt=1729680471135", bio: "", description: "", expertise: [], social: { linkedin: "", instagram: "", twitter: "", website: "" } },
            { id: 78, name: "Siri Setty", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Hospitality/siri.jpg?updatedAt=1729787530738", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/siri-setty-16464b290/", instagram: "", twitter: "", website: "" } },
        ],
        Productions: [
            { id: 80, name: "Prasad Posimisetti", title: "Team Lead", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Production/Prasad.jpg?updatedAt=1729522740490", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/durgaprasadposimsetti123/", instagram: "", twitter: "", website: "" } },
            { id: 81, name: "Dinesh", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Production/Dinesh.jpg?updatedAt=1729522737846", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/dinesh-nidugurthi-a14910279/", instagram: "", twitter: "", website: "" } },
            { id: 82, name: "Madhav", title: "Team Member", company: "VJIT", image: "/2024/team/productions/madav.jpg", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/sri-madhav-sykam/", instagram: "", twitter: "", website: "" } },
            { id: 83, name: "Charan", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Production/charan.jpg?updatedAt=1729522740386", bio: "", description: "", expertise: [], social: { linkedin: "", instagram: "", twitter: "", website: "" } },
            { id: 84, name: "Varuni", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Production/_DSC6801-2.jpg?updatedAt=1729677134711", bio: "", description: "", expertise: [], social: { linkedin: "", instagram: "", twitter: "", website: "" } },
            { id: 85, name: "Shraayan", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Production/sharyann.jpg?updatedAt=1729522746822", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/shraayan-palle-773ab5373/", instagram: "", twitter: "", website: "" } },
            { id: 86, name: "Hema Siri", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Production/Hema%20Siri.jpg?updatedAt=1729522738527", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/hema-siri-palepu-ba848a33b/", instagram: "", twitter: "", website: "" } },
            { id: 87, name: "Sujith", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Production/Sujith.jpg?updatedAt=1729522741753", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/sai-sujith-alugani-2175a3302/", instagram: "", twitter: "", website: "" } },
            { id: 88, name: "Anjali", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Production/1729237711359.jpg?updatedAt=1729676834046", bio: "", description: "", expertise: [], social: { linkedin: "", instagram: "", twitter: "", website: "" } },
            { id: 89, name: "Geeth", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Production/_DSC6811.jpg?updatedAt=1729677426105", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/geeth-naga-292597272/", instagram: "", twitter: "", website: "" } },
            { id: 90, name: "Guna", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Production/Guna.jpg?updatedAt=1729522737857", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/vn-sriguna-bhasuru-286624255/", instagram: "", twitter: "", website: "" } },
            { id: 91, name: "Safwan", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Production/Safwan.jpg?updatedAt=1729522740992", bio: "", description: "", expertise: [], social: { linkedin: "", instagram: "", twitter: "", website: "" } },
            { id: 92, name: "Hari Chandan", title: "Team Member", company: "VJIT", image: "https://ik.imagekit.io/tedxvjit/public/teams/Production/_DSC6829_1_.JPG?updatedAt=1729677690192", bio: "", description: "", expertise: [], social: { linkedin: "https://www.linkedin.com/in/hari-chandan-gajula/", instagram: "", twitter: "", website: "" } },
        ],
    }

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    }

    const buttonVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    }

    const heroVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    }

    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 my-auto">
            {/* Hero Section */}
            <motion.section
                className="relative min-h-screen flex flex-col justify-center py-20 px-4 overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={heroVariants}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-800/10" />
                <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
                <div className="relative max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                        Meet Our
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                            Team
                        </span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-red-400 mb-2">Power of Persistence - 2024</h2>
                </div>
            </motion.section>

            {/* Core Team Section */}
            <section ref={sectionRef} className="py-2 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center my-8">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white">Core Team</h2>
                        <hr className="mx-auto mt-2 w-24 lg:w-28 border-t-2 border-red-500" />
                    </div>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 place-items-center"
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        {teams.Core.map((member) => (
                            <motion.div
                                key={member.id}
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 10px 25px rgba(225,29,72,0.5)',
                                }}
                                className="flex justify-center"
                            >
                                <div className="w-[280px] md:w-[300px] lg:w-[320px] rounded-2xl overflow-hidden">
                                    <SpeakerCard speaker={member} />
                                </div>                               
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Organising Team Section */}
            <section className="py-10 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center my-8">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white">Organising Team</h2>
                        <hr className="mx-auto mt-2 w-36 lg:w-40 border-t-2 border-red-500" />
                    </div>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 place-items-center"
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        {teams.Organising.map((member) => (
                            <motion.div
                                key={member.id}
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 10px 25px rgba(225,29,72,0.5)',
                                }}
                                className="flex justify-center"
                            >
                                <div className="w-[280px] md:w-[300px] lg:w-[320px] rounded-2xl overflow-hidden">
                                    <SpeakerCard speaker={member} />
                                </div>
                                
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Other Teams Section */}
            <section className="py-10 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center my-8">
                        <h2 className="text-2xl lg:text-3xl font-bold text-white">Other Teams</h2>
                        <hr className="mx-auto mt-2 w-30 lg:w-36 border-t-2 border-red-500" />
                    </div>
                    {/* Team Tabs */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-5 mb-8"
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
                    >
                        {Object.keys(teams)
                            .filter((team) => team !== 'Core' && team !== 'Organising')
                            .map((team) => (
                                <motion.button
                                    key={team}
                                    onClick={() => setActiveTeam(team as TeamName)}
                                    variants={buttonVariants}
                                    whileHover={{ scale: 1.05 }}
                                    className={`relative px-5.5 py-2.5 text-sm md:text-base font-medium rounded-full overflow-hidden cursor-pointer transition-all duration-300 ${activeTeam === team
                                        ? 'bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white shadow-md'
                                        : 'bg-white/10 text-gray-300 border border-white/10 hover:bg-white/20 hover:text-white'
                                        }`}
                                >
                                    {team}
                                </motion.button>
                            ))}
                    </motion.div>

                    {/* Active Team Grid */}
                    <motion.div
                        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 place-items-center"
                        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        {teams[activeTeam].map((member) => (
                            <motion.div
                                key={member.id}
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 10px 25px rgba(225,29,72,0.5)',
                                }}
                                className="flex justify-center"
                            >
                                <div className="w-[280px] md:w-[300px] lg:w-[320px] rounded-2xl overflow-hidden">
                                    <SpeakerCard speaker={member} />
                                </div>                               
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}


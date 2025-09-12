'use client'

import { useState, useRef } from 'react'
import { motion, Variants, useInView } from 'framer-motion'
import SpeakerCard from '../../components/SpeakerCard'

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
            { id: 1, name: "Person 1", title: "Lead Organizer", company: "TEDxVJIT", image: "/assets/2.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 2, name: "Person 2", title: "Co-Organizer", company: "TEDxVJIT", image: "/assets/6.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 3, name: "Person 3", title: "Organizer", company: "TEDxVJIT", image: "/assets/2.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 4, name: "Person 4", title: "Organizer", company: "TEDxVJIT", image: "/assets/6.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 5, name: "Person 5", title: "Organizer", company: "TEDxVJIT", image: "/assets/2.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 6, name: "Person 6", title: "Organizer", company: "TEDxVJIT", image: "/assets/6.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 7, name: "Person 5", title: "Organizer", company: "TEDxVJIT", image: "/assets/2.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 8, name: "Person 6", title: "Organizer", company: "TEDxVJIT", image: "/assets/6.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
        ],
        Organising: [
            { id: 10, name: "Organiser 1", title: "Team Member", company: "Organising Team", image: "/assets/hero-banner.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 11, name: "Organiser 2", title: "Team Member", company: "Organising Team", image: "/assets/hero-banner.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 12, name: "Organiser 3", title: "Team Member", company: "Organising Team", image: "/assets/hero-banner.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
        ],
        "Web Dev": [
            { id: 20, name: "Dev 1", title: "Developer", company: "Web Dev Team", image: "/assets/2.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 21, name: "Dev 2", title: "Developer", company: "Web Dev Team", image: "/assets/2.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 22, name: "Dev 3", title: "Developer", company: "Web Dev Team", image: "/assets/2.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 23, name: "Dev 4", title: "Developer", company: "Web Dev Team", image: "/assets/2.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 24, name: "Dev 5", title: "Developer", company: "Web Dev Team", image: "/assets/2.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
        ],
        Marketing: [
            { id: 30, name: "Marketer 1", title: "Marketer", company: "Marketing Team", image: "/assets/6.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 31, name: "Marketer 2", title: "Marketer", company: "Marketing Team", image: "/assets/6.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 32, name: "Marketer 3", title: "Marketer", company: "Marketing Team", image: "/assets/6.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 33, name: "Marketer 4", title: "Marketer", company: "Marketing Team", image: "/assets/6.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 34, name: "Marketer 5", title: "Marketer", company: "Marketing Team", image: "/assets/6.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 35, name: "Marketer 6", title: "Marketer", company: "Marketing Team", image: "/assets/6.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
        ],
        Design: [
            { id: 40, name: "Designer 1", title: "Designer", company: "Design Team", image: "/assets/hero-banner.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 41, name: "Designer 2", title: "Designer", company: "Design Team", image: "/assets/hero-banner.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 42, name: "Designer 3", title: "Designer", company: "Design Team", image: "/assets/hero-banner.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 43, name: "Designer 4", title: "Designer", company: "Design Team", image: "/assets/hero-banner.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 44, name: "Designer 5", title: "Designer", company: "Design Team", image: "/assets/hero-banner.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 45, name: "Designer 6", title: "Designer", company: "Design Team", image: "/assets/hero-banner.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
        ],
        Sponsorship: [
            { id: 50, name: "Sponsor 1", title: "Coordinator", company: "Sponsorship Team", image: "/assets/2.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 51, name: "Sponsor 2", title: "Coordinator", company: "Sponsorship Team", image: "/assets/2.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 52, name: "Sponsor 3", title: "Coordinator", company: "Sponsorship Team", image: "/assets/2.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 53, name: "Sponsor 4", title: "Coordinator", company: "Sponsorship Team", image: "/assets/2.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 54, name: "Sponsor 5", title: "Coordinator", company: "Sponsorship Team", image: "/assets/2.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 55, name: "Sponsor 6", title: "Coordinator", company: "Sponsorship Team", image: "/assets/2.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
        ],
        Hospitality: [
            { id: 60, name: "Host 1", title: "Hospitality", company: "Hospitality Team", image: "/assets/6.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 61, name: "Host 2", title: "Hospitality", company: "Hospitality Team", image: "/assets/6.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 62, name: "Host 3", title: "Hospitality", company: "Hospitality Team", image: "/assets/6.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 63, name: "Host 4", title: "Hospitality", company: "Hospitality Team", image: "/assets/6.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 64, name: "Host 5", title: "Hospitality", company: "Hospitality Team", image: "/assets/6.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 65, name: "Host 6", title: "Hospitality", company: "Hospitality Team", image: "/assets/6.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
        ],
        "Content & Curation": [
            { id: 70, name: "Curator 1", title: "Content", company: "Content & Curation Team", image: "/assets/hero-banner.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 71, name: "Curator 2", title: "Content", company: "Content & Curation Team", image: "/assets/hero-banner.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 72, name: "Curator 3", title: "Content", company: "Content & Curation Team", image: "/assets/hero-banner.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 73, name: "Curator 4", title: "Content", company: "Content & Curation Team", image: "/assets/hero-banner.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 74, name: "Curator 5", title: "Content", company: "Content & Curation Team", image: "/assets/hero-banner.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 75, name: "Curator 6", title: "Content", company: "Content & Curation Team", image: "/assets/hero-banner.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
        ],
        Productions: [
            { id: 80, name: "Producer 1", title: "Production", company: "Productions Team", image: "/assets/2.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 81, name: "Producer 2", title: "Production", company: "Productions Team", image: "/assets/2.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 82, name: "Producer 3", title: "Production", company: "Productions Team", image: "/assets/2.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 83, name: "Producer 4", title: "Production", company: "Productions Team", image: "/assets/2.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 84, name: "Producer 5", title: "Production", company: "Productions Team", image: "/assets/2.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
            { id: 85, name: "Producer 6", title: "Production", company: "Productions Team", image: "/assets/2.png", bio: "", description: "", expertise: [], social: { linkedin: "#", instagram: "#", twitter: "#", website: "#" } },
        ],
    }

    // Variants
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
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Meet Our
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                            Team
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                        The passionate individuals working behind the scenes to bring TEDxVJIT to life.
                    </p>
                </div>
            </motion.section>

            {/* Core Team Section */}
            <section ref={sectionRef} className="py-2 px-4">
                <div className="max-w-5xl mx-auto">
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
                                className="w-full max-w-xs rounded-2xl overflow-hidden"
                            >
                                <SpeakerCard speaker={member} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Organising Team Section */}
            <section className="py-10 px-4">
                <div className="max-w-5xl mx-auto">
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
                                className="w-full max-w-xs rounded-2xl overflow-hidden"
                            >
                                <SpeakerCard speaker={member} />
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
                                className="w-full max-w-xs rounded-2xl overflow-hidden"
                            >
                                <SpeakerCard speaker={member} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}


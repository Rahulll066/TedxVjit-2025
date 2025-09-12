import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaGlobe } from 'react-icons/fa';

interface Speaker {
    id: number;
    name: string;
    title: string;
    company: string;
    description: string;
    expertise: string[];
    social: {
        linkedin?: string;
        twitter?: string;
        website?: string;
        instagram?: string;
    };
    youtube?: string;
}

interface SpeakerRectangleProps {
    speaker: Speaker;
}

const SpeakerRectangle: React.FC<SpeakerRectangleProps> = ({ speaker }) => {
    return (
        <div className="flex flex-col md:flex-row bg-black/60 rounded-2xl shadow-lg border border-white/10 overflow-hidden">
            {/* Left: YouTube Embed */}
            <div className="md:w-1/2 w-full aspect-video bg-black flex items-center justify-center">
                {speaker.youtube ? (
                    <iframe
                        width="100%"
                        height="100%"
                        src={speaker.youtube}
                        title={speaker.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-60 md:h-full"
                    ></iframe>
                ) : (
                    <div className="w-full h-60 md:h-full flex items-center justify-center text-gray-500">
                        No Video Available
                    </div>
                )}
            </div>
            {/* Right: Speaker Info */}
            <div className="md:w-1/2 w-full p-6 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{speaker.name}</h3>
                <div className="text-lg text-red-400 font-semibold mb-1">{speaker.company}</div>
                <div className="text-base text-gray-300 mb-4">{speaker.title}</div>
                <p className="text-white text-base mb-4">{speaker.description}</p>
                {/* Social Links */}
                <div className="flex gap-4 mt-2">
                    {speaker.social.linkedin && speaker.social.linkedin !== '#' && (
                        <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin className="w-6 h-6 text-blue-400 hover:text-blue-500" />
                        </a>
                    )}
                    {speaker.social.twitter && speaker.social.twitter !== '#' && (
                        <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter className="w-6 h-6 text-sky-400 hover:text-sky-500" />
                        </a>
                    )}
                    {speaker.social.instagram && speaker.social.instagram !== '#' && (
                        <a href={speaker.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram className="w-6 h-6 text-pink-400 hover:text-pink-500" />
                        </a>
                    )}
                    {speaker.social.website && speaker.social.website !== '#' && (
                        <a href={speaker.social.website} target="_blank" rel="noopener noreferrer" aria-label="Website">
                            <FaGlobe className="w-6 h-6 text-green-400 hover:text-green-500" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SpeakerRectangle;

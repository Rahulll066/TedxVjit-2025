"use client";

const sponsors = [
  { id: 1, logo: "/assets/2.png" },
  { id: 2, logo: "/assets/6.png" },
  { id: 3, logo: "/assets/2.png" },
  { id: 4, logo: "/assets/6.png" },
  { id: 5, logo: "/assets/2.png" },
  { id: 6, logo: "/assets/6.png" },
];

export default function SponsorsPreview() {
  return (
    <section className="w-full mx-auto px-8 py-12 bg-black overflow-hidden">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-white">
        Sponsors
      </h2>

      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee space-x-10">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="border-2 border-red-600 rounded-xl flex items-center justify-center p-4 bg-black min-w-[260px] h-40 sm:h-48 md:h-52"
            >
              <img
                src={sponsor.logo}
                alt={`Sponsor ${sponsor.id}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}

          {sponsors.map((sponsor) => (
            <div
              key={`dup-${sponsor.id}`}
              className="border-2 border-red-600 rounded-xl flex items-center justify-center p-4 bg-black min-w-[260px] h-40 sm:h-48 md:h-52"
            >
              <img
                src={sponsor.logo}
                alt={`Sponsor ${sponsor.id}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}








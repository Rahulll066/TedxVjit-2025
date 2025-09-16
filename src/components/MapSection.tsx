// Map Section
function MapSection() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center py-24"
      style={{
        background: "radial-gradient(circle at 50% 40%, #421e1eff 0%, #ff1b3c 100%)"
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center drop-shadow-lg tracking-tight">Venue Location</h2>
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-red-600">
        <iframe
          src="https://www.google.com/maps?q=Vidya+Jyothi+Institute+of+Technology&hl=en&z=16&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Vidya Jyothi Institute of Technology Location"
        ></iframe>
      </div>
    </section>
  );
}

export default MapSection;

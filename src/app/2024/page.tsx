
export default function Page2024() {
	return (
		<section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black to-zinc-900 px-4 py-16">
			<h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8 text-center">Theme – <span className="text-red-500">Power of Persistence</span></h1>
			<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
				<button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3 rounded-[10px] text-base md:text-lg transition-colors duration-200 shadow-md">Speakers</button>
				<button className="bg-black hover:bg-zinc-900 text-white font-semibold px-7 py-3 rounded-[10px] text-base md:text-lg transition-colors duration-200 shadow-md border border-zinc-700">Team</button>
				<button className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-7 py-3 rounded-[10px] text-base md:text-lg transition-colors duration-200 shadow-md">Gallery</button>
			</div>
		</section>
	);
}

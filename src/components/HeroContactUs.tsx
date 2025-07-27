const HeroContactUs = () => {
	return (
		<div className="relative h-80 bg-gradient-to-r from-gray-800/80 to-gray-600/80 flex items-center">
			{/* Background Image */}
			<div className="absolute inset-0 bg-[url('/Rectangle%20101.png')] bg-cover bg-center bg-no-repeat" />
			<div className="absolute inset-0 bg-black/40" />

			{/* Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white pb-10">
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
					Need An Assistance ?
				</h1>
			</div>
		</div>
	);
};

export default HeroContactUs;

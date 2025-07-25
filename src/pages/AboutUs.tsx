import Navbar from '@/components/Navbar';
import HeroAboutUs from '@/components/HeroAboutUs';
import Footer from '@/components/Footer';

const AboutUs = () => {
	return (
		<div>
			<Navbar />
			<HeroAboutUs />
			<div className="px-24 py-24">
				{/* WHO WE ARE */}
				<div className="flex gap-11 items-center justify-center">
					<div className="space-y-7 w-[615px]">
						<h1 className="font-bold leading-5 text-4xl text-secondary">
							WHO WE ARE
						</h1>
						<p className="font-normal text-xl leading-8">
							The Housing Management Web Application is a comprehensive platform
							designed to simplify housing management for tenants, landlords,
							property managers, and administrators. We leverage smart
							technology to enhance efficiency and communication across all
							parties.
						</p>
					</div>
					<div>
						<img
							src="/public/houseaboutus1.png"
							alt="house"
							className="h-full w-full"
						/>
					</div>
				</div>
				{/* Agent Support */}
				<div className="flex gap-52 items-center justify-center py-32">
					<img
						src="/public/Frame 1.png"
						alt="Agent Support"
						className="h-60 w-60"
					/>
					<img
						src="/public/Frame 2.png"
						alt="Agent Support"
						className="h-60 w-60"
					/>{' '}
					<img
						src="/public/Frame 3.png"
						alt="Agent Support"
						className="h-60 w-60"
					/>
				</div>
				{/* OUR PHILOSOPHY */}
				<div className="flex gap-11 items-center justify-center">
					<div>
						<img
							src="/public/slidecardAboutUs.png"
							alt="house"
							className="h-full w-full"
						/>
					</div>
					<div className="space-y-7 w-[602px]">
						<h1 className="font-bold leading-5 text-4xl text-secondary">
							OUR PHILOSOPHY
						</h1>
						<p className="font-normal text-xl leading-8">
							We aim to bridge the gap between housing stakeholders with
							user-friendly dashboards and robust features, ensuring a smooth
							experience from property browsing to lease agreements.
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default AboutUs;

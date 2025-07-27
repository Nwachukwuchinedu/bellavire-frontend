import Navbar from '@/components/Navbar';
import HeroContactUs from '@/components/HeroContactUs';
import Footer from '@/components/Footer';
import { Mail, Phone } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
	fullName: string;
	email: string;
	phone: string;
	message: string;
	countryCode: string;
};

const ContactUs = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = (data) => {
		console.log(data);
		reset();
		alert('Your message has been sent successfully!');
	};
	return (
		<div>
			<Navbar />
			<HeroContactUs />
			<div className="py-14 px-6 md:px-12 lg:px-24 space-y-14">
				<div className="space-y-5">
					<h1 className="font-medium text-3xl">CONTACT US</h1>
					<p className="font-semibold text-2xl text-secondary">
						Need Assistance ? Reach Out To Us
					</p>
				</div>
				<div className="flex flex-col lg:flex-row lg:space-x-16 space-y-10 lg:space-y-0 justify-between px-4 py-10">
					<div className="bg-secondary text-white lg:h-[654px] w-full lg:w-1/2 space-y-10 flex flex-col items-center justify-center rounded-3xl p-6">
						<h1 className="font-semibold text-4xl text-center">
							Confirmation Information
						</h1>

						<div className="flex items-center space-x-4">
							<Phone className="w-9 h-9" />
							<span className="font-normal text-2xl lg:text-3xl">
								(+44) 9021353948
							</span>
						</div>

						<div className="flex items-center space-x-4">
							<Mail className="w-9 h-9" />
							<span className="font-normal text-2xl lg:text-3xl">
								bellevivre@gmail.com
							</span>
						</div>
					</div>

					{/* Contact Form */}
					<div className="w-full lg:w-1/2 space-y-10 flex flex-col items-center justify-center">
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="space-y-5 w-full max-w-[535px]"
						>
							{/* Full Name */}
							<div>
								<label htmlFor="fullName" className="font-normal text-lg">
									Full Name
								</label>
								<input
									id="fullName"
									{...register('fullName', {
										required: 'Full name is required',
									})}
									className="w-full border-black border-2 rounded-md h-16 p-2"
									aria-invalid={!!errors.fullName}
								/>
								{errors.fullName && (
									<p className="text-red-500">{errors.fullName.message}</p>
								)}
							</div>

							{/* Email */}
							<div>
								<label htmlFor="email" className="font-normal text-lg">
									Email
								</label>
								<input
									id="email"
									type="email"
									{...register('email', {
										required: 'Email is required',
										pattern: {
											value: /^\S+@\S+$/i,
											message: 'Enter a valid email',
										},
									})}
									className="w-full p-2 border-black border-2 rounded-md h-16"
									aria-invalid={!!errors.email}
								/>
								{errors.email && (
									<p className="text-red-500">{errors.email.message}</p>
								)}
							</div>

							{/* Phone Number */}
							<div>
								<label htmlFor="phone" className="font-normal text-lg">
									Phone Number
								</label>
								<div className="flex space-x-2">
									{/* Country Code Dropdown */}
									<select
										id="countryCode"
										{...register('countryCode', { required: true })}
										className="border-black border-2 rounded-md h-16 p-2 w-32"
									>
										<option value="+234">🇳🇬 +234</option>
										<option value="+233">🇬🇭 +233</option>
										<option value="+44">🇬🇧 +44</option>
										<option value="+1">🇺🇸 +1</option>
										<option value="+27">🇿🇦 +27</option>
									</select>

									{/* Phone Input */}
									<input
										id="phone"
										type="tel"
										{...register('phone', {
											required: 'Phone number is required',
											minLength: { value: 7, message: 'Too short' },
										})}
										className="w-full border-black border-2 rounded-md h-16 p-2"
										aria-invalid={!!errors.phone}
									/>
								</div>

								{/* Error messages */}
								{(errors.countryCode || errors.phone) && (
									<p className="text-red-500 mt-1">
										{errors.countryCode?.message || errors.phone?.message}
									</p>
								)}
							</div>

							{/* Message */}
							<div>
								<label htmlFor="message" className="font-normal text-lg">
									Message
								</label>
								<textarea
									id="message"
									{...register('message', { required: 'Message is required' })}
									className="w-full h-44 border-black border-2 rounded-md p-2"
									aria-invalid={!!errors.message}
								></textarea>
								{errors.message && (
									<p className="text-red-500">{errors.message.message}</p>
								)}
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								className="bg-secondary text-white text-lg font-medium rounded w-full h-20"
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default ContactUs;

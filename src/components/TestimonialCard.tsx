import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  comment: string;
  className?: string;
}

const testimonials = [
  {
    name: "Loggan Sanders",
    comment: "I listed my flat and had it rented within 48 hours – all online",
  },
  {
    name: "Joy Anderson",
    comment: "I listed my flat and had it rented within 48 hours – all online",
  },
  {
    name: "Sandra Emeka",
    comment: "I listed my flat and had it rented within 48 hours – all online",
  },
];

const TestimonialCard = ({
  name,
  comment,
  className,
}: TestimonialCardProps) => {
  return (
    <Card
      className={`bg-white p-6 rounded-lg border border-gray-200 shadow-lg ${className}`}
    >
      <CardContent className="p-0">
        <div className="space-y-4">
          <p className="text-secondary text-base leading-relaxed">{comment}</p>
          <div className="flex flex-col">
            <span className="font-semibold text-black">{name}</span>
            <div className="flex space-x-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialSection = () => {
  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto px-6 bg-blue-600 text-white p-5 mb-4">
        <h2 className="text-4xl font-bold text-center">Testimonial</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
        <div className="text-gray-900 flex flex-col justify-center items-start lg:items-center">
          <div className="max-w-md">
            <h3 className="text-2xl font-bold mb-4">
              What Our Customers are saying
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Hear from tenants, landlords, and agents who've made renting,
              listing, and managing property easier with our platform.
            </p>
          </div>
        </div>
        <div className="space-y-6 relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative ${index === 1 ? "lg:-translate-x-6" : ""}`}
            >
              <TestimonialCard
                {...testimonial}
                className={
                  index % 2 === 0 ? "shadow-blue-100" : "shadow-gray-200"
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

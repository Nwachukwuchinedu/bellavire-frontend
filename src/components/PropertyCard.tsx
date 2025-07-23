import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square } from "lucide-react";

interface PropertyCardProps {
  image: string;
  title: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
}

const PropertyCard = ({
  image,
  title,
  address,
  price,
  beds,
  baths,
  sqft,
}: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <Badge className="absolute top-3 right-4 bg-primary text-white">
          {price}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <div className="flex items-center text-secondary mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{address}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-secondary mb-3">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{beds}</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{baths}</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{sqft} sq ft</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, Wifi, Car, Coffee } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PropertyCardProps {
  image: string;
  title: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  id: string;
}

const PropertyCard = ({
  image,
  title,
  address,
  price,
  beds,
  baths,
  sqft,
  type,
  id,
}: PropertyCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/property/${id}`); // Fixed: using destructured 'id' prop
  };

  return (
    <Card
      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={handleClick}
      aria-label={`View details for ${title}`} // Added for accessibility
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy" // Added for performance
        />
        <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
          {price}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-primary">{title}</h3>
        <div className="flex items-center text-secondary mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{address}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-secondary mb-3">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>
              {beds} {beds === 1 ? "bed" : "beds"}
            </span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>
              {baths} {baths === 1 ? "bath" : "baths"}
            </span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{sqft.toLocaleString()} sq ft</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-secondary">
          <div className="flex items-center gap-1">
            <Wifi className="h-4 w-4" />
            <span className="text-xs">Wifi</span>
          </div>
          <div className="flex items-center gap-1">
            <Car className="h-4 w-4" />
            <span className="text-xs">Parking</span>
          </div>
          <div className="flex items-center gap-1">
            <Coffee className="h-4 w-4" />
            <span className="text-xs">Kitchen</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;

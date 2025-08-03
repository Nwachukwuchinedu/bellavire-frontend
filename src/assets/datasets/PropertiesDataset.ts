import { PropertyType, PropertyStatus } from "@/stores/propertyStore";

export interface Property {
  id: string;
  title: string;
  address: string;
  rent: number;
  type: PropertyType;
  status: PropertyStatus;
  landlordId: string;
  tenantId?: string;
  agentId?: string;
  images: string[];
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  amenities: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface PropertyState {
  properties: Property[];
  selectedProperty: Property | null;
  isLoading: boolean;
  error: string | null;
  fetchProperties: () => Promise<void>;
  fetchPropertyById: (id: string) => Promise<Property | undefined>;
  addProperty: (
    property: Omit<Property, "id" | "createdAt" | "updatedAt">
  ) => Promise<string>;
  updateProperty: (
    id: string,
    updates: Partial<Omit<Property, "id">>
  ) => Promise<void>;
  deleteProperty: (id: string) => Promise<void>;
  setSelectedProperty: (id: string | null) => Promise<void>;
  clearError: () => void;
}

// Sample property data
export const sampleProperties: Property[] = [
  {
    id: "1",
    title: "Vivian's Luxury Apartment",
    address: "Flat 12, Park View Road, Camden, London NW1 7HE",
    rent: 1200,
    type: "apartment",
    status: "available",
    landlordId: "landlord1",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=500&q=80"
    ],
    description: "A luxurious apartment with modern amenities and stunning city views. Perfect for professionals seeking comfort and style.",
    bedrooms: 4,
    bathrooms: 2,
    area: 1200,
    amenities: ["Wifi", "Parking", "Kitchen", "Gym", "Pool"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    title: "Greenwich Court",
    address: "Unit 5, Greenwich Court, Woolwich, London SE18 6XD",
    rent: 800,
    type: "apartment",
    status: "available",
    landlordId: "landlord2",
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Modern apartment in a prime location with excellent transport links and local amenities.",
    bedrooms: 3,
    bathrooms: 2,
    area: 1000,
    amenities: ["Wifi", "Parking", "Kitchen", "Balcony"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    title: "Precious Apartments",
    address: "20 Church Street, Ancoats, Manchester M4 1PN",
    rent: 900,
    type: "apartment",
    status: "available",
    landlordId: "landlord3",
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Stylish apartment in the heart of Manchester with contemporary design and high-end finishes.",
    bedrooms: 3,
    bathrooms: 2,
    area: 950,
    amenities: ["Wifi", "Parking", "Kitchen", "Garden"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    title: "Montana Homes",
    address: "82 Rose Lane, Mossley Hill, Liverpool L18 5ED",
    rent: 700,
    type: "house",
    status: "available",
    landlordId: "landlord4",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Charming house in a quiet residential area with garden and parking space.",
    bedrooms: 2,
    bathrooms: 1,
    area: 800,
    amenities: ["Wifi", "Parking", "Kitchen", "Garden"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    title: "Ese's Palace",
    address: "Flat 7, Clarendon Road, Leeds LS2 9DA",
    rent: 850,
    type: "apartment",
    status: "available",
    landlordId: "landlord5",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Luxurious apartment with premium amenities and stunning city skyline views.",
    bedrooms: 3,
    bathrooms: 2,
    area: 950,
    amenities: ["Wifi", "Parking", "Kitchen", "Gym", "Pool"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    title: "Cynthia's Apartments",
    address: "14 Deansgate, City Centre, Manchester M3 1FB",
    rent: 950,
    type: "apartment",
    status: "available",
    landlordId: "landlord6",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Premium apartment in the city center with modern design and excellent amenities.",
    bedrooms: 3,
    bathrooms: 2,
    area: 1100,
    amenities: ["Wifi", "Parking", "Kitchen", "Gym", "Concierge"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "7",
    title: "The Manchester Grand",
    address: "50 Deansgate, Manchester M3 2FE",
    rent: 1100,
    type: "apartment",
    status: "available",
    landlordId: "landlord7",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1566908829483-b83ede509096?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Luxury apartment with panoramic views and world-class amenities.",
    bedrooms: 4,
    bathrooms: 3,
    area: 1300,
    amenities: ["Wifi", "Parking", "Kitchen", "Gym", "Pool", "Spa"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "8",
    title: "City Lights Apartments",
    address: "8 Oxford Road, Manchester M1 5QA",
    rent: 750,
    type: "apartment",
    status: "available",
    landlordId: "landlord8",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1566908829483-b83ede509096?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Modern apartment with city views and convenient location near universities.",
    bedrooms: 2,
    bathrooms: 1,
    area: 850,
    amenities: ["Wifi", "Parking", "Kitchen", "Study Room"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "9",
    title: "The Victoria",
    address: "24 Victoria Station Approach, Manchester M3 1WQ",
    rent: 1050,
    type: "apartment",
    status: "available",
    landlordId: "landlord9",
    images: [
      "https://images.unsplash.com/photo-1566908829483-b83ede509096?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Elegant apartment with classic architecture and modern comforts.",
    bedrooms: 3,
    bathrooms: 2,
    area: 1150,
    amenities: ["Wifi", "Parking", "Kitchen", "Garden"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "10",
    title: "Studio 54",
    address: "54 Chapel Street, Manchester M3 5BZ",
    rent: 650,
    type: "studio",
    status: "available",
    landlordId: "landlord10",
    images: [
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Compact studio apartment perfect for students or young professionals.",
    bedrooms: 1,
    bathrooms: 1,
    area: 600,
    amenities: ["Wifi", "Kitchen", "Study Area"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "11",
    title: "The Penthouse Collection",
    address: "1 Spinningfields, Manchester M3 3EB",
    rent: 1300,
    type: "apartment",
    status: "available",
    landlordId: "landlord11",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Exclusive penthouse with panoramic views and luxury amenities.",
    bedrooms: 4,
    bathrooms: 3,
    area: 1400,
    amenities: ["Wifi", "Parking", "Kitchen", "Gym", "Pool", "Terrace"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "12",
    title: "Northern Quarter Living",
    address: "36 Thomas Street, Manchester M4 1ER",
    rent: 950,
    type: "apartment",
    status: "available",
    landlordId: "landlord12",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Trendy apartment in the vibrant Northern Quarter with artistic flair.",
    bedrooms: 3,
    bathrooms: 2,
    area: 1000,
    amenities: ["Wifi", "Parking", "Kitchen", "Balcony"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "13",
    title: "The Charter",
    address: "Charter Street, Manchester M1 6HF",
    rent: 800,
    type: "apartment",
    status: "available",
    landlordId: "landlord13",
    images: [
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Modern apartment with excellent transport links and local amenities.",
    bedrooms: 2,
    bathrooms: 2,
    area: 900,
    amenities: ["Wifi", "Parking", "Kitchen", "Garden"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "14",
    title: "Castlefield Wharf",
    address: "12 Liverpool Road, Manchester M3 4JQ",
    rent: 1150,
    type: "apartment",
    status: "available",
    landlordId: "landlord14",
    images: [
      "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Waterfront apartment with stunning canal views and modern design.",
    bedrooms: 3,
    bathrooms: 2,
    area: 1200,
    amenities: ["Wifi", "Parking", "Kitchen", "Balcony", "Gym"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "15",
    title: "The Salford Quays Apartments",
    address: "7 Media City Way, Salford M50 2EQ",
    rent: 700,
    type: "apartment",
    status: "available",
    landlordId: "landlord15",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1566908829483-b83ede509096?auto=format&fit=crop&w=500&q=80"
    ],
    description: "Modern apartment in MediaCity with excellent amenities and transport links.",
    bedrooms: 2,
    bathrooms: 1,
    area: 750,
    amenities: ["Wifi", "Parking", "Kitchen", "Gym"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
import { create } from 'zustand';

interface Property {
  id: string;
  title: string;
  address: string;
  rent: number;
  type: 'apartment' | 'house' | 'condo' | 'studio';
  status: 'available' | 'occupied' | 'maintenance';
  landlordId: string;
  tenantId?: string;
  agentId?: string;
  images: string[];
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  createdAt: Date;
  updatedAt: Date;
}

interface PropertyState {
  properties: Property[];
  selectedProperty: Property | null;
  isLoading: boolean;
  addProperty: (property: Omit<Property, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateProperty: (id: string, updates: Partial<Property>) => void;
  deleteProperty: (id: string) => void;
  setSelectedProperty: (property: Property | null) => void;
  setProperties: (properties: Property[]) => void;
  setLoading: (loading: boolean) => void;
}

export const usePropertyStore = create<PropertyState>((set, get) => ({
  properties: [],
  selectedProperty: null,
  isLoading: false,
  addProperty: (propertyData) => {
    const newProperty: Property = {
      ...propertyData,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    set((state) => ({
      properties: [...state.properties, newProperty],
    }));
  },
  updateProperty: (id, updates) => {
    set((state) => ({
      properties: state.properties.map((property) =>
        property.id === id
          ? { ...property, ...updates, updatedAt: new Date() }
          : property
      ),
    }));
  },
  deleteProperty: (id) => {
    set((state) => ({
      properties: state.properties.filter((property) => property.id !== id),
    }));
  },
  setSelectedProperty: (property) => set({ selectedProperty: property }),
  setProperties: (properties) => set({ properties }),
  setLoading: (isLoading) => set({ isLoading }),
}));
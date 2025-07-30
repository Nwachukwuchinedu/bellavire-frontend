import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

type PropertyType = "apartment" | "house" | "condo" | "studio";
type PropertyStatus = "available" | "occupied" | "maintenance";

interface Property {
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

interface PropertyState {
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

export const usePropertyStore = create<PropertyState>()(
  persist(
    (set, get) => ({
      properties: [],
      selectedProperty: null,
      isLoading: false,
      error: null,

      fetchProperties: async () => {
        try {
          set({ isLoading: true, error: null });
          // Simulate API call - replace with actual fetch
          const response = await new Promise<Property[]>((resolve) => {
            setTimeout(() => {
              resolve([]); // Replace with actual API data
            }, 1000);
          });
          set({ properties: response });
        } catch (err) {
          set({ error: "Failed to fetch properties" });
          console.error("Fetch properties error:", err);
        } finally {
          set({ isLoading: false });
        }
      },

      fetchPropertyById: async (id) => {
        try {
          set({ isLoading: true, error: null });
          // Simulate API call - replace with actual fetch
          await new Promise((resolve) => setTimeout(resolve, 500));
          const property = get().properties.find((p) => p.id === id);
          if (!property) {
            set({ error: "Property not found" });
            return undefined;
          }
          return property;
        } catch (err) {
          set({ error: "Failed to fetch property" });
          console.error("Fetch property error:", err);
          return undefined;
        } finally {
          set({ isLoading: false });
        }
      },

      addProperty: async (propertyData) => {
        try {
          set({ isLoading: true, error: null });
          const newProperty: Property = {
            ...propertyData,
            id: uuidv4(),
            createdAt: new Date(),
            updatedAt: new Date(),
          };

          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 500));

          set((state) => ({
            properties: [...state.properties, newProperty],
          }));
          return newProperty.id;
        } catch (err) {
          set({ error: "Failed to add property" });
          console.error("Add property error:", err);
          throw err;
        } finally {
          set({ isLoading: false });
        }
      },

      updateProperty: async (id, updates) => {
        try {
          set({ isLoading: true, error: null });
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 500));

          set((state) => ({
            properties: state.properties.map((property) =>
              property.id === id
                ? {
                    ...property,
                    ...updates,
                    updatedAt: new Date(),
                    // Ensure type safety for optional fields
                    tenantId:
                      updates.tenantId !== undefined
                        ? updates.tenantId
                        : property.tenantId,
                    agentId:
                      updates.agentId !== undefined
                        ? updates.agentId
                        : property.agentId,
                  }
                : property
            ),
          }));
        } catch (err) {
          set({ error: "Failed to update property" });
          console.error("Update property error:", err);
          throw err;
        } finally {
          set({ isLoading: false });
        }
      },

      deleteProperty: async (id) => {
        try {
          set({ isLoading: true, error: null });
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 500));

          set((state) => ({
            properties: state.properties.filter(
              (property) => property.id !== id
            ),
            selectedProperty:
              state.selectedProperty?.id === id ? null : state.selectedProperty,
          }));
        } catch (err) {
          set({ error: "Failed to delete property" });
          console.error("Delete property error:", err);
          throw err;
        } finally {
          set({ isLoading: false });
        }
      },

      setSelectedProperty: async (id) => {
        if (!id) {
          set({ selectedProperty: null });
          return;
        }
        try {
          set({ isLoading: true, error: null });
          const property = await get().fetchPropertyById(id);
          set({ selectedProperty: property || null });
        } catch (err) {
          set({ error: "Failed to select property" });
          console.error("Select property error:", err);
        } finally {
          set({ isLoading: false });
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: "property-storage",
      partialize: (state) => ({
        properties: state.properties,
        selectedProperty: state.selectedProperty,
      }),
    }
  )
);

// Utility types for external usage
export type { Property, PropertyType, PropertyStatus };

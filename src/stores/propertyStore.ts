import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { Property, PropertyState, sampleProperties } from "@/assets/datasets/PropertiesDataset";

export type PropertyType = "apartment" | "house" | "condo" | "studio";
export type PropertyStatus = "available" | "occupied" | "maintenance";





export const usePropertyStore = create<PropertyState>()(
  persist(
    (set, get) => ({
      properties: sampleProperties, // Initialize with sample data
      selectedProperty: null,
      isLoading: false,
      error: null,

      fetchProperties: async () => {
        try {
          set({ isLoading: true, error: null });
          // Return the sample properties instead of empty array
          set({ properties: sampleProperties });
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
// export type { Property, PropertyType, PropertyStatus };

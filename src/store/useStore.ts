import { PropertyStore } from "@/models";
import { create } from "zustand";

const useStore = create<PropertyStore>((set) => ({
  propertiesList: [],

  updatePropertiesList: (propertiesList) => set((state) => ({ ...state, propertiesList })),

}));

export default useStore;

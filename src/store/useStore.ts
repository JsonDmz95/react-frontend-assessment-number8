import { PropertyStore } from "@/models";
import { create } from "zustand";

const useStore = create<PropertyStore>((set) => ({
  propertiesList: [],
  favoritesList: [],

  updatePropertiesList: (propertiesList) =>
    set((state) => ({ ...state, propertiesList })),

  updateFavoritesList: (property) =>
    set((state) => ({ favoritesList: [...state.favoritesList, property] })),

  removeFavorite: (property) =>
    set((state) => ({
      favoritesList: state.favoritesList.filter(
        (item) => item.Id !== property.Id
      ),
    })),
}));

export default useStore;

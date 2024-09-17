import { Property } from ".";

export interface PropertyStore {
    propertiesList: Property[];
    favoritesList: Property[];
    updatePropertiesList: (propertiesList: Property[]) => void;
    updateFavoritesList: (property: Property) => void;
    removeFavorite: (property: Property) => void;
}
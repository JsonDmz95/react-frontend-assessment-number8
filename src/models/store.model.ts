import { Property } from ".";

export interface PropertyStore {
    propertiesList: Property[];
    updatePropertiesList: (propertiesList: Property[]) => void;
}
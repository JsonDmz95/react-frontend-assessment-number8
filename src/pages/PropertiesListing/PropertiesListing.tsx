"use client";

// import { PropertyCard } from "./components";
import React, { Suspense, lazy, useCallback, useEffect, useState } from "react";

import { Button } from "@/components";
import { Property } from "@/models";
import { SelectFilter } from "./components";
import styles from "./PropertiesListing.module.scss";
import { useStore } from "@/store";

const PropertyCard = lazy(
  () => import("./components/PropertyCard/PropertyCard")
);

export type PropertiesListingProps = {
  error: Error | null;
};

const PropertiesListing: React.FC<PropertiesListingProps> = ({ error }) => {
  const data = useStore((state) => state.propertiesList);

  const [propertiesList, setPropertiesList] = useState<Property[]>([]);

  /* States for filters */
  const [bedrooms, setBedrooms] = useState<number>(0);
  const [bathrooms, setBathrooms] = useState<number>(0);
  const [parking, setParking] = useState<number>(0);
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  useEffect(() => {
    setPropertiesList(data);
  }, [data]);

  const handleSearch = useCallback(() => {
    const filteredList = data.filter((property: Property) => {
      const matchesBedrooms = bedrooms
        ? property.Bedrooms >= Number(bedrooms)
        : true;
      const matchesBathrooms = bathrooms
        ? property.Bathrooms >= Number(bathrooms)
        : true;
      const matchesParking = parking
        ? property.Parking >= Number(parking)
        : true;
      const matchesMinPrice = minPrice
        ? property["Sale Price"] >= Number(minPrice)
        : true;
      const matchesMaxPrice = maxPrice
        ? property["Sale Price"] <= Number(maxPrice)
        : true;

      return (
        matchesBedrooms &&
        matchesBathrooms &&
        matchesParking &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });

    setPropertiesList(filteredList);
  }, [bedrooms, bathrooms, parking, minPrice, maxPrice, data]);

  const handleClear = useCallback(() => {
    setBedrooms(0);
    setBathrooms(0);
    setParking(0);
    setMinPrice("");
    setMaxPrice("");
    setPropertiesList(data); // Reset to the original list
  }, [data]);

  // Determine max values for filters
  const maxBedrooms = Math.max(...data.map((property) => property.Bedrooms), 0);
  const maxBathrooms = Math.max(
    ...data.map((property) => property.Bathrooms),
    0
  );
  const maxParking = Math.max(...data.map((property) => property.Parking), 0);

  if (error) {
    console.error(error);
  }

  return (
    <section className="page_section">
      <div className="container">
        <h1 className="title_section">Find Your Home</h1>

        <div className={styles.filters}>
          <div className={styles.selects_container}>
            <SelectFilter
              name="bedrooms"
              value={bedrooms}
              max={maxBedrooms}
              onChange={(e) => setBedrooms(parseInt(e.target.value))}
            />
            <SelectFilter
              name="bathrooms"
              value={bathrooms}
              max={maxBathrooms}
              onChange={(e) => setBathrooms(parseInt(e.target.value))}
            />
            <SelectFilter
              name="parking"
              value={parking}
              max={maxParking}
              onChange={(e) => setParking(parseInt(e.target.value))}
            />
          </div>
          <div className={styles.price_filter}>
            <input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(parseInt(e.target.value))}
            />
            <div className={styles.divider}>-</div>
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            />
          </div>
          <div className={styles.buttons_container}>
            <Button title="Clear" onClick={handleClear} variant="secondary">Clear</Button>
            <Button title="Search" onClick={handleSearch}>
              Search
            </Button>
          </div>
        </div>
        <p className={styles.result_counter}>
          {propertiesList.length} total results
        </p>

        <div className={styles.cards_container}>
          <Suspense fallback={<>Loading...</>}>
            {propertiesList && (
              <>
                {propertiesList.map((property) => (
                  <PropertyCard
                    id={property.Id}
                    picture={property.PictureURL}
                    location={property.Location}
                    title={property.Title}
                    bedrooms={property.Bedrooms}
                    bathrooms={property.Bathrooms}
                    price={property["Sale Price"]}
                    key={property.Id}
                  />
                ))}
              </>
            )}
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default PropertiesListing;

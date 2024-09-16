"use client";

// import { PropertyCard } from "./components";
import React, { Suspense, lazy } from "react";

import styles from "./PropertiesListing.module.scss";
import { useStore } from "@/store";

const PropertyCard = lazy(
  () => import("./components/PropertyCard/PropertyCard")
);

export type PropertiesListingProps = {
  error: Error | null;
};

const PropertiesListing: React.FC<PropertiesListingProps> = ({
  error,
}) => {
  const data = useStore((state) => state.propertiesList);

  if (error) {
    console.error(error);
  }

  return (
    <section className="page_section">
      <div className="container">
        <h1 className="title_section">Find Your Home</h1>

        <div className={styles.cards_container}>
          <Suspense fallback={<>Loading...</>}>
            {data && (
              <>
                {data.map((property) => (
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

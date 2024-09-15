"use client";

import React from "react";
import styles from "./PropertiesListing.module.scss";
import { useStore } from "@/store";

export type PropertiesListingProps = {
  loading: boolean,
  error: Error | null
};

const PropertiesListing: React.FC<PropertiesListingProps> = ({loading, error}) => {
	const data = useStore((state) => state.propertiesList)

	if(error){
		console.error(error);
	}

  return (
    <section className="page_section">
      <div className="container">
		{loading && <>Loading...</>}
        <div>
			{data && (
				<ul>
					{data.map((property) => (
						<li key={property.Id}>{property.Title}</li>
                        
					))}
				</ul>
			)}
		</div>
      </div>
    </section>
  );
};

export default PropertiesListing;

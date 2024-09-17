"use client";

import { Button, ContactForm } from "@/components";
import { Favorite, LocationOn, WatchLater } from '@mui/icons-material';
import React, { useEffect, useState } from "react";
import { formatDate, numberWithCommas } from "@/utilities";
import { useNavigate, useParams } from "react-router-dom";

import { InfoBite } from './components';
import { Property } from "@/models";
import styles from "./PropertyDetails.module.scss";
import { useStore } from "@/store";

export type PropertyDetailsProps = {
  error: Error | null;
};

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ error }) => {
  const [currentProperty, setCurrentProperty] = useState<Property | null>();

  const { id } = useParams();
  const properties = useStore((state) => state.propertiesList);

  const navigate = useNavigate();

  useEffect(() => {
    if (id && properties) {
      if (properties.length === 0) return;

      const foundProperty = properties.find(({ Id }) => Id === parseInt(id));
      if (foundProperty) {
        setCurrentProperty(foundProperty);
      } else {
        navigate("/404");
      }
    }
  }, [id, properties, navigate]);

  if(error){
	console.error(error);
  }

  return (
    <>
      {currentProperty && (
        <section className="page_section">
          <div className="container">
            <div className={styles.title_grid}>
              <h1 className={`title_page ${styles.property_title}`}>
                {currentProperty.Title}
              </h1>
              <strong className="title_page">
                $ {numberWithCommas(currentProperty["Sale Price"])}
              </strong>
              <Button
                title="Save Property"
                onClick={() => {
                  return;
                }}
              >
                <Favorite /> Save Property
              </Button>
            </div>

			<div className={styles.info_section}>
				<span className={styles.info_item}>
					<LocationOn /> {currentProperty.Location}
				</span>
				<span className={styles.info_item}>
					<WatchLater /> {formatDate(currentProperty.DateListed)}
				</span>
			</div>

			<div className={styles.content_layout}>
				<div className="property_info">
					<div className={styles.image_container}>
						<img className={styles.property_image} src={currentProperty.PictureURL} alt={currentProperty.Title} />
					</div>

					<div className={styles.stats_container}>
						<InfoBite qty={currentProperty.Bedrooms} stat='Bed'/>
						<InfoBite qty={currentProperty.Bathrooms} stat='Bath'/>
						<InfoBite qty={currentProperty.Parking} stat='Parking'/>
						<InfoBite qty={currentProperty.Sqft} stat='Sqft'/>
						<InfoBite qty={currentProperty.YearBuilt} stat='Year Built'/>
					</div>

					<div className="description_container">
						<p>{currentProperty.Description}</p>
					</div>
				</div>

        <div className="form_layout">
        <ContactForm />
        </div>
			</div>
          </div>
        </section>
      )}
    </>
  );
};

export default PropertyDetails;

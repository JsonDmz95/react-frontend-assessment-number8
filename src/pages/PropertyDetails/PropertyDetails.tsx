"use client";

import { Button, ContactForm, PageTitle } from "@/components";
import { Favorite, HeartBroken, LocationOn, WatchLater } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { formatDate, numberWithCommas } from "@/utilities";
import { useNavigate, useParams } from "react-router-dom";

import { InfoBite } from "./components";
import { Property } from "@/models";
import styles from "./PropertyDetails.module.scss";
import { useStore } from "@/store";

export type PropertyDetailsProps = {
  error: Error | null;
};

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ error }) => {
  const [currentProperty, setCurrentProperty] = useState<Property | null>();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const { id } = useParams();
  const properties = useStore((state) => state.propertiesList);

  const favoritesList = useStore((state) => state.favoritesList);
  const addFavorite = useStore((state) => state.updateFavoritesList);
  const removeFavorite = useStore((state) => state.removeFavorite);

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

  useEffect(() => {
    if (currentProperty && favoritesList) {
      const foundFavorite = favoritesList.find(
        ({ Id }) => Id === currentProperty.Id
      );
      if (foundFavorite) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    }
  }, [currentProperty, favoritesList]);

  const handleClick = () => {
    if (!currentProperty) return;
    addFavorite(currentProperty);
  };
  
  const handleRemove= () => {
    if (!currentProperty) return;
    removeFavorite(currentProperty);
  };

  if (error) {
    console.error(error);
  }

  return (
    <>
      {currentProperty && (
        <section className="page_section">
          <PageTitle title={currentProperty?.Title} />
          <div className="container">
            <div className={styles.title_grid}>
              <h1 className={`title_page ${styles.property_title}`}>
                {currentProperty.Title}
              </h1>
              <strong className="title_page">
                $ {numberWithCommas(currentProperty["Sale Price"])}
              </strong>
              {!isFavorite ? (
                <Button title="Save Property" onClick={handleClick}>
                  <Favorite /> Save Property
                </Button>)
               : (
                <Button title="Remove Property" onClick={handleRemove} variant="secondary">
                  <HeartBroken /> Remove Property
                </Button>
               )}
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
                  <img
                    className={styles.property_image}
                    src={currentProperty.PictureURL}
                    alt={currentProperty.Title}
                  />
                </div>

                <div className={styles.stats_container}>
                  <InfoBite qty={currentProperty.Bedrooms} stat="Bed" />
                  <InfoBite qty={currentProperty.Bathrooms} stat="Bath" />
                  <InfoBite qty={currentProperty.Parking} stat="Parking" />
                  <InfoBite qty={currentProperty.Sqft} stat="Sqft" />
                  <InfoBite qty={currentProperty.YearBuilt} stat="Year Built" />
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

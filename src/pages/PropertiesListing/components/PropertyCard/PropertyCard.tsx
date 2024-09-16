"use client";

import { Button } from "@/components";
import { LocationOn } from "@mui/icons-material";
import { PublicRoutes } from "@/models";
import React from "react";
import { numberWithCommas } from '@/utilities';
import styles from "./PropertyCard.module.scss";
import { useNavigate } from "react-router-dom";

export type PropertyCardProps = {
  id: number;
  picture: string;
  location: string;
  title: string;
  bedrooms: number;
  bathrooms: number;
  price: number;
};

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  picture,
  location,
  title,
  bedrooms,
  bathrooms,
  price,
}) => {

	const navigate = useNavigate();

	const handleClick = () =>{
		navigate(`/${PublicRoutes.PROPERTY_DETAILS}/${id}`)
	}

  return (
    <article className={styles.property_card}>
      <img src={picture} alt={title} className={styles.property_image} />
      <div className={styles.card_body}>
        <span className={styles.card_location}>
          <LocationOn sx={{fontSize: 12}}/> <span>{location}</span>
        </span>
        <h2 className={`title_component ${styles.card_title}`}>{title}</h2>
		<span className={styles.card_rooms}>{bedrooms} beds | {bathrooms} baths</span>
		<strong className={styles.card_price}>$ {numberWithCommas(price)}</strong>
		<Button title="View Details" onClick={handleClick}>View Details</Button>
      </div>
    </article>
  );
};

export default PropertyCard;

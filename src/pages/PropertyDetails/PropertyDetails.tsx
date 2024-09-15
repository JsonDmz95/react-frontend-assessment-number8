"use client";

import React from 'react';
import styles from './PropertyDetails.module.scss';
import { useParams } from 'react-router-dom';

export type PropertyDetailsProps = {
	// types...
}

const PropertyDetails: React.FC<PropertyDetailsProps>  = ({}) => {

	const { id } = useParams();

	return (
		<div className={styles.propertydetails}>
 			PropertyDetails works! - {id}
 		</div>
	);
};

export default PropertyDetails;

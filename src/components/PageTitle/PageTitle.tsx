"use client";

import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

export type PageTitleProps = {
	title: string
}

const PageTitle: React.FC<PageTitleProps>  = ({title}) => {

	const location = useLocation;

	useEffect(() => {
		document.title = `${title} - number8 by Jeeson`
	}, [location, title])

	return  null;
};

export default PageTitle;

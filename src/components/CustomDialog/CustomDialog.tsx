"use client";

import React, { useEffect, useState } from 'react';

import { Dialog } from '@mui/material';
import { SubjectManager } from '@/models';
import { Subscription } from 'rxjs';

export type CustomDialogProps = {
	children: React.ReactNode
}

export const dialogOpenSubject$ = new SubjectManager<boolean>();
export const dialogCloseSubject$ = new SubjectManager<boolean>();

const CustomDialog: React.FC<CustomDialogProps>  = ({children}) => {
	const [open, setOpen] = useState<boolean>(false);

	let openSubject$ = new Subscription();
	let closeSubject$ = new Subscription();

	useEffect(() => {
		openSubject$ = dialogOpenSubject$.getSubject.subscribe(() => handleClickOpen());
		closeSubject$ = dialogCloseSubject$.getSubject.subscribe(() => handleClose());
		
		return () => {
			openSubject$.unsubscribe();
			closeSubject$.unsubscribe();
		};
	}, []);


	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleExit = () => {
		dialogCloseSubject$.setSubject = false;
	}

	return (
		<Dialog
        open={open}
        onClose={() => handleExit()}
        aria-labelledby="Favorites"
        aria-describedby="Includes all the properties marked as favorites"
        fullWidth
		className='custom_dialog'
      >
        {children}
      </Dialog>
	);
};

export default CustomDialog;

import React from 'react';
import { render } from '@testing-library/react';
import PropertyDetails from './PropertyDetails';

describe('PropertyDetails', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<PropertyDetails />);

        expect(baseElement).toBeTruthy();
    });
});
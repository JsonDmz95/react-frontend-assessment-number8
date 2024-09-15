import React from 'react';
import { render } from '@testing-library/react';
import PropertiesListing from './PropertiesListing';

describe('PropertiesListing', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<PropertiesListing />);

        expect(baseElement).toBeTruthy();
    });
});
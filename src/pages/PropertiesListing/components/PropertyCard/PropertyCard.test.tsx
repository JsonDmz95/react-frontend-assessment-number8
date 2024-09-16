import React from 'react';
import { render } from '@testing-library/react';
import PropertyCard from './PropertyCard';

describe('PropertyCard', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<PropertyCard />);

        expect(baseElement).toBeTruthy();
    });
});
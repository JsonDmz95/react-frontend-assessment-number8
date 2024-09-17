import React from 'react';
import { render } from '@testing-library/react';
import FavoritesTable from './FavoritesTable';

describe('FavoritesTable', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<FavoritesTable />);

        expect(baseElement).toBeTruthy();
    });
});
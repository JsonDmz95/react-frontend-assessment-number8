import { describe, expect, it } from 'vitest';

import FavoritesTable from './FavoritesTable';
import { render } from '@testing-library/react';

describe('FavoritesTable', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<FavoritesTable />);

        expect(baseElement).toBeTruthy();
    });
});
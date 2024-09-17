import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import ContactForm from './ContactForm';

// Mock utility functions
vi.mock('@/utilities', () => ({
    isValidEmail: (email: string) => email.includes('@'),
    isValidPhoneNumber: (phone: string) => /^\d*$/.test(phone),
  }));

  describe('ContactForm', () => {
    beforeEach(() => {
      render(<ContactForm />);
    });
  
    it('renders the form fields and submit button', () => {
      expect(screen.getByPlaceholderText('Full Name*')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Email*')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Phone Number*')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Comments*')).toBeInTheDocument();
      expect(screen.getByText('Contact Now')).toBeInTheDocument();
    });
  
    it('shows an error message for invalid email format', async () => {
      fireEvent.change(screen.getByPlaceholderText('Full Name*'), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByPlaceholderText('Email*'), { target: { value: 'invalid-email' } });
      fireEvent.change(screen.getByPlaceholderText('Phone Number*'), { target: { value: '1234567890' } });
      fireEvent.change(screen.getByPlaceholderText('Comments*'), { target: { value: 'Some comments' } });
  
      fireEvent.click(screen.getByText('Contact Now'));
  
      await waitFor(() => {
        expect(screen.getByText('Invalid email format')).toBeInTheDocument();
      });
    });
  
    it('shows an error message for invalid phone number format', async () => {
      fireEvent.change(screen.getByPlaceholderText('Full Name*'), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByPlaceholderText('Email*'), { target: { value: 'john.doe@example.com' } });
      fireEvent.change(screen.getByPlaceholderText('Phone Number*'), { target: { value: 'abc123' } });
      fireEvent.change(screen.getByPlaceholderText('Comments*'), { target: { value: 'Some comments' } });
  
      fireEvent.click(screen.getByText('Contact Now'));
  
      await waitFor(() => {
        expect(screen.getByText('Invalid phone number format')).toBeInTheDocument();
      });
    });
  
    it('shows success message when all fields are valid', async () => {
      fireEvent.change(screen.getByPlaceholderText('Full Name*'), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByPlaceholderText('Email*'), { target: { value: 'john.doe@example.com' } });
      fireEvent.change(screen.getByPlaceholderText('Phone Number*'), { target: { value: '1234567890' } });
      fireEvent.change(screen.getByPlaceholderText('Comments*'), { target: { value: 'Some comments' } });
  
      fireEvent.click(screen.getByText('Contact Now'));
  
      await waitFor(() => {
        expect(screen.getByText('Message sent successfully!')).toBeInTheDocument();
      });
    });
  });
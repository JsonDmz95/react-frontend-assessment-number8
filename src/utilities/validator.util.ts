export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhoneNumber = (phone: string) => {
  const phoneRegex = /^[0-9]+$/;
  return phoneRegex.test(phone);
};

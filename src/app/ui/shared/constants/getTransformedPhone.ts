export const getTransformedPhone = (phone: string): string => phone.replaceAll(/[^0-9+]/g, '');
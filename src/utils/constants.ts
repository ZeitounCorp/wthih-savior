// ** General constants **
export const ENVIRONMENT = typeof window === 'undefined' ? 'server' : 'client';
export const IS_SERVER = ENVIRONMENT === 'server';
export const IS_CLIENT = ENVIRONMENT === 'client';


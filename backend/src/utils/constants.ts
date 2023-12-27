export const PAYMENT_TYPES = Object.freeze({
  ONLINE: 0,
  OFFLINE: 1,
});

export const BOOKING_STATUS = Object.freeze({
  NOT_CONFIRMED: 0,
  CONFIRMED: 1,
  CANCELLED: 2,
  ENQUIRY: 3,
  REFUND: 4,
});

export const BOOKED_BY = Object.freeze({
  SUPER_ADMIN: 0,
  SELF: 1,
  OTHERS: 2,
});

export const USER_TYPES = Object.freeze({
  SUPER_ADMIN: 0,
  CUSTOMER: 1,
  STAFF: 2,
});

export const TOKEN_TYPES = Object.freeze({
  ACCESS_TOKEN: 0,
  REFRESH_TOKEN: 1,
});

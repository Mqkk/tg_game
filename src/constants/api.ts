export const BASE_URL = "http://37.46.134.113:90/api/v1";

export const API = BASE_URL;

export const TOKEN = "10|Eo9LNIopBkyxvbn8LaF4XcHdUaUVzAbTweC19isPcbbf1e66";
export const AUTHORIZATION = "/auth/token";

export const USER = "/user";

export const CHARACTER = "/character";
export const CHARACTER_APPEARANCE_PRESET = "/character/appearance/preset";

export const FRACTION_LIST = "/character/factions";
export const GENDER_LIST = "/character/genders";
export const HAIR_TYPE_LIST = "/character/hairs";
export const HAIR_COLOR_LIST = "/character/hair/colors";

export const AVAILABLE_LOCATION_LIST = "/locations";
export const LOCATION_BY_ID = (locationId: number) => `/location/${locationId}`;
export const LOCATION_OBJECT_LIST_BY_ID = (locationId: number) =>
  `/location/objects/${locationId}`;

export const MENU = "/menu";

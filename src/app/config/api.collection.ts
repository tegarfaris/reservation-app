export const API = {
  DASHBOARD: {
    GET_ALL_FACILITY: "/facility",
    GET_ALL_GALLERY: "/gallery",
    GET_ALL_ROOM: "/room",
    CHECK_AVAIBILITY_ROOM: "/room/checkAvailableRoom",
    GET_ALL_TESTIMONI: "/testimoni",
    GET_ALL_VILLA: "/villa",
    GET_VILLA_BY_USER: (userId: string) => `/user/detail/${userId}`,
    GET_VILLA_BY_HIGHLIGHT: "/highlight",
  },
};

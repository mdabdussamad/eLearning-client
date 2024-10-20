import { apiSlice } from "../api/apiSlice";

export const notificationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllNotifications: builder.query({
      query: () => ({
        url: "get-all-notifications",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    updateAllNotificationStatus: builder.mutation({
      query: (id) => ({
        url: `/update-notifications/${id}`,
        method: "PUT",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {
    useGetAllNotificationsQuery,
    useUpdateAllNotificationStatusMutation,
} = notificationsApi;

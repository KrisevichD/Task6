import { queryOptions } from "@tanstack/react-query";
import api from "./api";

export const getAuthOptions = (token: string) => queryOptions({
    queryKey: ['auth', 'user'],
    queryFn: async () => api.getMe(token),
    staleTime: 1000 * 60,
    refetchOnWindowFocus: true,
    retry: false,
    enabled: !!token,
})

export const getRefreshOptions = () => queryOptions({
    queryKey: ['auth', 'token'],
    queryFn: async () => api.refresh(),
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
})

export const getTableDataOptions = () => queryOptions({
    queryKey: ['tables'],
    queryFn: async () => api.getTableData(),
    staleTime: 1000 * 60 * 5,
});

export const getDashboardDataOptions = () => queryOptions({
    queryKey: ['dashboard'],
    queryFn: async () => api.getDashboardData(),
    staleTime: 1000 * 60 * 5
})
import { getAuthOptions } from '@/app/api/queries';
import Profile from '@/layouts/Profile';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authorized/profile')({
    loader: async ({ context }) => {
        const accessToken = context.accessToken;
        if (!accessToken) return
        const userData = context.queryClient.invalidateQueries(getAuthOptions(context.accessToken))
        return userData;
    },
    component: RouteComponent,
})

function RouteComponent() {
    return <Profile />
}

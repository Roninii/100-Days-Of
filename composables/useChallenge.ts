type Challenge = {
    id: string;
    name: string;
    homepage?: string;
};

export function useChallenge(ctx: any) {
    const {
        root: { $fireStore, $store, $router },
    } = ctx;
    const userRef = $fireStore.doc(`users/${$store.state.user.currentUser.id}`);

    const joinChallenge = async (challenge: Challenge) => {
        const user = await userRef.get();

        if (user.exists) {
            $store.dispatch('user/joinChallenge', { userRef, challenge });
            $router.push({ path: '/dashboard' });
        }
    };

    const leaveChallenge = async (challenge: Challenge) => {
        const user = await userRef.get();

        if (user.exists) {
            $store.dispatch('user/leaveChallenge', { userRef, challenge });
        }
    };

    return {
        joinChallenge,
        leaveChallenge,
    };
}

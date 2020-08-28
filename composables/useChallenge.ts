type Challenge = {
    id: string;
    name: string;
    homepage?: string;
    start?: object;
    paused?: boolean;
    pausedDays?: number | undefined;
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

    const pauseChallenge = async (challenge: Challenge) => {
        const user = await userRef.get();

        const challengeUpdate = {
            ...challenge,
            paused: true,
            pausedDays: challenge?.pausedDays ?? 1,
        };

        if (user.exists) {
            $store.dispatch('user/pauseChallenge', { userRef, challenge, challengeUpdate });
        }
    };

    return {
        joinChallenge,
        leaveChallenge,
        pauseChallenge,
    };
}

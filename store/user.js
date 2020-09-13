export const state = () => ({
    currentUser: null,
});

export const mutations = {
    SET_CURRENT_USER(state, authUser) {
        authUser
            ? (state.currentUser = {
                  id: authUser.uid,
                  displayName: authUser.displayName,
                  email: authUser.email,
                  challenges: authUser.challenges ?? [],
              })
            : (state.currentUser = null);
    },

    JOIN_CHALLENGE({ currentUser }, challenge) {
        currentUser.challenges = [...currentUser.challenges, challenge];
    },

    LEAVE_CHALLENGE({ currentUser }, challenge) {
        currentUser.challenges = currentUser.challenges.filter(({ id }) => id !== challenge.id);
    },

    PAUSE_CHALLENGE({ currentUser }, challenge) {
        currentUser.challenges = [
            ...currentUser.challenges.filter(({ id }) => id !== challenge.id),
            challenge,
        ];
    },

    UNPAUSE_CHALLENGE({ currentUser }, challenge) {
        currentUser.challenges = [
            ...currentUser.challenges.filter(({ id }) => id !== challenge.id),
            challenge,
        ];
    },

    LOG_CHALLENGE({ currentUser }, challenge) {
        currentUser.challenges = [
            ...currentUser.challenges.filter(({ id }) => id !== challenge.id),
            challenge,
        ];
    },
};

export const actions = {
    async updateCurrentUser({ commit }, { authUser }) {
        if (authUser) {
            const userRef = this.$fireStore.doc(`users/${authUser.uid}`);
            const snapShot = await userRef.get();

            commit('SET_CURRENT_USER', { ...authUser, ...snapShot.data() });
        } else commit('SET_CURRENT_USER', authUser);
    },

    async joinChallenge({ commit }, { userRef, challenge }) {
        // start user at day 0 by default
        challenge.start = this.$fireStoreObj.Timestamp.now();

        await userRef
            .update({
                challenges: this.$fireStoreObj.FieldValue.arrayUnion(challenge),
            })
            .catch(console.log);

        commit('JOIN_CHALLENGE', challenge);
    },

    async leaveChallenge({ commit }, { userRef, challenge }) {
        await userRef
            .update({
                challenges: this.$fireStoreObj.FieldValue.arrayRemove(challenge),
            })
            .catch(console.log);

        commit('LEAVE_CHALLENGE', challenge);
    },

    async pauseChallenge({ commit }, { userRef, challenge, challengeUpdate }) {
        // currently (08/27/2020) there is no way to update a specific index of an array
        // so we need to remove it, and then re-add it with any updated data. zzzzZZZZzz

        await userRef
            .update({
                challenges: this.$fireStoreObj.FieldValue.arrayRemove(challenge),
            })
            .catch(console.log);

        await userRef
            .update({
                challenges: this.$fireStoreObj.FieldValue.arrayUnion(challengeUpdate),
            })
            .catch(console.log);

        commit('PAUSE_CHALLENGE', challengeUpdate);
    },

    async unpauseChallenge({ commit }, { userRef, challenge, challengeUpdate }) {
        // currently (08/27/2020) there is no way to update a specific index of an array
        // so we need to remove it, and then re-add it with any updated data. zzzzZZZZzz

        await userRef
            .update({
                challenges: this.$fireStoreObj.FieldValue.arrayRemove(challenge),
            })
            .catch(console.log);

        await userRef
            .update({
                challenges: this.$fireStoreObj.FieldValue.arrayUnion(challengeUpdate),
            })
            .catch(console.log);

        commit('UNPAUSE_CHALLENGE', challengeUpdate);
    },

    async logProgress({ commit, state }, { userRef, challenge, log }) {
        // const currentLogs =
        const update = {
            ...challenge,
            logs: [
                ...(state.currentUser.challenges.find((chal) => chal.id === challenge.id).logs ??
                    []),
                { ...log, date: this.$fireStoreObj.Timestamp.now() },
            ],
        };

        await userRef
            .update({
                challenges: this.$fireStoreObj.FieldValue.arrayRemove(challenge),
            })
            .catch(console.log);

        await userRef
            .update({
                challenges: this.$fireStoreObj.FieldValue.arrayUnion(update),
            })
            .catch(console.log);

        commit('LOG_CHALLENGE', update);
    },
};

<template>
    <portal to="log">
        <div
            class="fixed inset-0 z-10 bg-gray-800 bg-opacity-50 h-screen flex justify-center items-center"
            @click="$emit('cancel')"
        >
            <BaseCard
                class="bg-white w-full max-w-lg grid gap-4 text-center z-50"
                title="What did you do today?"
            >
                <form
                    class="grid place-center gap-4"
                    @submit.prevent="
                        $emit('log-progress', {
                            challenge,
                            log: { challenge: challenge.name, logMessage },
                        })
                    "
                >
                    <textarea
                        id=""
                        v-model="logMessage"
                        name="log"
                        cols="40"
                        rows="10"
                        class="bg-gray-200 rounded p-4"
                    ></textarea>

                    <div class="grid grid-cols-2 gap-4">
                        <BasePrimaryButton type="submit">Log it!</BasePrimaryButton>
                        <BaseSecondaryButton @mousedown="$emit('cancel')"
                            >Cancel</BaseSecondaryButton
                        >
                    </div>
                </form>
            </BaseCard>
        </div>
    </portal>
</template>

<script lang="ts">
import { Portal } from 'portal-vue';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
    name: 'LogModal',
    components: {
        Portal,
    },
    props: {
        challenge: {
            type: Object,
        },
    },
    data() {
        return {
            logMessage: '',
        };
    },
});
</script>

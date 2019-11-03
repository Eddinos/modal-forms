<template>
    <v-card class="CardDelete">
        <v-card-title>Delete {{ itemToDelete.title }}</v-card-title>
        <v-card-text>Do you really want to discard {{ itemToDelete.title }} ?</v-card-text>
        <v-btn class="ma-4" text color="grey" @click="closeDialog">Cancel</v-btn>
        <v-btn class="ma-4" text color="primary" @click="handleConfirm">Confirm</v-btn>
    </v-card>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'CardDelete',
    props: {
        itemToDelete: {
            type: Object,
            required: true
        }
    },
    methods: {
        closeDialog () {
            this.$router.push({ name: 'cardList' })
        },
        handleConfirm () {
            this.deleteCard(this.itemToDelete)
            this.closeDialog()
        },
        ...mapMutations({
            deleteCard: 'deleteCard'
        })
    }
}
</script>

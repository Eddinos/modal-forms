<template>
    <div class="CardUpdate">
        <card-form title="update this card" 
                   @submit="handleSubmit" 
                   @cancel="closeForm"/>        
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'CardUpdate',
    components: {
        CardForm: () => import(/* webpackChunkName: "CardForm" */ '../components/CardForm.vue'),
    },
    methods: {
        handleSubmit (payload) {
            this.addCard(payload)
            this.closeForm();
        },
        closeForm () {
            this.$router.push({name: 'cardList'})
        },
        ...mapMutations({
            addCard: 'addCard'
        })
    }
}
</script>
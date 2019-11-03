<template>
    <div class="CardUpdate">
        <card-form title="update this card" 
                   :initial-values="card" 
                   @submit="handleSubmit" 
                   @cancel="closeForm"/>        
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'CardUpdate',
    props: {
        card: Object
    },
    components: {
        CardForm: () => import(/* webpackChunkName: "CardForm" */ '../components/CardForm.vue'),
    },
    methods: {
        handleSubmit (payload) {
            this.updateCard(payload)
            this.closeForm();
        },
        closeForm () {
            this.$router.push({name: 'cardList'})
        },
        ...mapMutations({
            updateCard: 'updateCard'
        })
    }
}
</script>
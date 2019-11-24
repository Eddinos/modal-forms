<template>
    <v-card class="CardForm">
        <v-card-title>{{ title }}</v-card-title>
        <v-form>
            <v-text-field  class="px-6" 
                        v-model="formValues.name" 
                        label="name" 
                        required 
                        type="text" ></v-text-field>
            <v-text-field  class="px-6" 
                        v-model="formValues.img" 
                        label="image url" 
                        required 
                        type="text" ></v-text-field>
            <v-text-field  class="px-6" 
                        v-model="formValues.description" 
                        label="description" 
                        required 
                        type="text" ></v-text-field>
        
            <v-btn class="ma-4" text color="grey" @click="$emit('cancel')">Cancel</v-btn>
            <v-btn class="ma-4" text color="primary" @click="$emit('submit', formValues)">Submit</v-btn>
        </v-form>
    </v-card>
</template>

<script>
export default {
    name: 'CardForm',
    props: {
        title: String,
        initialValues: Object
    },
    data () {
        return {
            formValues: this.initialValues || {}
        }
    }
}
</script>

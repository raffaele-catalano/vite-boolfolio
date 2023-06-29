<script>
import axios from 'axios';
import { store } from '../../data/store';

export default {
    name: 'ContactForm',

    data(){
        return{
            name: '',
            email: '',
            message: '',
            errors: {},
        }
    },

    methods: {
        sendForm(){
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }
            console.log(data);
            
            axios.post(store.apiUrl + 'contacts', data)
                .then(result => {

                    this.errors = result.data.errors;
                    console.log(result.data);

                })
        }
    }
}
</script>

<template>

    <div class="container rc-form rounded-2">
        <!-- @submit.prevent => blocca la ricarica della pagina che di base è automatica al click di un button type=submit -->
        <form @submit.prevent="sendForm()" class="p-3">
    
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input v-model.trim="name" :class="{ 'is-invalid' : errors.name }" type="text" class="form-control" placeholder="Type your Fullname">
            </div>
            
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model.trim="email" :class="{ 'is-invalid' : errors.email }" type="email" class="form-control" placeholder="Type your Email">
            </div>
    
            <div class="form-floating mb-4">
                <p>Message</p>
                <textarea v-model.trim="message" :class="{ 'is-invalid' : errors.message }" class="form-control" style="height: 150px; width: 100%;"></textarea>
            </div>
            
            <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-primary">Send <i class="fa-solid fa-paper-plane fa-lg"></i></button>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
    .rc-form {
        box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.1);
    }
</style>
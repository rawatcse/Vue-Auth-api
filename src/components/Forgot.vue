<template>
    <form @submit="handleSubmit">
        <div v-if="message" class="alert alert-success" role=" alert">
            {{ message }}
        </div> 
        <Error v-if="error" :error="error"/>   
        <h3>Forgot Password</h3>
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email"/>
        </div>
        <button class="btn btn-primary btn-block">Submit</button>
    </form>
</template>
<script>
import axios from 'axios';
import Error from './Error.vue';
export default {
    name:'Forget',
    components:{
        Error
    },
    data(){
        return {
            email:'',
            message:'',
            error:''
        }
    },
    methods:{
        async handleSubmit(){
            try{
                const response = await axios.post('forget',{
                    email:this.email
                });
                this.message = "The mail was send!";
                this.error = ""
            }catch(e){
                this.message = "";
                this.error = "Error occured!"
            }
        }
    }
}
</script>
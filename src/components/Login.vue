<template>
    <form @submit.prevent="handleSubmit">
        <Error v-if="error" :error="error"/>
        <h3>Login</h3>
    <div class="form-group">
        <label >Email</label>
        <input type="email" class="form-control" v-model="email" placeholder="Email">
    </div>
    <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" v-model="password" placeholder="Password">
    </div>
    <button class="btn btn-primary btn-block">Login</button>
    <p class="forget-password text-right">
        <RouterLink to="/forgot">Forget Password</RouterLink>
    </p>

    </form>
</template>
<script>
 import axios from 'axios';
 import Error from './Error.vue'
export default{
    name:'Login',
    components:{
        Error
    },
    data(){
        return {
            email:'',
            password:'',
            error:''
        }
    },
    methods:{
        async handleSubmit(){
            try{
                // const data = 
                const response = await axios.post('login',{
                    email:this.email,
                    password:this.password,
                    // confirm_password:this.confirm_password,
                });
    
                localStorage.setItem('token',response.data.token)
                this.$store.dispatch('user', response.data.user)
                this.$router.push('/');
            }catch(error){
            if (error.response) {
                // Handle specific error status codes
                if (error.response && error.response.status === 401) {
                    this.error = "Invalid username/password!"
                // Redirect to login page or perform other actions for unauthorized access
                }
                } else if (error.request) {
                console.error('Request error:', error.request);
                } else {
                console.error('Error:', error.message);
                }
            }
        }
    }
}
</script>
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="pesquisa">
    <button @click="carregaInfo(pesquisa)">Pesquisa</button>

    <div v-for="(item,index) in resultado" :key="index">
      <h3>{{item}}</h3>
      <img :src="item" alt="">
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      pesquisa: "",
      resultado: ""
    }
  },
  methods: {
    carregaInfo(query){
      axios.get('https://dog.ceo/api/breed/'+ query +'/images')
      .then(res=>{
        this.resultado = res.data.message;
        console.log(this.resultado)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

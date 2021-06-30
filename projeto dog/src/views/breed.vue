<template>
  <div style="display: flex">
  <div class="hello">
    <div v-for="(item,index) in resultado" :key="index">
      <app-card largura="520px">
        {{item}} &emsp;<button @click="marcaFavorito(item)">&#9829;</button>
      <img :src="item" alt="">
      </app-card>
    </div>
  </div>
  <app-card class="favoritos" cor="grey">
    <p>FAVORITOS</p>
    <div v-for="(item,index) in favoritos" :key="index">>
      <app-card cor="white" @click="desmarcaFavorito(index)">
        <img :src="item" width="90" alt="">
      </app-card>
    </div>
  </app-card>
  </div>
</template>

<script>
import axios from "axios";
import app_card from '../components/app_card.vue';
export default {
  components: { app_card },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      pesquisa: "",
      resultado: "",
      favoritos:[]
    }
  },
  methods: {
    desmarcaFavorito(index){
      this.favoritos.splice(index,1)
    },
    marcaFavorito(item){
      this.favoritos.push(item)
    },
    carregaInfo(query){
      axios.get('https://dog.ceo/api/breed/'+ query +'/images')
      .then(res=>{
        this.resultado=res.data.message
        console.log(this.resultado)
      })
    },
    carregaBreed(breed){
      return axios.get('https://dog.ceo/api/breed/'+ breed +'/images/random')
      .then(
        this.resultado=res.data.message
      )
    }
  },
  created(){
      this.carregaInfo(this.$route.params.id)
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
.breed{
  display: flex;
  flex-flow: row wrap;
}
.favoritos{
  max-width: 130px;
  font-weight: 700;
  color: white;
  background: grey;
}
</style>

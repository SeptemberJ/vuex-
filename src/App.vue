<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <Spin v-if="getSpin"/>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import Spin from './components/Spin.vue'
export default {
	name: 'App',
	data: function () {
	  return {
	    isCollapsed: false,
	    LeftDistance:false,
	  }
	},
	computed: {
	    ...mapGetters([
	      'getSpin'
	    ]),
	},
	components: {
    	Spin,
       
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>

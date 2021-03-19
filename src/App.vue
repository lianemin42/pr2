<template>
<div class="cent">
 <router-link to="/">
        
      <img src="https://juweliercivan.de/coding/img/imgl.jpg" style="width: 100px; height: 100px;" />
        
      </router-link>
      </div>
    <div class="divnav">
      
      <router-link to="/">
        <li >
          <a class="active" >Beginner Travel Blog</a>
        </li>
      </router-link>
      <li>
                <a> HI</a>

      </li>
       <li style="float:right">
        <a> Add New City</a>
      </li>
       <router-link to="/Contact">
        <li style="float:right">
                 <a> Contact</a>

        </li>
      </router-link>
    </div>

    
   <!-- <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view> -->
     <router-view/>
  
</template>

<script>
// import { useStore } from 'vuex';
// import { computed } from 'vue';

// export default {
//   name: 'App',
//   setup() {
//     const store = useStore();
//     const city = computed(() => store.state.User.city);

//     return {
//       city
//     }
//   }
// }

//future plans :))
</script>

<style lang="scss">
.cent {
  text-align: center;

}

  .divnav {
  list-style-type: none;
  margin-top: auto;
  padding: auto;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
  border-right:1px solid #bbb;
}

li:last-child {
  border-right: none;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #4CAF50;
}
  

</style>

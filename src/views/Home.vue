<template>
  <div id="home">
    <articles>
      <banner />
    </articles>   

<base-card
      color="rgba(211,211,211, 0.51)"
      class="pa-3"
    >
  <v-container
    id="about"
    tag="section"
  >
    <base-subheading>Tutoring</base-subheading>
      <v-layout>
    <p class="pa=1">
Our talented students offer tutoring services in all kinds of languages. Fill out the form if you wish to have one-on-one lessons with our developers!

 </p>
         <v-spacer />

   <base-btn
            

            href="https://docs.google.com/forms/d/e/1FAIpQLSdDmbjHoGy7Sx9wFqoaHhH24NCctC1qzcx33CBKqxCU-KLGbA/viewform?usp=sf_link"
            class="ml-0 mr-3"
            color="primary"
            square
            target="_blank"
          >
            <v-icon v-text='"mdi-link"'></v-icon>
          </base-btn>

      </v-layout>
    </v-container>

      </base-card>
      
    <about />
          



  </div>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      About: () => import('@/components/home/About'),
      Articles: () => import('@/components/home/Articles'),
      Banner: () => import('@/components/home/Banner'),
      Social: () => import('@/components/home/Social'),
      Subscribe: () => import('@/components/home/Subscribe')
    }
  }
</script>

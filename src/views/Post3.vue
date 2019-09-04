<template>

  <div v-html="legacySystemHTML"> 
      

      

  </div>
  
</template>

<script>
export default {
  data() {
    return {
      // Just like JSX! Oh wait...
      legacySystemHTML: `
        <!DOCTYPE html>
        <html lang="en">
       <head>


    <title>Our First Hackathon</title>

    <!-- Bootstrap Core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Theme CSS -->
    <link href="clean-blog.min.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->


</head>

<body>


    <!-- Page Header -->
    <!-- Set your background image for this header on the line below. -->
 <header class="intro-header" style="background-image: url('img/post-bg.jpg')">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div class="post-heading">
                        <h1>Puerto Rico Hackathon</h1>
                        <span class="meta">Posted by <a href="#">Joey Ismael</a> on January 13, 2017</span>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- Post Content -->
    <article>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <p>
                    I've learned a lot since I started attending hackathons with the club - applying computer science to help solve real-world issues is something not many get the opportunity to do it high school! In the fall of 2017, after Hurricane Maria devastated Puerto Rico, thousands of people were without food or shelter. We decided to go to a hackathon and try to come up with a solution to solve the problem.
                     </p>
                     <p>
                       When we first arrived, our group brainstormed  different ideas to solve the many issues the Puerto Ricans faced. We decided to create a website in which radio transcripts would be stored in a secure server. Puerto Ricans could walk to nearby cell towers to access these broadcasts, which would include locations for shelters and act as a communication device let people know of their situation. The user would create requests using a Natural Language Question Answer API. After long hours of work, we presented our idea in a prepared speech. We ended up winning the best machine learning hack award! I was $40 richer. </p>
                       <iframe width="560" height="315" src="https://www.youtube.com/embed/k4vWi6Rstcs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

            </div>
        </div>
    </article>



        </body>

        </html>

      `
    }
  }
}

</script>    


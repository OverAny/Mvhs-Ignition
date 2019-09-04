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
                        <h1>AngelHack</h1>
                        <span class="meta">Posted by <a href="#">IoT Club</a> on February 26, 2017</span>
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

                    <p><a href = "http://easymeal.tech">Our Hackathon Project</a></p>
                    <p>The AngelHack Global Hackathon Series held at San Francisco Tehama St was quite an event. Numerous programers from all ages had come together in various teams hoping to solve real-world problems. We as a team of 5 had gone to this Hackathon in hopes of creating a solution for those who have trouble choosing restaurants.</p>
                    <p>Arriving early to the AngelHacks had granted us with a nice working area and more time to think about how to develop our website. Despite originally hoping to design a survey that will help the computer give specific restaurant suggestions based on input from the user, we had eventually thought of integrating machine learning in hopes of having the computer continously learn more data from the user. This data based on past restaurant choices etc. would give the computer an idea of what to suggest to it's user. In addition, we had decided on including a feature to our website that allows the user to input in an area in the world and be given suggestions for restaurants for that specific area.</p> <p> That night, stress and desire had motivated us to stay awake for almost the entire night. Although we may have felt sleep deprived, we felt inclined to work on our website in hopes of winning in the award cermony. After somewhat completing our website as planned, we had attended the award cermony and our journey back home. </p>
                    </div>
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


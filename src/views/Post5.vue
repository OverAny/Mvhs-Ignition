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
                        <h1>EZGoals</h1>
                        <span class="meta">Posted by <a href="#">Arjun Patrawala</a> on September 4, 2018</span>
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

                    <p><a href = "https://github.com/MVHSIgnition/DeveloperWeek2018">The Project's GitHub</a></p>
                    <p>On Febuary 3rd and 4th of 2018, part of the Ignition club participated in Developer Week 2018 where we competed against adults in a race to build the best application in 48 hours. Our idea was EZ Goal.</p>
                    <p>EZ Goal was a form of social media that allowed users to compete with their friends to achieve certain goals: for example, a user could set the goal of losing ten pounds by a certain date, and if the goal was met, both the friends who had pledged in app currency and the user who completed the goal would benefit. Our app would help incentivize regular people to achieve their goals using monetary value from app sponsors (such as premium Spotify service for 2 weeks.)</p>
                    <p>We wrote our app in HTML, CSS, and JavaScript on the front end. Our backend utilized the Node.js runtime and the sockets.io library. The backend was written by Anson Bridges and Jonathan Liu; Erik Zhang and Arjun Patrawala worked on the frontend; Nakul Shenoy attempted to connect our application with the Khan Academy API (however, he experienced little success).</p>
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


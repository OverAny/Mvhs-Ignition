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

            <title>The Walk-in Talkin' Closet</title>

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
                                <h1>The Walk-in Talkin' Closet</h1>
                                <span class="meta">Posted by <a href="#">IoT Club</a> on January 13, 2017</span>
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
                            <p><a href = "http://www.instructables.com/id/Walk-in-Talkin-Closet-Closet-That-Talks-to-You-and/">Our Instructables Project</a></p>
                            <p>The Walk-in Talkin’ Closet is a ground-breaking product that helps in the mornings by scanning for motion in one’s closet and, on detection, taking the schedule from one’s Google calendar and speaking out the weather at that location. The Closet undergoes many processes to make this happen. In the rest of this blog post, we will detail how this product works.</p>

                            <p>The Walk-in Talkin’ Closet uses a Raspberry Pi 3 as its central computer, a motion sensor, speakers, as well as a radio dongle and antenna to broadcast signals wirelessly. First, starting at 6am every day, the Raspberry Pi starts receiving signals from the motion sensor. When motion is detected, the Pi connects to the user’s Google Calendar and extrapolates the data for the first event of the day. It then takes the location of this event, plugs it into the Weather API, and receives the weather at that location. Then, using Text-to-Speech technology, the location and weather data is audibly spoken out of the speakers.</p>

                            <p>The Walk-in Talkin’ Closet was our first team project in the IoT club. A team of three of us worked for a long time building this project and we submitted it in the IoT Builder’s Contest, a contest sponsored by IBM. While we did not end up winning the contest, our project page was featured on Instructables and we received over 1000 views and numerous favorites!</p>
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


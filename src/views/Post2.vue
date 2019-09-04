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
                        <h1>Our First Hackathon</h1>
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
                    <p><a href = "https://github.com/MVHSiot/EasyFeedback">Our Hackathon Project on Github</a></p>
                    <p>With over 2,000 participants, the DeveloperWeek Hackathon is among one of the largest in the nation. Our IoT club sent a team to compete in this event, not expecting much since it was our very first hackathon. We arrived excited, but a bit nervous, as we were surrounded by intimidating adult programmers.</p>
                    <p>We settled in and discussed which sponsored API we should use, joking that we would go for the highest cash prize. After considering our options, we decided to go with PubNub Civic Hack Challenge. Our goal was to create an application that would help the community or government. To address this, we created EZFeedback, a real-time in-class feedback system for helping students and teachers optimize their class time, especially in lectures.</p>
                    <p>During our second and final day, we pitched to both the Round 1 and Round 2 judges (round 1 was for overall winners, and round 2 was for sponsor prizes). Our team had been frantically coding to the last minute before both pitches, and, having missed lunch, we decided to go out for food. Deciding that we had little to no chance of winning anything, our team decided to take their time and eat a proper lunch at California Pizza Kitchen. As we sat down, one of our members received a phone call, informing us that we had made the top 5 projects and had 10 minutes to set up for our presentation. Having received many spam calls before, coupled with the audio being drowned out by the noise of the restaurant, he simply replied “sorry, you have the wrong number” and hung up. A minute later, the same member read his e-mails, one of them repeating the same message, and told the team. We pitched on stage for the judges, as well as the other hackers. In the end, we won 2nd place, far surpassing expectations for any high school team. </p>
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


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
                        <h1>CoderDojo</h1>
                        <span class="meta">Posted by <a href="#">Erik Zhang</a> on January 13, 2017</span>
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
                    Last year, as a freshman, my friends and I were in California Pizza Kitchen for a late lunch. We had just completed our first hackathon (DeveloperWeek, the biggest professional hackathon in the U.S.), an event where we worked on a project for 24 hours and competed for five finalist spots among hundreds of mostly professional developers. With minimal sleep the night before, we were exhausted, having just finished our pitch. We looked forward to returning to our beds at home.
                    </p>
                    <p>
                      While waiting for our pizzas, we got a call asking us to pitch as a top-five finalist. Confused, we told the caller that he had the wrong number and hung up. Minutes later, we received an email from DeveloperWeek asking us to return to the venue to pitch as a finalist.
                    </p>
                    <p>
                      We were shocked. How could we have beaten hundreds of experienced developers? Laughing in wonder, we canceled our orders and sprinted out of the restaurant.
                    </p>
                    <p>
                      I soon found myself on a dark stage surrounded by cameras and lights as we nervously set up our demo. I completed the pitch quickly, without being too aware of what was happening, and walked off the stage in a daze.
                    </p>
                    <p>
                      Our team comprised six freshmen who were brought together by a club we formed at Mountain View High School. I wanted to find people with similar interests, which I had fortunately experienced in CoderDojo, where I spent hours with others with similar passions.
                    </p>
                    <p>
                      Despite being very knowledgeable for high schoolers, when we arrived at the hackathon, we felt intimidated. We quickly learned that languages we were comfortable with were too clunky for the challenge. After deliberation, we realized that we needed to use new tools such as PubNub to tackle the project.
                    </p>
                    <p>
                      This experience led to an epiphany. I realized that a lot of coding curricula had gaping flaws; in a world of rapidly developing technology such as virtual reality, machine learning and blockchain, many concepts and languages programmers learn become archaic. A fixed curriculum and traditional teaching quickly become inadequate as technology evolves, and our current structure does not address the need for learning on the fly.
                    </p>
                    After discussing this with my club, I realized that they had a similar sentiment. We set out to create our own lesson plans that would focus on teaching coders to learn without the help of someone who knew every answer. Our solution was to create a single learning resource with necessary information, similar to what you would find on a website while trying to learn yourself, and create challenges that could be solved by synthesizing different parts of the guide.
                     <p>
                       I returned to CoderDojo, trying to give students a mini-hackathon experience where they try to solve challenging problems while identifying their own gaps in knowledge and filling them on the spot.
                     </p>

                    <p>
                      With the explosion of new technology and innovations, it’s impossible for humans to acquire all the necessary knowledge in advance. As such, it’s imperative for innovators not only to learn coding skills, but also the ability to acquire new concepts on the fly.
                    </p>
                    <p>
                      I hope my efforts with CoderDojo help my fellow tech enthusiasts learn this new skill to thrive in a world facing seemingly impossible challenges.
                    </p>

                    <p>P.S. This post has been published on the <a href="https://www.losaltosonline.com/news/sections/schools/210-school-features/56944"->Los Altos Town Crier!</a>
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


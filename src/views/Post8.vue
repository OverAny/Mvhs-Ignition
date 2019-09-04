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
                        <h1>Our First Cybersecurity Competition is in the Books!</h1>
                        <span class="meta">Posted by <a href="#">Erik Zhang</a> on October 20, 2018</span>
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
                    <p>For quite a while now, we've been trying to become more knowledgeable about the cybersecurity field. In following our philosophy, we wanted to do this in a manner that was project based, which was tough. How do you create a cybersecurity challenge? </p>
                    <p>Thankfully, <a href="https://picoctf.com/">picoCTF</a> allowed us to learn through collaborative problems and projects. PicoCTF is a nation wide high school competition that focuses on reverse engineering, hacking, decrypting, and a whole lot more. It's the biggest hacking competition in the nation, with significant cash prizes for the top 10 teams. </p>
                    <p>Our entire club created seperate teams and competed with the main motivation to learn, but one team went above and beyond! In what was many of our first experiences with cybersecurity, we ended up placing 32/6000 teams nationally, beating out many local schools. </p>
                    <p>It was an extremeley rewarding and enjoyable process; we look to compete again next year! </p>
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


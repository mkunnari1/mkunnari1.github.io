<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!--Custom CSS-->
    <link rel="stylesheet" href="./CSS/style.css">
    <title>Matt Kunnari</title>
  </head>
  <body>
    <!--Nav-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
            <a class="navbar-brand" href="#">Matt Kunnari</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#"> <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link active" href="#Portfolio">Portfolio</a>
                <a class="nav-item nav-link active" href="#Skills">skills</a>
                <a class="nav-item nav-link active" href="#Contact">Contact</a>
              </div>
            </div>
          </nav>

    <!--/Nav-->

    <!--Jumbotron-->
      <style type="text/css">
      
        .jumbotron{
            margin-top: 15px;
            background-image: url(./images/rainwallpaper.jpg);
            height: 900px;
            text-align: left;
            color: floralwhite;  
        }
      </style>

        
            <div  class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Welcome</h1>
                    <p class="lead">Take a look around, find what's right for you.</p>
                </div>
            </div>
    <!--/Jumbotron-->
            
    <!--Carousel-->
   <!-- <style class="text/css">
        .carousel-inner{
            height: 500px;
            width: 100%;
            margin-bottom: 30px;
          
        }  
        .carousel-inner img{
        display: block;
        margin-left: auto;
        margin-right: auto; 
        
          
  
        }
      </style>
  
      <div class="bd-example bg-dark">
              <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="./images/11-1.jpg" class="d-block w-auto p-3" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                     
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src="./images/12-1.jpg" class="d-block w-auto p-3" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                     
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src="./images/13-1.png" class="d-block w-auto p-3" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                      
                    </div>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div> -->
      <!--/Carousel-->
    
    <!--Deck-->
            <div id="Portfolio"></div>
    <div class="card-deck">
        <div class="card">
            <img src="./images/11-1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Databases are Critical</h5>
            <p class="card-text">I understand the importance of the backend, just check out above to see.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div class="card">
            <img src="./images/12-1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"><a href="../The-Tech-Academy-Basic-HTML-CSS-Projects/HTML-Projects/dog-days-index.html">HTML/CSS/JS</a></h5>
            <p class="card-text">Follow the link above to check out some of my projects involving web page development.</p>
            </div>
        </div>
        <div class="card">
            <img src="./images/13-1.png" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Python? Perfect!</h5>
            <p class="card-text">Python is a passion, check out my py projects above.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>

    <!--/Deck-->

    <!--Skills-->
    <style class="text/css">
    .row{
        margin-top: 30px;
        margin-bottom: 30px;
    }
    </style>

        <div id="Skills"></div>
    <div class="row">
        <div class="col-sm-6">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">Interpersonal Skills</h5>
                <p class="card-text">Sure you can code, but can you converse? Click below to learn about how I communicate with my team to make projects go smoother. </p>
                <a href="#" class="btn btn-primary">Communication</a>
            </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">Professional Skills</h5>
                <p class="card-text">You can talk the talk, but can you walk the walk? Check out how this developer struts his stuff by clicking below.</p>
                <a href="#" class="btn btn-primary">Code-munication</a>
            </div>
            </div>
        </div>
    </div>

    <!--/Skills-->

    <!--Footer-->
    <footer id="Contact">
        <div class="mkcontainer">
                <div class="ftext">
                        <h3 class="fheader">Am I the right fit for your company?</h3>
                        <p class="fpar">Reach out to me via e-mail or Linkin, still unsure? check out my Github for even more projects. </p>
                    </div>
            <div class="mklinks">
                <a class="mklink" href="..."><img src="./images/gmail-2.png"></a>
                <a class="mklink" href="https://www.linkedin.com/in/matthew-kunnari-b3b858124/"><img src="./images/linkedin.png"></a>
                <a class="mklink" href="https://github.com/mkunnari1"><img src="./images/github-button-1.png"></a>
            </div>
            
        </div>
    </footer>
    <!--/Footer-->











    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>

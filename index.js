
<html lang="en" class="full-height">
<meta charset="utf-8"/>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<style>

.intro-2 {
    background: url("https://static3.depositphotos.com/1000914/204/i/950/depositphotos_2040619-stock-photo-old-vintage-background.jpg")no-repeat center center;
    background-size: cover;
}
.btn .fa {
    margin-left: 3px;
}


h6 {
    line-height: 1.7;
}
.hm-gradient .full-bg-img {
    background: -moz-linear-gradient(45deg, rgba(42, 27, 161, 0.6), rgba(29, 210, 177, 0.6) 100%);
    background: -webkit-linear-gradient(45deg, rgba(42, 27, 161, 0.6), rgba(29, 210, 177, 0.6) 100%);
    background: -webkit-gradient(linear, 45deg, from(rgba(42, 27, 161, 0.6)), to(rgba(29, 210, 177, 0.6)));
    background: -o-linear-gradient(45deg, rgba(42, 27, 161, 0.6), rgba(29, 210, 177, 0.6) 100%);
    background: linear-gradient(to 45deg, rgba(42, 27, 161, 0.6), rgba(29, 210, 177, 0.6) 100%); 
}
@media (max-width: 450px) {
    .margins {
        margin-right: 1rem;
        margin-left: 1rem;
    }
}
@media (max-width: 740px) {
    .full-height,
    .full-height body,
    .full-height header,
    .full-height header .view {
        height: 1040px; 
    } 
}                    
                    
</style>

</head> 
    <body>                     

            <!--Intro Section-->
            <section class="view intro-2 hm-gradient">
            <div class="full-bg-img">
                    <div class="container flex-center">
                        <div class="row flex-center pt-5 mt-3">
                            <div class="col-md-6 text-center text-md-left margins">
                                <div class="jumbotron" align="center">
                                <h1 class="display-4" > Traditional Oil Lamp Web Portal </h1><br><br>
                                </div>
                                <p class="lead" style="color:white"> Please click the button as given in your e-mail. Thank you for participating our event and it is a honour for us. </p><br><br><hr class="my-4">

                                <div align="center">
                                <button class="btn btn-success btn-lg" id="butn1">Number 1</button><hr>
                                <button class="btn btn-success btn-lg" id="butn2">Number 2</button><hr>
                                <button class="btn btn-success btn-lg" id="butn3">Number 3</button><hr>
                                <button class="btn btn-success btn-lg" id="butn4">Number 4</button><hr>
                                <button class="btn btn-success btn-lg" id="butn5">Number 5</button><hr>
                                <button class="btn btn-success btn-lg" id="butn6">Number 6</button>
                                </div>
                                <br><br>
                                <p style="color:white"> This project is designed to fulfill the requirements of IoT module. 24/05/2018 </p> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </header>

    </body>
    <script>
    $('#butn1').click(function () {
        $.post('/page', {data:'1'}, function (resdata) {
          console.log(resdata);
          alert(JSON.stringify(resdata['response']));
      }, "json");
      $('#butn1').attr("disabled", true);
    });
    $('#butn2').click(function () {
        $.post('/page', {data:'2'}, function (resdata) {
          console.log(resdata);
          alert(JSON.stringify(resdata['response']));
      }, "json");
      $('#butn2').attr("disabled", true);
    });
    $('#butn3').click(function () {
        $.post('/page', {data:'3'}, function (resdata) {
          console.log(resdata);
          alert(JSON.stringify(resdata['response']));
      }, "json");
      $('#butn3').attr("disabled", true);
    });
    $('#butn4').click(function () {
        $.post('/page', {data:'4'}, function (resdata) {
          console.log(resdata);
          alert(JSON.stringify(resdata['response']));
      }, "json");
      $('#butn4').attr("disabled", true);
    });
    $('#butn5').click(function () {
        $.post('/page', {data:'5'}, function (resdata) {
          console.log(resdata);
          alert(JSON.stringify(resdata['response']));
      }, "json");
      $('#butn5').attr("disabled", true);
    });
    $('#butn6').click(function () {
        $.post('/page', {data:'6'}, function (resdata) {
          console.log(resdata);
          alert(JSON.stringify(resdata['response']));
      }, "json");
      $('#butn6').attr("disabled", true);
    });
</script>
</html>  
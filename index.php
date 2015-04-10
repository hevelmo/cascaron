<?php
include 'incorporate/db_connect.php';
//include 'incorporate/functions.php';
//sec_session_start();
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Virbac Export Sistema</title>
        <meta name="robots" content="noindex">
        <meta name='viewport' content='width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0' />
        <!-- <meta name="apple-mobile-web-app-capable" content="yes"> -->
        <meta name="Keywords" content="" >
        <meta name="Description" content="CRM" >
        <meta name="title" content="Virbac Export Sistema">
        <meta name="google-site-verification" content="" /> 
        <meta name="author" content="Medigraf">
        <!--<link rel="apple-touch-icon" href="img/apple-touch-icon.png" />-->
        <meta http-equiv="cache-control" content="no-cache" />
        <meta name="Copyright" content="Copyright VirbacExport 2014. All Rights Reserved.">
        <link href='img/favicon.ico' rel='shortcut icon' type='image/x-icon'/>
        <link rel="stylesheet" href="css/bootstrap.min.css"  />
        <link rel="stylesheet" href="css/main.css"  />  
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

         /* ga('create', 'UA-48423243-1', 'medigraf.com.mx');
          ga('send', 'pageview');*/

        </script>
    </head> 
    <body class="">
    <input type="hidden" id="idc-leng" >
    <div class="container">

      <form class="form-signin" action="process_login.php" method="post">
        <h2 class="form-signin-heading">
          <img src='img/virbac-header-logo.png' alt=''>
        </h2>
        <div class="login-wrap">
            <div class="user-login-info">
                <input type="text" class="form-control" name="email" placeholder="User" autofocus>
                <input type="password" class="form-control" placeholder="Password" name="password" id="password">
            </div>
            <label class="checkbox">
                <span class="pull-right">
                  <a data-toggle="modal" href="#myModal">Forgot Password?</a>
                </span>
            </label>
            <button class="btn btn-lg btn-login btn-block" style="text-transform:capitalize" 
                    type="submit" onclick="formhash(this.form, this.form.password);" >
              Sign In
            </button>

            <!-- <div class="row">
              <div class="container" style="text-align:center">
                  <div class="idc" data-idc="ESP">
                    <h4>
                     <span class="label label-primary">Español</span>
                   </h4>
                  </div>
           
                  <div class="idc" data-idc="EU">
                      <h4>
                       <span class="label label-primary">English</span>
                     </h4>
                  </div>
              </div>
            </div> -->

        </div>
      </form>

      <!-- Modal -->
      <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title">Forgot Password?</h4>
            </div>
            <div class="modal-body">
              <p>Enter your email address.</p>
              <input type="text" name="email" placeholder="usuario@virbac.com" autocomplete="off" class="form-control placeholder-no-fix">
            </div>
            <div class="modal-footer">
              <button data-dismiss="modal" class="btn btn-default" type="button">Cancel</button>
              <button class="btn btn-success" type="button">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <!-- modal -->

    </div>

    <!-- Placed js at the end of the document so the pages load faster -->

    <!--Core js-->
    <script src="lib/jquery-1.11.0.min.js"></script>
    <script src="lib/bootstrap.min.js"></script>
    
    <script type="text/JavaScript" src="lib/sha512.js"></script> 
    <script type="text/JavaScript" src="lib/forms.js"></script>

  </body>
</html>

<?php
/*
 * Copyright (C) 2015 Virbac México
 *
 */

include_once '../incorporate/db_connect.php';
include_once '../incorporate/functions.php';

sec_session_start();

/*
if (login_check() != true) {
    header('Location: ../');
}
*/
?>

<!DOCTYPE html>
<html lang='en'>
    <head id=''>
        <meta http-equiv='cache-control' content='no-cache' />
        <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
        <title>Project</title>
        <meta name='viewport' content='width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0' />
        <!-- <meta name='apple-mobile-web-app-capable' content='yes'> -->
        <meta name='Keywords' content='' >
        <meta name='Description' content='' >
        <meta name='title' content=''>
        <meta name='google-site-verification' content='' />
        <meta name='author' content='Medigraf'>
        <meta name='Copyright' content='Copyright Project 2015. All Rights Reserved.'>

        <link href='../img/favicon.ico' rel='shortcut icon' type='image/x-icon'/>
        <link rel='stylesheet' href='../css/bootstrap.min.css'  />
        <link rel='stylesheet' href='../css/main.css'  />

        <link rel="stylesheet" href="../css/alertify.core.css" />
        <link rel="stylesheet" href="../css/alertify.bootstrap.css" id="toggleCSS" />

        <link rel='stylesheet' href='../css/bootstrap-datetimepicker.min.css'  />

    </head>
    <body class='full-width'>

        <!-- Auxiliar Temporal Inputs's DIV -->
        <div id='hidden-inputs-session'></div>

        <!-- Auxiliar Temporal Inputs's DIV -->
        <div id='hidden-inputs-temporal'></div>

        <!--Templates's DIV-->
        <div class="wrapper_content_interactive" id='content-temporal-interactive'></div>

        <!-- Placed js at the end of the document so the pages load faster -->

        <!--Core js-->
        <script src='../lib/jquery-1.11.0.min.js'></script>
        <script src='../lib/jquery.gdb.min.js'></script>
        <script src='../lib/jquery-ui.js'></script>
        <script src='../lib/underscore-min.js'></script>
        <script src="../lib/handlebars.runtime.min.js"></script>
        <script src='../templates/min/templates.min.js'></script>
        <script src='../lib/moment.js'></script>
        <script src='../lib/accounting.min.js'></script>
        <script src='../lib/bootstrap-datetimepicker.min.js'></script>
        <script src='../lib/finch.min.js'></script>
        <script src='../lib/transitions.js'></script>
        <script src='../lib/collapse.js'></script>
        <script src='../lib/bootstrap.min.js'></script>
        <script src="../lib/alertify.min.js"></script>
        <script src="../lib/sha512.js"></script>
        <script src='../lib/hover-dropdown.js'></script>

        <!--
        <script src='../js/min/core.min.js'></script>
        -->
        <!--
        -->
        <script src='../js/objects.js'></script>
        <script src='../js/method.js'></script>
        <script src='../js/model.js'></script>
        <script src='../js/room.js'></script>
        <script src='../js/main.js'></script>

    </body>

</html>


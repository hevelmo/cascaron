<?php
/*
 * Copyright (C) 2015 CAMCAR Administrador
 *
 */
/*
include_once '../../incorporate/db_connect.php';
include_once '../../incorporate/functions.php';

sec_session_start();

if (login_check($mysqli) != true) {
    header('Location: ../../');
}*/
?>

<!DOCTYPE html>
<html lang='en'>
    <head id=''>
        <meta http-equiv='cache-control' content='no-cache' />
        <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
        <title>CAMCAR Administrador</title>
        <meta name='viewport' content='width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0' />
        <!-- <meta name='apple-mobile-web-app-capable' content='yes'> -->
        <meta name='Keywords' content='' >
        <meta name='Description' content='' >
        <meta name='title' content=''>
        <meta name='google-site-verification' content='' />
        <meta name='author' content='Medigraf'>
        <meta name='Copyright' content='Copyright CAMCAR Administrador 2015. All Rights Reserved.'>
        <link id="favicon" href='../img/favicon.ico' rel='shortcut icon' type='image/x-icon'/>
        <link rel='stylesheet' href='../css/bootstrap.min.css'  />
        <link rel='stylesheet' href='../css/main.css'  />
        <link rel="stylesheet" href="../css/styles_tables.css"  />

        <link rel="stylesheet" href="../css/alertify.core.css" />
        <link rel="stylesheet" href="../css/alertify.bootstrap.css" id="toggleCSS" />

        <link rel='stylesheet' href='../css/bootstrap-datetimepicker.min.css'  />

        <link rel="stylesheet" href="css/cssload/style.css">
        <!-- CSS to style the file input field as button and adjust the Bootstrap progress bars -->
        <link rel="stylesheet" href="css/cssload/jquery.fileupload.css">


        <!--Morris Chart CSS -->
        <link rel="stylesheet" href="../lib/morris-chart/morris.css">

    </head>
    <body class='full-width'>
        <!--
        <input type='hidden' id='idc_core' value="<?php //echo htmlentities($_SESSION['idioma']);?>">
        <input type='hidden' id='usr-current' value="<?php //echo htmlentities($_SESSION['name']);?>">
        -->
        <section id='container' class='hr-menu'>
            <!--header start-->
            <header class='header fixed-top'>
                <div class='navbar-header'>

                    <button type='button' class='navbar-toggle hr-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span class='fa fa-bars'></span>
                    </button>

                    <!-- panel start -->
                    <div class='top-nav hr-top-nav'>
                        <ul class='nav pull-right top-menu'>
                            <!-- <li>
                                <input type='text' class='form-control search' placeholder='Search'>
                            </li> -->
                            <!-- user login dropdown start-->
                            <li class='dropdown'>
                                <a data-toggle='dropdown' class='dropdown-toggle' href='#'>

                                    <!--
                                    <img id='userAvatar' alt='' src=''>
                                    -->

                                    <img id='userAvatar' alt='' src='img/admin_log.jpg'>

                                    <!--
                                    <span class='username'><?php //echo htmlentities($_SESSION['username']); ?></span>
                                    -->
                                    <!--
                                    <span class='username'><?php //echo htmlentities('Asesor'); ?></span>
                                    <b class='caret'></b>
                                    -->
                                </a>
                                <ul class='dropdown-menu extended logout'>
                                    <li>
                                        <a href='../logout/' class="js-salir tra-opt-logout">
                                            Cerrar Sessión
                                            <i class='fa fa-key js-salir'></i>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <!-- user login dropdown end -->
                        </ul>
                    </div>
                    <!-- panel end -->

                    <!--logo start-->
                    <div class='brand '>
                        <a href='' class='logo'>
                            <img src='img/logo_camcar.png' alt=''>
                        </a>
                    </div>
                    <!--logo end-->

                    <!--menu start-->
                    <div class='horizontal-menu navbar-collapse collapse '>
                        <ul class='nav navbar-nav'>
                            <li class='active2 hover_resp'>
                                <a href='' class=''>Inicio</a>
                            </li>

                            <li class='dropdown hover_resp'>
                                <a data-toggle='dropdown' data-hover='dropdown' class='dropdown-toggle' href=''>
                                    Seminuevos
                                    <b class='caret'></b>
                                </a>
                                <ul class='dropdown-menu'>
                                    <li>
                                        <a href='#/new/seminuevos' class="">
                                            Nuevo
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#/seminuevos' class="">
                                            Listado
                                        </a>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    <!--menu end-->
                </div>
            </header>
            <!--header end-->
            <!--sidebar start-->

            <!--sidebar end-->
            <!--main content start-->
            <section id='main-content'>

                <section class='wrapper'>

                    <div class='row'>
                        <div class='col-sm-12 col-md-12 image_carrusel'>
                            <!--<img src='img/header/banner/banner-export6.jpg' class='img-responsive'>-->
                            <img src='' class='img-responsive' id='img-banner'>
                        </div>
                    </div>

                    <!-- Auxiliar Temporal Inputs's DIV -->
                    <div id='hidden-inputs-session'></div>

                    <!-- Auxiliar Temporal Inputs's DIV -->
                    <div id='hidden-inputs-temporal'></div>

                    <!--Templates's DIV-->
                    <div class="wrapper_content_interactive" id='content_temporal_interactive'></div>

                    <!-- page end-->
                </section>

            </section>
            <!--main content end-->

        </section>

        <!-- Placed js at the end of the document so the pages load faster -->

        <!--Core js-->
        <script src='lib/jquery-1.11.0.min.js'></script>
        <script src='lib/jquery.gdb.min.js'></script>
        <script src='lib/jquery-ui.js'></script>
        <script src='lib/underscore-min.js'></script>
        <script src='lib/handlebars.runtime.min.js'></script>
        <script src='templates/min/templates.min.js'></script>
        <script src='lib/moment.js'></script>
        <script src='lib/accounting.min.js'></script>
        <script src='lib/bootstrap-datetimepicker.min.js'></script>
        <script src='lib/finch.min.js'></script>
        <script src='lib/transitions.js'></script>
        <script src='lib/collapse.js'></script>
        <script src='lib/bootstrap.min.js'></script>
        <script src='lib/alertify.min.js'></script>
        <script src='lib/sha512.js'></script>
        <script src='lib/hover-dropdown.js'></script>

        <!--Easy Pie Chart-->
        <script src='lib/easypiechart/jquery.easypiechart.js'></script>

        <!--Sparkline Chart-->
        <script src='lib/sparkline/jquery.sparkline.js'></script>

        <!--Morris Chart-->
        <script src='lib/morris-chart/morris.js'></script>
        <script src='lib/morris-chart/raphael-min.js'></script>

        <!--jQuery Flot Chart-->
        <script src='lib/flot-chart/jquery.flot.js'></script>
        <script src='lib/flot-chart/jquery.flot.tooltip.min.js'></script>
        <script src='lib/flot-chart/jquery.flot.resize.js'></script>
        <script src='lib/flot-chart/jquery.flot.pie.resize.js'></script>
        <script src='lib/flot-chart/jquery.flot.animator.min.js'></script>
        <script src='lib/flot-chart/jquery.flot.growraf.js'></script>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script src="jsload/vendor/jquery.ui.widget.js"></script>
        <script src="jsload/jquery.iframe-transport.js"></script>
        <script src="jsload/jquery.fileupload.js"></script>


        <script src='js/min/core.min.js'></script>
        <!--<script src='js/objects.js'></script>
        <script src='js/method.js'></script>
        <script src='js/model.js'></script>
        <script src='js/room.js'></script>
        <script src='js/main.js'></script>-->
    </body>

</html>


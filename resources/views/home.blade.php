<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        {{-- <meta name="locale" content="{{ App::getLocale() }}"/> --}}
        <title>TPACK</title>
        <base href="{{ asset('') }}">
        <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"> -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,700" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/0.7.3/tailwind.min.css">
        <link rel="shortcut icon" href="/images/favicon.ico" />

        <link rel="stylesheet" href="assets/css/login/main.css">
        <link rel="stylesheet" href="assets/font-awesome/css/font-awesome.css">
        <link rel="stylesheet" href="assets/css/login/util.css">
        <link rel="stylesheet" href="assets/css/jquery-comments.css">
        <link rel="stylesheet" href="css/styles.css">

        <!-- <link href="//unpkg.com/viewerjs/dist/viewer.css" rel="stylesheet"> -->

        <link href="{{ mix('css/app.css') }}" type="text/css" rel="stylesheet" />
        <!-- include the style alertify-->
        <link rel="stylesheet" href="bower_components/alertifyjs/css/alertify.min.css" />
        <!-- include a theme alertify-->
        <link rel="stylesheet" href="bower_components/alertifyjs/css/themes/default.min.css" />
        <meta name="csrf-token" content="{{ csrf_token() }}" />
    </head>
    <body>
        <div id="app">
          <div id="progress-bar"></div>
          <example-component></example-component>
        </div>

        <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
        {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.js"></script> --}}
        <script src="assets/js/wow.js"></script>
        <script>
             new WOW().init();
        </script>

        <!-- Admin -->
        <script src="assets/js/moment.min.js"></script>
        <script src="assets/js/detect.js"></script>
        <script src="assets/js/fastclick.js"></script>
        <script src="assets/js/jquery.blockUI.js"></script>
        <script src="assets/js/jquery.nicescroll.js"></script>
        <script src="assets/js/jquery.scrollTo.min.js"></script>
        
        <!-- <script src="//unpkg.com/viewerjs/dist/viewer.js"></script>
        <script src="//unpkg.com/v-viewer/dist/v-viewer.js"></script> -->
        
        <!-- <script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script> -->
        {{-- <script src="https://cdn.datatables.net/1.10.16/js/dataTables.bootstrap4.min.js"></script>    --}}

        <script src="assets/js/pikeadmin.js"></script>

         <!-- include a js alertify-->
        <!-- <script src="bower_components/alertifyjs/alertify.min.js"></script> -->
        <!-- tinymce -->
        <!-- <script src='bower_components/tinymce/tinymce.js'></script>         -->



        

        
        
    </body>
</html>

<script>
    window.Laravel = <?php echo json_encode([
        'csrfToken' => csrf_token(),
    ]); ?>
</script>

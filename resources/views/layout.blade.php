<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="author" content="rendi dwi kurniasandi" />
    <meta name="description" content="Website ini adalah pengaduan dan saran untuk 17 tujuan SDGs">
    <!-- Document title -->
    <title>PERAN | PENgaduan dan saRAN</title>
    <!-- Stylesheets & Fonts -->
    <link href="{{ asset('') }}css/plugins.css" rel="stylesheet">
    <link href="{{ asset('') }}css/style.css" rel="stylesheet">
    {{-- owner css --}}
    <style>
        .logo-dark::after{
            content: unset !important;
        }
        .logo-dark::before{
            content: unset !important;
        }
        .logo-default::after{
            content: unset !important;
        }
        .logo-default::before{
            content: unset !important;
        }
        .grid-system-demo .row .col-lg-2 img{
            width: 100%
        }
    </style>
</head>

<body>
    <!-- Body Inner -->
    <div class="body-inner">
        <!-- Header -->
        <header id="header" class="dark submenu-light">
            <div class="header-inner">
                <div class="container">
                    <!--Logo-->
                    <div id="logo">
                        <a href="{{ url('/') }}">
                            <span class="logo-default">PERAN</span>
                            <span class="logo-dark">PERAN</span>
                        </a>
                    </div>
                    <!--End: Logo-->
                    <!--Navigation Resposnive Trigger-->
                    <div id="mainMenu-trigger">
                        <a class="lines-button x"><span class="lines"></span></a>
                    </div>
                    <!--end: Navigation Resposnive Trigger-->
                    <!--Navigation-->
                    <div id="mainMenu">
                        <div class="container">
                            <nav>
                                <ul>
                                    <li><a href="{{ url('/') }}">Home</a></li>
                                    <li><a href="{{ url('/aduan') }}">Pengaduan</a></li>
                                    <li><a href="{{ url('/saran') }}">Saran</a></li>
                                    @if (auth()->check())
                                    <li><a href="{{ url('/dasboard') }}">Dasboard</a></li>
                                    @endif
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <!--end: Navigation-->
                </div>
            </div>
        </header>
        <!-- end: Header -->
        @yield('content')
        <!-- Footer -->
        <footer id="footer">
            <div class="footer-content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="widget">
                                <div class="widget-title">PERAN</div>
                                <p class="mb-5">PERAN adalah sebuah website untuk <br>
                                    mencapai tujuan 17 SDGs dengan cara pengajuan dan saran.</p>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="row" style="justify-content: end;">
                                <div class="col-lg-3">
                                    <div class="widget">
                                        <div class="widget-title">Halaman</div>
                                        <ul class="list">
                                            <li><a href="{{ url('aduan') }}">Pengajuan</a></li>
                                            <li><a href="{{ url('saran', []) }}">Saran</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-content">
                <div class="container">
                    <div class="copyright-text text-center">&copy; 2020 PERAN - PEngaduan dan saRAN.
                        By.<a href="http://www.instagram.com/r3ndks" target="_blank"> Rendi Dwi Kurniasandi</a> </div>
                </div>
            </div>
        </footer>
        <!-- end: Footer -->
    </div>
    <!-- end: Body Inner -->
    <!-- Scroll top -->
    <a id="scrollTop"><i class="icon-chevron-up"></i><i class="icon-chevron-up"></i></a>
    <!--Plugins-->
    <script src="{{ asset('') }}js/jquery.js"></script>
    <script src="{{ asset('') }}js/plugins.js"></script>
    <!--Template functions-->
    <script src="{{ asset('') }}js/functions.js"></script>
</body>

</html>
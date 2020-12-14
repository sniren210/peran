@extends('layout')

@section('content')
        <!-- Inspiro Slider -->
        <div id="slider" class="inspiro-slider slider-fullscreen dots-creative">
            <!-- Slide 1 -->
            <div class="slide kenburns" data-bg-image="{{ asset('./img/slider1.jpg') }}">
                <div class="bg-overlay"></div>
                <div class="container">
                    <div class="slide-captions text-center text-light">
                        <!-- Captions -->
                        <h2>SELAMAT DATANG DI PERAN</h2>
                        <p>Mari kita semua saya kamu dan kita mewujudkan 17 SDGs agar hidup lebih sejahtera.</p>
                        <!-- end: Captions -->
                    </div>
                </div>
            </div>
            <!-- end: Slide 1 -->
            <!-- Slide 2 -->
            <div class="slide kenburns" data-bg-image="{{ asset('./img/slider2.jpg') }}">
                <div class="bg-overlay"></div>
                <div class="container">
                    <div class="slide-captions text-left text-light">
                        <!-- Captions -->
                        <h2>Pengaduan dan Saran</h2>
                        <p class="text-small">Aduan teman-teman bisa membantu kita dan anda sendiri dapat melakukannya sendiri dengan saran dari kami.</p>
                        <!-- end: Captions -->
                    </div>
                </div>
            </div>
            <!-- end: Slide 2 -->
        </div>
        <!--end: Inspiro Slider -->
            <!-- SERVICES -->
        <section>
            <div class="container">
                <div class="heading-text heading-section text-center">
                    <h2>17 SDGs</h2>
                    <p>Tujuan Pembangunan Berkelanjutan atau dalam bahasa Inggris dikenal sebagai Sustainable Development Goals disingkat dengan SDGs.
                    </p>
                </div>
                <div class="grid-system-demo">
                    <div class="row">
                        <div class="col-lg-2" data-animate="fadeInUp" data-animate-delay="0">
                            <img src="{{ asset('./img/SGPs/icon-1.png') }}" class="img-fluid rounded" alt="icon1">
                        </div>
                        <div class="col-lg-2" data-animate="fadeInUp" data-animate-delay="200">
                            <img src="{{ asset('./img/SGPs/icon-2.png') }}" class="img-fluid rounded" alt="icon2">
                        </div>
                        <div class="col-lg-2" data-animate="fadeInUp" data-animate-delay="400">
                            <img src="{{ asset('./img/SGPs/icon-3.png') }}" class="img-fluid rounded" alt="icon3">
                        </div>
                        <div class="col-lg-2" data-animate="fadeInUp" data-animate-delay="600">
                            <img src="{{ asset('./img/SGPs/icon-4.png') }}" class="img-fluid rounded" alt="icon4">
                        </div>
                        <div class="col-lg-2" data-animate="fadeInUp" data-animate-delay="800">
                            <img src="{{ asset('./img/SGPs/icon-5.png') }}" class="img-fluid rounded" alt="icon5">
                        </div>
                        <div class="col-lg-2" data-animate="fadeInUp" data-animate-delay="1000">
                            <img src="{{ asset('./img/SGPs/icon-6.png') }}" class="img-fluid rounded" alt="icon6">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-2" data-animate="fadeInUp" data-animate-delay="1200">
                            <img src="{{ asset('./img/SGPs/icon-7.png') }}" class="img-fluid rounded" alt="icon7">
                        </div>
                        <div class="col-lg-2" data-animate="fadeInUp" data-animate-delay="1400">
                            <img src="{{ asset('./img/SGPs/icon-8.png') }}" class="img-fluid rounded" alt="icon8">
                        </div>
                        <div class="col-lg-2" data-animate="fadeInUp" data-animate-delay="1600">
                            <img src="{{ asset('./img/SGPs/icon-9.png') }}" class="img-fluid rounded" alt="icon9">
                        </div>
                        <div class="col-lg-2" data-animate="fadeInUp" data-animate-delay="0">
                            <img src="{{ asset('./img/SGPs/icon-10.png') }}" class="img-fluid rounded" alt="icon10">
                        </div>
                        <div class="col-lg-2" data-animate="fadeInUp" data-animate-delay="200">
                            <img src="{{ asset('./img/SGPs/icon-11.png') }}" class="img-fluid rounded" alt="icon12">
                        </div>
                        <div class="col-lg-2" data-animate="fadeInUp" data-animate-delay="400">
                            <img src="{{ asset('./img/SGPs/icon-12.png') }}" class="img-fluid rounded" alt="icon13">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-1"></div>
                        <div class="col-lg-2" data-animate="fadeInUp" data-animate-delay="600">
                            <img src="{{ asset('./img/SGPs/icon-13.png') }}" class="img-fluid rounded" alt="icon14">
                        </div>
                        <div class="col-lg-2" data-animate="fadeInUp" data-animate-delay="800">
                            <img src="{{ asset('./img/SGPs/icon-14.png') }}" class="img-fluid rounded" alt="icon15">
                        </div>
                        <div class="col-lg-2" data-animate="fadeInUp" data-animate-delay="1000">
                            <img src="{{ asset('./img/SGPs/icon-15.png') }}" class="img-fluid rounded" alt="icon16">
                        </div>
                        <div class="col-lg-2" data-animate="fadeInUp" data-animate-delay="1200">
                            <img src="{{ asset('./img/SGPs/icon-16.png') }}" class="img-fluid rounded" alt="icon17">
                        </div>
                        <div class="col-lg-2" data-animate="fadeInUp" data-animate-delay="1400">
                            <img src="{{ asset('./img/SGPs/icon-17.png') }}" class="img-fluid rounded" alt="icon17">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end: SERVICES -->
@endsection
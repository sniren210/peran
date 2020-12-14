@extends('layout_admin')

@section('content')
    <section id="page-content">
        <div class="container">
            <div class="row">
                <div class="col-4 dasboard">
                    <div class="text-box hover-effect text-dark" style="height: 343.667px;">
                        <a href="#"> <i class="far fa-lightbulb"></i>
                            <h3>Jumlah Penanya</h3>
                            <p>{{$nanya}}</p>
                        </a>
                    </div>
                </div>
                <div class="col-4 dasboard">
                    <div class="text-box hover-effect text-dark" style="height: 343.667px;">
                        <a href="#"> <i class="fa fa-paper-plane"></i>
                            <h3>Jumlah Saran</h3>
                            <p>{{$saran}} </p>
                        </a>
                    </div>
                </div>
                <div class="col-4 dasboard">
                    <div class="text-box hover-effect text-dark" style="height: 343.667px;">
                        <a href="#"> <i class="fa fa-chart-pie"></i>
                            <h3>Jumlah Pengaduan</h3>
                            <p>{{$aduan}} </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Page Content -->
    {{-- <section id="page-content">
        <div class="container">
            <div class="row">
                <!-- content -->
                <div class="content col-lg-12">
                    <div class="row">
                        <div class="col-lg-6">
                            <h4>Chart Aduan Dan Saran</h4>
                        </div>
                    </div>
                    <!-- chart -->
                    <canvas id="canvas"></canvas>
                </div>
                <!-- end: content -->
            </div>
        </div>
    </section> --}}
    <!-- end: Page Content -->
@endsection

{{-- @section('javascript')
    <!-- charts.js component-->
    <script src="plugins/chartjs/chart.min.js"></script>
    <script src="plugins/chartjs/utils.js"></script>
    <script src="plugins/moment/moment.min.js"></script>
    <script>
        var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
            'November', 'December'
        ];
        var color = Chart.helpers.color;
        var barChartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Pengaduan',
                backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
                borderColor: window.chartColors.red,
                borderWidth: 1,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }, {
                label: 'Saran',
                backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
                borderColor: window.chartColors.blue,
                borderWidth: 1,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }]
        };
        window.onload = function () {
            var ctx = document.getElementById('canvas').getContext('2d');
            window.myBar = new Chart(ctx, {
                type: 'bar',
                data: barChartData,
                options: {
                    responsive: true,
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Chart'
                    }
                }
            });
        };
    </script>
@endsection --}}
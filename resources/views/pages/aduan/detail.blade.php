@extends('layout_admin')

@section('content')
    <div id="page-content">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <img class="card-img-top" src="{{ asset('/img/bukti') }}/{{ $aduan['foto']}} " alt="Card image cap">
                </div>
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Nama : {{$aduan['nama']}}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Email : {{$aduan->email}} </h6>
                            <h6 class="card-subtitle mb-2 text-muted">Tujuan SDGs : {{$aduan->sdgs->SDGs}} </h6>
                            <p class="card-text">Wilayah : {{$aduan['wilayah']}} </p>
                            <a href="{{ url('/hasil_aduan') }}" class="card-link">
                                <i class="icon-chevron-left"> </i>
                                Kembali
                            </a>
                        </div>
                        <div class="card-footer text-muted">
                            {{$aduan['tanggal']}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
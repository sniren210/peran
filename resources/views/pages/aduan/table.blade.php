@extends('layout_admin')

@section('content')
        <!-- Page Content -->
        <section id="page-content">
            <div class="container">
                <div class="row">
                    <div class="content col-lg-12">
                        <h4>Tabel Aduan</h4>
                        <div class="table-responsive mt-4">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Email</th>
                                        <th>Nama</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($aduan as $data)                                        
                                    <tr>
                                        <td>{{ $loop->iteration}} </td>
                                        <td>{{ $data['nama']}}</td>
                                        <td>{{ $data['email']}} </td>
                                        <td>
                                            <a href="{{ url('/detail_aduan', [$data['id']]) }}" class="badge badge-info">Detail</a>
                                        </td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end: Page Content -->
@endsection
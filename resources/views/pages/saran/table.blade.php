{{-- @foreach ($saranJawab as $data )

@endforeach
{{$data->tanya}}
{{dd($data)}} --}}
@extends('layout_admin')

@section('content')
            <!-- Page Content -->
        <section id="page-content">
            <div class="container">
                <div class="row">
                    @if (session('status'))                        
                    <div class="col-lg-12">
                        <div role="alert" class="alert alert-success alert-dismissible">
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span> 
                            </button>
                            <strong><i class="fa fa-check-circle"></i> Success</strong> {{session('status')}}  
                        </div>
                    </div>
                    @endif
                    <div class="content col-lg-12">
                        <h4>Tabel Saran</h4>
                        <a href="{{ url('/saran/create') }}" class="btn">Buat Saran</a>
                        <div class="table-responsive mt-4">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Pertanyaan Saran</th>
                                        <th>Jawaban Saran</th>
                                        <th>Tujuan SDGs</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($saranJawab as $data)
                                    {{dd($data->sdgs)}}
                                    <tr>
                                        <td>{{$loop->iteration}} </td>
                                        <td>{{ $data->tanya}} </td>
                                        <td>{{ $data->jawab}} </td>
                                        <td>{{ $data->sdgs->SDGs}} </td>
                                        <td>
                                            <a href="{{ route('saran/edit', [$data->id]) }}" class="badge badge-success">Edit</a>
                                            <a class="badge badge-danger text-light" data-target="#modal{{$data->id}}" data-toggle="modal" href="">Hapus</a>
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
        <!--Modal -->
        @foreach ($saranJawab as $data)            
        <div class="modal fade" id="modal{{$data->id}}" tabindex="-1" role="modal" aria-labelledby="modal-label" aria-hidden="true" style="display: none;">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="modal-label">Modal hapus</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12">
                                <p>Yakin ingin menghapus saran ({{$data->tanya}}) ?</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
                        <form action="{{ route('saran/hapus', [$data->id]) }}" method="POST">
                            @csrf
                            @method('delete')
                            <button type="submit" class="btn btn-danger">Hapus</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        @endforeach
        <!-- end: Modal -->
@endsection
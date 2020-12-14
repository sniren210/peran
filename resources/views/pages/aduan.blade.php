@extends('layout')

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
                    <div class="card col-lg-12">
                        <div class="card-body">
                            <h3>Halaman Pengaduan</h3>
                            <form method="POST" action="{{ route('aduan') }}" enctype="multipart/form-data">
                                @csrf
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Email Pengadu</label>
                                    <input type="email" class="form-control {{ $errors->has('email') ? 'is-invalid' : ''}}" id="exampleFormControlInput1" placeholder="nama@contoh.com" name="email" value="{{ old('email')}}">
                                    @if ($errors->has('email'))
                                        <div class="is-invalid">
                                            {{$errors->first('email')}}
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="nama">Nama Pengadu</label>
                                    <input type="text" class="form-control {{ $errors->has('nama') ? 'is-invalid' : ''}}" id="nama" name="nama" value="{{ old('nama')}}">
                                    @if ($errors->has('nama'))
                                        <div class="is-invalid">
                                            {{$errors->first('nama')}}
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Tujuan SDGs</label>
                                    <select class="form-control {{ $errors->has('sdgs') ? 'is-invalid' : ''}}" id="exampleFormControlSelect1" name="sdgs">
                                        @foreach ($sdgs as $data)
                                            <option value="{{$data['id']}}">{{ $loop->iteration }}.{{ $data['SDGs']}} </option>
                                        @endforeach
                                    </select>
                                    @if ($errors->has('sdgs'))
                                        <div class="is-invalid">
                                            {{$errors->first('sdgs')}}
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Alamat Wilayah </label>
                                    <textarea name="wilayah" class="form-control {{ $errors->has('wilayah') ? 'is-invalid' : ''}}" id="exampleFormControlTextarea1" rows="3">{{ old('wilayah')}}</textarea>
                                    @if ($errors->has('wilayah'))
                                        <div class="is-invalid">
                                            {{$errors->first('wilayah')}}
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlFile1">Bukti Foto</label>
                                    <input type="file" class="form-control-file {{ $errors->has('foto') ? 'is-invalid' : ''}}" id="exampleFormControlFile1" name="foto">
                                    @if ($errors->has('foto'))
                                        <div class="is-invalid">
                                            {{$errors->first('foto')}}
                                        </div>
                                    @endif
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end: Page Content -->
@endsection
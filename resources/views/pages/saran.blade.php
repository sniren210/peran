@extends('layout')

@section('content')
        <!-- Page Content -->
        <section id="page-content">
            <div class="container">
                <div class="row">
                    <div class="card col-lg-12">
                        <div class="card-body">
                            <h3>Halaman Saran</h3>
                            <form action="{{ route('saran') }}" method="POST">
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
                                    <select class="form-control" id="exampleFormControlSelect1" name="sdgs">
                                        @foreach ($sdgs as $data)                                            
                                        <option value="{{$data->id}} ">{{$loop->iteration}}.{{ $data->SDGs}} </option>
                                        @endforeach
                                    </select>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end: Page Content -->
        {{-- according --}}
        @if ($jawab)
        <section id="page-content">
            <div class="container">
                <div class="row">
                    <div class="content col-lg-12">
                        <!-- Accordion -->
                        @foreach ($jawab as $data)    
                        <h4>Jawaban Saran dari Tujuan SDGs {{$data->sdgs->SDGs}} </h4>
                        <div class="accordion">
                            <div class="ac-item">
                                <h5 class="ac-title"> {{$data->tanya}} </h5>
                                <div class="ac-content">
                                    {{$data->jawab}}
                                </div>
                            </div>
                        </div>
                        @endforeach
                        <!-- end: Accordion -->
                    </div>
                </div>
            </div>
        </section>
        @endif
        {{-- end according --}}
@endsection
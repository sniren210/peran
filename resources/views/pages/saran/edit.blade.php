@extends('layout_admin')

@section('content')
        <!-- Page Content -->
        <section id="page-content">
            <div class="container">
                <div class="row">
                    <div class="card col-lg-12">
                        <div class="card-body">
                            <h3>Halaman Edit Pengaduan</h3>
                            <form method="POST" action="{{ route('saran/update', $saran_jawab->id) }}">
                                @csrf
                                @method('put')
                                 <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Pertanyaan</label>
                                    <textarea class="form-control {{$errors->has('tanya') ? 'is-invalid' : ''}}" id="exampleFormControlTextarea1" rows="3" name="tanya">{{$saran_jawab->tanya}}</textarea>
                                    @if ($errors->has('tanya'))
                                        <div class="is-invalid">
                                            {{$errors->first('tanya')}}
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Jawaban</label>
                                    <textarea class="form-control {{$errors->has('jawab') ? 'is-invalid' : ''}}" id="exampleFormControlTextarea1" rows="3" name="jawab">{{$saran_jawab->jawab}}</textarea>
                                    @if ($errors->has('jawab'))
                                        <div class="is-invalid">
                                            {{$errors->first('jawab')}}
                                        </div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Tujuan SDGs</label>
                                    <select class="form-control" id="exampleFormControlSelect1" name="sdgs">
                                        @foreach ($sdgs as $data)                                            
                                        <option @if ($data->id == $saran_jawab->sdgs_id) {{'selected'}} @endif value="{{$data->id}} ">{{$loop->iteration}}.{{ $data->SDGs}} </option>
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
@endsection
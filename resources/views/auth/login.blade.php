@extends('layout')

@section('content')    
<!-- Section -->
<section class="fullscreen" data-bg-parallax="{{ asset('') }}img/bg.jpg">
    <div class="container" style="margin-bottom: 35vh">
        <div>
            <div class="row">
                <div class="col-lg-5 center p-50 background-white b-r-6">
                    <h3>Login Admin</h3>
                    <form method="POST" action="{{ route('login')}} ">
                        @csrf
                        <div class="form-group">
                            <label class="sr-only">Email</label>
                            <input value="{{old('email')}}" type="text" class="form-control {{ $errors->has('email') ? ' is-invalid' : '' }}" placeholder="Isi Email" autofocus name="email" autocomplete="off">
                            @if ($errors->has('email'))
                                <div class="is-invalid">
                                    {{$errors->first('email')}}
                                </div>
                            @endif
                        </div>
                        <div class="form-group m-b-5 mt-3">
                            <label class="sr-only">Password</label>
                            <input type="password" class="form-control {{ $errors->has('passwrod') ? ' is-invalid' : '' }}" placeholder="Password" name="password">
                            @if ($errors->has('password'))
                                <div class="is-invalid">
                                    {{$errors->first('password')}}
                                </div>
                            @endif
                        </div>
                        <div class="text-left form-group mt-3">
                            <button type="submit" class="btn">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- end: Section -->
@endsection
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Saran_jawab;
use App\Saran;
use App\aduan;

class DasboardController extends Controller
{
    //
    public function index()
    {
        $data =[
            'nanya' => Saran::count(),
            'saran' => Saran_jawab::count(),
            'aduan' => aduan::count()
        ];
        return view('pages.dasboard',$data);
    }
}

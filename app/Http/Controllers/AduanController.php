<?php

namespace App\Http\Controllers;

use App\Aduan;
use Illuminate\Http\Request;

use App\sdgs;

class AduanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = [
            'aduan' => Aduan::all()
        ];
        //
        return view('pages.aduan.table', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $data = [
            'sdgs' => sdgs::all()
        ];
        return view('pages.aduan', $data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $messages = [
            'required' => 'Form harus di isi',
            'email' => 'Harus di isi email',
            'email.unique' => 'Email sudah di pakai',
            'nama.unique' => 'nama sudah di pakai',
            'image' => 'file harus gambar',
            'mimes' => 'file harus jpeg,jpg,png',
            'file' => 'harus input file'
        ];
        //
        $request->validate([
            'email' => 'required|email|unique:aduan,email',
            'nama' => 'required|unique:aduan,nama',
            'wilayah' => 'required',
            'sdgs' => 'required',
            'foto' => 'required|file|image|mimes:jpeg,png,jpg'
        ], $messages);

        $data = $request->all();
        $data['foto']->originalName = time() . '_' . $data['foto']->getClientOriginalName();

        $data['foto']->move('img/bukti', $data['foto']->originalName);

        // dd($data['sdgs']);
        Aduan::create([
            'nama' => $data['nama'],
            'email' => $data['email'],
            'wilayah' => $data['wilayah'],
            'tanggal' => date("d-M-y"),
            'sdgs_id' => $data['sdgs'],
            'foto' => $data['foto']->originalName,
        ]);

        return redirect('/aduan')->with('status', 'Aduan Berhasil di Ajukan.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Aduan  $aduan
     * @return \Illuminate\Http\Response
     */
    public function show(Aduan $aduan)
    {
        //
        $data  = [
            'aduan' => $aduan
        ];
        return view('pages.aduan.detail', $data);
    }
}

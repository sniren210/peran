<?php

namespace App\Http\Controllers;

use App\Saran;
use Illuminate\Http\Request;

use App\sdgs;
use App\Saran_jawab;

class SaranController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $data = [
            'saranJawab' => Saran_jawab::all()
        ];

        return view('pages.saran.table',$data);
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

        return view('pages.saran.create',$data);
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
            'required' => 'Form harus di isi'
        ];
        //
        $request->validate([
            'tanya' => 'required',
            'jawab' => 'required',
        ], $messages);

        $data = $request->all();
        
        saran_jawab::create([
            'tanya' => $data['tanya'],
            'jawab' => $data['jawab'],
            'sdgs_id' => $data['sdgs'],
        ]);

        return redirect('/saran/table')->with('status', 'Saran Berhasil di Buat.');
    }

        /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Saran  $saran
     * @return \Illuminate\Http\Response
     */
    public function edit($saran_jawab)
    {
        //
        $data = [
            'sdgs' => sdgs::all(),
            'saran_jawab' =>  Saran_jawab::find($saran_jawab)
        ];

        return view('pages.saran.edit',$data);
    }

        /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Saran  $saran
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $data = Saran_jawab::find($id);

        $messages = [
            'required' => 'Form harus di isi'
        ];
        //
        $request->validate([
            'tanya' => 'required',
            'jawab' => 'required',
        ], $messages);

        Saran_jawab::where('id', $data->id)->update([
            'tanya' => $request->tanya,
            'jawab' => $request->jawab,
            'sdgs_id' => $request->sdgs,
        ]);

        return redirect('/saran/table')->with('status', 'Saran Berhasil di Edit.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Saran  $saran
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        Saran_jawab::destroy($id);
        return redirect('/saran/table')->with('status','Saran berhasil dihapus.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Saran  $saran
     * @return \Illuminate\Http\Response
     */
    public function create_saran($jawab = null)
    {
        //
        $data = [
            'sdgs' => sdgs::all(),
            'jawab' =>  $jawab
        ];

        return view('pages.saran',$data);
    }

    public function store_saran(Request $request)
    {
        # code...
         $messages = [
            'required' => 'Form harus di isi'
        ];
        //
        $request->validate([
            'nama' => 'required',
            'email' => 'required',
        ], $messages);

        $data = $request->all();
        
        Saran::create([
            'nama' => $data['nama'],
            'email' => $data['email'],
            'sdgs_id' => $data['sdgs'],
        ]);
        
        $jawab = Saran_jawab::all()->where('sdgs_id', $data['sdgs']);
        return $this->create_saran($jawab);
    }
}
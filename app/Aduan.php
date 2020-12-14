<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Aduan extends Model
{
    //
    protected $table = 'aduan';

    protected $fillable = [
        'nama',
        'email',
        'wilayah',
        'foto',
        'tanggal',
        'sdgs_id'
    ];
    
    public function sdgs()
    {
        // return $this->hasMany('App\sdgs','id');
        return $this->belongsTo('App\sdgs');
    }
}

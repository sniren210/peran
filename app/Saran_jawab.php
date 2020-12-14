<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Saran_jawab extends Model
{
    //
    protected $table = 'saran_jawab';

    protected $fillable = [
        'tanya',
        'jawab',
        'sdgs_id'
    ];

    public function sdgs()
    {
        return $this->belongsTo('App\sdgs');
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Saran extends Model
{
    //
    protected $table = 'saran';

    protected $fillable = [
        'nama',
        'email',
        'sdgs_id'
    ];

    public function sdgs()
    {
        return $this->belongsTo('App\sdgs', 'id');
    }
}

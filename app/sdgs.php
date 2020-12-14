<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class sdgs extends Model
{
    //
    protected $table = 'sdgs';

    protected $fillable = [
        'SDGs',
    ];
    
    public function aduan()
    {
        // return $this->belongsTo('App\aduan','sdgs_id');
        return $this->hasMany('App\aduan','sdgs_id');
    }

    public function saran()
    {
        return $this->hasMany('App\saran', 'sdgs_id');
    }
    
    public function saran_jawab()
    {
        // return $this->belongsTo('App\saran','sdgs_id');
        return $this->hasMany('App\saran_jawab','sdgs_id');
    }
}

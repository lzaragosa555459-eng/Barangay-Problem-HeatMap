<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProblemCategory extends Model
{
    public function reports()
    {
        return $this->hasMany(Report::class);
    }

    protected $fillable = [
        'name',
        'icon',
        'color',
        'description',
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bike extends Model
{
    public function rentals()
    {
        return $this->hasMany(Rental::class);
    }
    protected $fillable = [
        'type',
        'image',
        'size',
        'material',
        'availability',
        'price_per_hour'
    ];
    use HasFactory;
}

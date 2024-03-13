<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    public function rentals()
    {
        return $this->hasMany(Rental::class);
    }
    protected $fillable = [
        'name',
        'email',
        'address',
        'phone_number',
        'role',
        'password'
    ];
    use HasFactory;
}

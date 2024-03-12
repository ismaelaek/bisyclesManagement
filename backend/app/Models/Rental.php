<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rental extends Model
{
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    } 
    public function bike()
    {
        return $this->belongsTo(Bike::class);
    }
    protected $fillable = [
        'customer_id',
        'bike_id',
        'start_date',
        'end_date',
        'total_price',
        'status'];

    use HasFactory;
}

<?php

use App\Http\Controllers\BikeController;
use App\Http\Controllers\CustomerController;
use Illuminate\Support\Facades\Route;


Route::resource('customers', CustomerController::class);

Route::resource('bikes', BikeController::class);
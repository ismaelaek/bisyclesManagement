<?php

use App\Http\Controllers\BikeController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ImageTestController;
use Illuminate\Support\Facades\Route;


Route::resource('customers', CustomerController::class);

Route::resource('bikes', BikeController::class);

Route::post('/postimage',[ImageTestController::class , 'store'])->name( 'postimage' );
Route::get('/images', [ImageTestController::class, 'index']);
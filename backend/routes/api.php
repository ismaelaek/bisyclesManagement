<?php

use App\Http\Controllers\Api\Auth\AuthController;
use App\Http\Controllers\BikeController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/auth/register', [AuthController::class, 'register']);


Route::prefix('/users')->middleware('auth:api')->group(function () {
    Route::get('/', [UserController::class, 'index']);
});

Route::prefix('/bikes')->group(function () {
    Route::get('/', [BikeController::class, 'index']);
});
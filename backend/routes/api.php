<?php

use App\Http\Controllers\Api\Auth\AuthController;
use App\Http\Controllers\BikeController;
use App\Http\Controllers\RentalController;
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
    Route::delete('/{user}', [UserController::class, 'destroy']);

});

Route::prefix('/bikes')->group(function () {
    Route::get('/', [BikeController::class, 'index']);
    Route::delete('/{bike}', [BikeController::class, 'destroy']);
    Route::post('/', [BikeController::class, 'store']);
});

Route::prefix('/rental')->group(function () {
    Route::get('/', [RentalController::class, 'index']);
    Route::post('/', [RentalController::class, 'store']);
    Route::put('/{id}', [RentalController::class, 'update']);
    Route::delete('/{id}', [RentalController::class, 'destroy']);
    Route::get('/total-income', [RentalController::class, 'totalIncome']);
});

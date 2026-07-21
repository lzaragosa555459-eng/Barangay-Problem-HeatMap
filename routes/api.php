<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ReportController;
use App\Http\Controllers\Api\BarangayController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\ProblemCategoryController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\AnalyticsController;
use App\Http\Controllers\Api\ProfileController;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

//Profile
Route::middleware('auth:sanctum')->get('/profile', [ProfileController::class, 'index']);
/*
|--------------------------------------------------------------------------
| Authenticated Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/logout', [AuthController::class, 'logout']);

    /*
    |--------------------------------------------------------------------------
    | All Authenticated Users
    | (Citizen, Barangay Official, Administrator)
    |--------------------------------------------------------------------------
    */

    Route::get('/reports', [ReportController::class, 'index']);
    Route::post('/reports', [ReportController::class, 'store']);

    Route::get('/reports-map', [ReportController::class, 'map']);
    Route::get('/reports-markmap', [ReportController::class, 'markmap']);

    /*
    |--------------------------------------------------------------------------
    | Barangay Official & Administrator
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:Administrator,Barangay Official')->group(function () {

        Route::put('/reports/{report}', [ReportController::class, 'update']);

    });

    /*
    |--------------------------------------------------------------------------
    | Administrator Only
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:Administrator')->group(function () {

        Route::delete('/reports/{report}', [ReportController::class, 'destroy']);

        Route::get('/dashboard', [DashboardController::class, 'index']);

 
        Route::get('/barangays', [BarangayController::class, 'index']);
        Route::apiResource('barangays', BarangayController::class);

        Route::get('/problem-categories', [ProblemCategoryController::class, 'index']); 
       
        Route::get('/analytics', [AnalyticsController::class, 'index']);
 
        Route::get('/users', [UserController::class, 'index']);
        Route::post('/users', [UserController::class, 'store']); 
        Route::put('/users/{user}', [UserController::class, 'update']);
        Route::delete('/users/{user}', [UserController::class, 'destroy']);

        Route::post('/barangays', [BarangayController::class, 'store']);
        Route::put('/barangays/{barangays}', [BarangayController::class, 'update']);
        Route::delete('/barangays/{barangays}', [BarangayController::class, 'destroy']);
    });

});

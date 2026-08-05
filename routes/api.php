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
use App\Http\Controllers\Api\AssignmentController;
use App\Http\Controllers\Api\NavbarController;
use App\Http\Controllers\Api\ProfileController;
use App\Models\User;
use App\Http\Controllers\Api\SettingController;
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
    Route::put('/profile', [ProfileController::class, 'update']);
    Route::put('/profile/password', [ProfileController::class, 'changePassword']);
    Route::get('/dashboard', [DashboardController::class, 'index']);
    Route::put('/reports/{report}', [ReportController::class, 'update']);
    Route::delete('/reports/{report}', [ReportController::class, 'destroy']);
    Route::get('/reports', [ReportController::class, 'index']);
    Route::post('/reports', [ReportController::class, 'store']);
    Route::get('/reports-markmap', [ReportController::class, 'markmap']);
    Route::get('/settings', [SettingController::class, 'index']);
    Route::get('/role', [NavbarController::class, 'roles']);
    /*
    |--------------------------------------------------------------------------
    | Barangay Official & Administrator
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:Administrator,Barangay Official')->group(function () {


        Route::get('/maintenance', [SettingController::class, 'maintenanceStatus']);

        Route::get('/barangays', [BarangayController::class, 'index']);
        Route::apiResource('barangays', BarangayController::class);

        Route::get('/problem-categories', [ProblemCategoryController::class, 'index']);

        Route::get('/analytics', [AnalyticsController::class, 'index']);





        Route::get('/reports-map', [ReportController::class, 'map']);


        Route::get('/assignments', [AssignmentController::class, 'index']);
    });

    /*
    |--------------------------------------------------------------------------
    | Administrator Only
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:Administrator')->group(function () {



        Route::get('/users', [UserController::class, 'index']);
        Route::post('/users', [UserController::class, 'store']);
        Route::put('/users/{user}', [UserController::class, 'update']);
        Route::delete('/users/{user}', [UserController::class, 'destroy']);
        Route::put('/reports/{report}/verify', [ReportController::class, 'verify']);
        Route::put('/reports/{report}/reject', [ReportController::class, 'reject']);

        Route::post('/barangays', [BarangayController::class, 'store']);
        Route::put('/barangays/{barangays}', [BarangayController::class, 'update']);
        Route::delete('/barangays/{barangays}', [BarangayController::class, 'destroy']);

        Route::post('/problem-categories', [ProblemCategoryController::class, 'store']);
        Route::put('/problem-categories/{problemCategories}', [ProblemCategoryController::class, 'update']);
        Route::delete('/problem-categories/{problemCategories}', [ProblemCategoryController::class, 'destroy']);

    });

    Route::middleware(['maintenance.mode'])->group(function () {

        Route::apiResource('reports', ReportController::class);
        Route::apiResource('users', UserController::class);
        Route::apiResource('barangays', BarangayController::class);
        Route::put('/settings', [SettingController::class, 'updateSystemName']);
        Route::post('/settings/logo', [SettingController::class, 'updateLogo']);
        Route::get('/settings/backup', [SettingController::class, 'backupDatabase']);
        Route::post('/settings/restore', [SettingController::class, 'restoreDatabase']);

        Route::put('/assignments/{assignment}/accept', [AssignmentController::class, 'accept']);

        Route::put('/assignments/{assignment}/decline', [AssignmentController::class, 'decline']);

        Route::put('/assignments/{assignment}/complete', [AssignmentController::class, 'complete']);
    });


    //Barangay Official
    Route::middleware('role:Barangay Official')->group(function () {


    });

});


//TODO: Add assignment module in pages for barangay officials to adress the reporst.

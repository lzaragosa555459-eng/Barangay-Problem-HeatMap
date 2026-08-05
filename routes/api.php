<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Controllers
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\NavbarController;
use App\Http\Controllers\Api\ReportController;
use App\Http\Controllers\Api\AssignmentController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\BarangayController;
use App\Http\Controllers\Api\ProblemCategoryController;
use App\Http\Controllers\Api\AnalyticsController;
use App\Http\Controllers\Api\SettingController;

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {

    /*
    |--------------------------------------------------------------------------
    | Authentication
    |--------------------------------------------------------------------------
    */

    Route::get('/user', fn (Request $request) => $request->user());
    Route::post('/logout', [AuthController::class, 'logout']);

    /*
    |--------------------------------------------------------------------------
    | Profile
    |--------------------------------------------------------------------------
    */

    Route::get('/profile', [ProfileController::class, 'index']);
    Route::put('/profile', [ProfileController::class, 'update']);
    Route::put('/profile/password', [ProfileController::class, 'changePassword']);

    /*
    |--------------------------------------------------------------------------
    | Dashboard
    |--------------------------------------------------------------------------
    */

    Route::get('/dashboard', [DashboardController::class, 'index']);
    Route::get('/role', [NavbarController::class, 'roles']);

    /*
    |--------------------------------------------------------------------------
    | Reports
    |--------------------------------------------------------------------------
    */

    Route::apiResource('reports', ReportController::class);

    Route::get('/reports-map', [ReportController::class, 'map']);
    Route::get('/reports-markmap', [ReportController::class, 'markmap']);

    /*
    |--------------------------------------------------------------------------
    | Settings
    |--------------------------------------------------------------------------
    */

    Route::get('/settings', [SettingController::class, 'index']);

    /*
    |--------------------------------------------------------------------------
    | Barangay Official & Administrator
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:Administrator,Barangay Official')->group(function () {

        Route::apiResource('barangays', BarangayController::class);
        Route::apiResource('problem-categories', ProblemCategoryController::class);

        Route::get('/analytics', [AnalyticsController::class, 'index']);

        Route::get('/assignments', [AssignmentController::class, 'index']);

        Route::get('/maintenance', [SettingController::class, 'maintenanceStatus']);
    });

    /*
    |--------------------------------------------------------------------------
    | Administrator Only
    |--------------------------------------------------------------------------
    */

    Route::middleware('role:Administrator')->group(function () {

        Route::apiResource('users', UserController::class);

        Route::put('/reports/{report}/verify', [ReportController::class, 'verify']);
        Route::put('/reports/{report}/reject', [ReportController::class, 'reject']);
    });

    /*
    |--------------------------------------------------------------------------
    | Maintenance Mode
    |--------------------------------------------------------------------------
    */

    Route::middleware('maintenance.mode')->group(function () {

        Route::put('/settings', [SettingController::class, 'updateSystemName']);
        Route::post('/settings/logo', [SettingController::class, 'updateLogo']);

        Route::get('/settings/backup', [SettingController::class, 'backupDatabase']);
        Route::post('/settings/restore', [SettingController::class, 'restoreDatabase']);

        Route::put('/assignments/{assignment}/accept', [AssignmentController::class, 'accept']);
        Route::put('/assignments/{assignment}/decline', [AssignmentController::class, 'decline']);
        Route::put('/assignments/{assignment}/complete', [AssignmentController::class, 'complete']);
    });

});

<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Setting;

class MaintenanceMode
{
    public function handle(Request $request, Closure $next)
    {
        $setting = Setting::first();

        if (
            $setting &&
            $setting->maintenance_mode &&
            auth()->check() &&
            auth()->user()->role !== 'Administrator'
        ) {
            return response()->json([
                'message' => 'System is currently under maintenance.'
            ], 503);
        }

        return $next($request);
    }
}
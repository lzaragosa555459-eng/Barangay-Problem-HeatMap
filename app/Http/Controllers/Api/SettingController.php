<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Setting;

class SettingController extends Controller
{
    public function index(){

        return response()->json(
            Setting::first()
        );
    }

    public function updateLogo(){

    }

    public function updateSystemName(){

    }

    public function toggleMaintenance(){

    }

    public function systemInfo(){

    }
}

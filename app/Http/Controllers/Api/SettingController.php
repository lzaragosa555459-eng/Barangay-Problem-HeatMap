<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Setting;
use Illuminate\Support\Facades\Storage;

class SettingController extends Controller
{
    public function index(){

        return response()->json(
            Setting::first()
        );
    }

    public function updateLogo(Request $request)
    {
        $request->validate([
            'logo' => 'required|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        $settings = Setting::first();

        if ($settings->system_logo) {

            Storage::disk('public')->delete($settings->system_logo);

        }

        $path = $request->file('logo')->store('logos', 'public');

        $settings->update([
            'system_logo' => $path,
        ]);

        return response()->json([
            'message' => 'Logo updated successfully.',
            'settings' => $settings,
        ]);
    }

    public function updateSystemName(Request $request){
        $request->validate([
            'system_name' => 'required|string|max:255',

            'theme' => 'required|in:light,dark',

            'notification_email' => 'required|boolean',
            'notification_sms' => 'required|boolean',

            'maintenance_mode' => 'required|boolean',

            'default_latitude' => 'nullable|numeric',
            'default_longitude' => 'nullable|numeric',

            'contact_email' => 'nullable|email',
            'contact_phone' => 'nullable|string|max:20',
        ]);

        $settings = Setting::first();

        $settings->update($request->all());

        return response()->json([
            'message' => 'Settings updated successfully.',
            'settings' => $settings,
        ]);
    }

    public function toggleMaintenance(){

    }

    public function systemInfo(){

    }
}

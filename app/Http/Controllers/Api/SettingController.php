<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Setting;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\Process\Process;
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

    public function backupDatabase()
    {
        $database = env('DB_DATABASE');
        $username = env('DB_USERNAME');
        $password = env('DB_PASSWORD');
        $host = env('DB_HOST');

        $filename = 'backup_' . now()->format('Y-m-d_H-i-s') . '.sql';

        $path = storage_path('app/' . $filename);

        $process = new Process([
            'mysqldump',
            '-h',
            $host,
            '-u',
            $username,
            '--password=' . $password,
            $database,
            '--result-file=' . $path,
        ]);

        $process->run();

        if (!$process->isSuccessful()) {
            return response()->json([
                'message' => 'Backup failed.'
            ], 500);
        }

        return response()->download($path)->deleteFileAfterSend(true);
    }
}

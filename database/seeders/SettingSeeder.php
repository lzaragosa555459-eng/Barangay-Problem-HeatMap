<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Setting;

class SettingSeeder extends Seeder
{
    public function run(): void
    {
        Setting::create([
            'system_name' => 'Barangay Heat Project',

            'system_logo' => null,

            'maintenance_mode' => false,

            'theme' => 'light',

            'notification_email' => true,
            'notification_sms' => false,

            'default_latitude' => 7.0731000,
            'default_longitude' => 125.6128000,

            'contact_email' => 'admin@barangay.com',
            'contact_phone' => '09123456789',
        ]);
    }
}
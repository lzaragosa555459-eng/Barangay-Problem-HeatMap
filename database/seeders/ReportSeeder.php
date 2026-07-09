<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Report;

class ReportSeeder extends Seeder
{
    public function run(): void
    {
        Report::create([
            'user_id' => 3,
            'barangay_id' => 1,
            'problem_category_id' => 1,
            'title' => 'Flooded Road',
            'description' => 'Heavy rain caused flooding along the main road.',
            'latitude' => 7.0615,
            'longitude' => 125.5072,
            'severity' => 'High',
            'status' => 'Pending',
            'reported_at' => now(),
        ]);

        Report::create([
            'user_id' => 3,
            'barangay_id' => 2,
            'problem_category_id' => 2,
            'title' => 'Broken Street Light',
            'description' => 'The street light near the basketball court is broken.',
            'latitude' => 7.0718,
            'longitude' => 125.6021,
            'severity' => 'Medium',
            'status' => 'Verified',
            'reported_at' => now(),
        ]);

        Report::create([
            'user_id' => 3,
            'barangay_id' => 3,
            'problem_category_id' => 3,
            'title' => 'Garbage Not Collected',
            'description' => 'Garbage has not been collected for several days.',
            'latitude' => 7.1145,
            'longitude' => 125.6205,
            'severity' => 'Critical',
            'status' => 'In Progress',
            'reported_at' => now(),
        ]);
    }
}
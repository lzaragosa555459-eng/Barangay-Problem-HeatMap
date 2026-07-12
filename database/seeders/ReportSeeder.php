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

        Report::create([
            'user_id' => 3,
            'barangay_id' => 4,
            'problem_category_id' => 1,
            'title' => 'Blocked Drainage',
            'description' => 'Drainage is clogged causing water buildup.',
            'latitude' => 7.0824,
            'longitude' => 125.6083,
            'severity' => 'High',
            'status' => 'Pending',
            'reported_at' => now(),
        ]);

        Report::create([
            'user_id' => 3,
            'barangay_id' => 5,
            'problem_category_id' => 2,
            'title' => 'Power Outage',
            'description' => 'Unexpected power interruption in the area.',
            'latitude' => 7.0871,
            'longitude' => 125.6174,
            'severity' => 'Critical',
            'status' => 'Verified',
            'reported_at' => now(),
        ]);

        Report::create([
            'user_id' => 3,
            'barangay_id' => 6,
            'problem_category_id' => 3,
            'title' => 'Illegal Dumping',
            'description' => 'Residents reported illegal garbage dumping.',
            'latitude' => 7.0935,
            'longitude' => 125.6289,
            'severity' => 'Medium',
            'status' => 'Resolved',
            'reported_at' => now(),
        ]);

        Report::create([
            'user_id' => 3,
            'barangay_id' => 2,
            'problem_category_id' => 4,
            'title' => 'Road Accident',
            'description' => 'Minor vehicle collision causing traffic.',
            'latitude' => 7.0762,
            'longitude' => 125.5961,
            'severity' => 'High',
            'status' => 'In Progress',
            'reported_at' => now(),
        ]);

        Report::create([
            'user_id' => 3,
            'barangay_id' => 7,
            'problem_category_id' => 5,
            'title' => 'Fire Incident',
            'description' => 'Small residential fire reported.',
            'latitude' => 7.1054,
            'longitude' => 125.6332,
            'severity' => 'Critical',
            'status' => 'Pending',
            'reported_at' => now(),
        ]);

        Report::create([
            'user_id' => 3,
            'barangay_id' => 8,
            'problem_category_id' => 2,
            'title' => 'Damaged Traffic Sign',
            'description' => 'Traffic sign has fallen after strong winds.',
            'latitude' => 7.0987,
            'longitude' => 125.6126,
            'severity' => 'Low',
            'status' => 'Verified',
            'reported_at' => now(),
        ]);

        Report::create([
            'user_id' => 3,
            'barangay_id' => 9,
            'problem_category_id' => 3,
            'title' => 'Overflowing Trash Bin',
            'description' => 'Public trash bins are overflowing.',
            'latitude' => 7.1109,
            'longitude' => 125.6015,
            'severity' => 'Medium',
            'status' => 'Resolved',
            'reported_at' => now(),
        ]);

        Report::create([
            'user_id' => 3,
            'barangay_id' => 10,
            'problem_category_id' => 1,
            'title' => 'Landslide Risk',
            'description' => 'Soil erosion observed near hillside homes.',
            'latitude' => 7.1223,
            'longitude' => 125.6451,
            'severity' => 'Critical',
            'status' => 'Pending',
            'reported_at' => now(),
        ]);

        Report::create([
            'user_id' => 3,
            'barangay_id' => 4,
            'problem_category_id' => 5,
            'title' => 'Fallen Tree',
            'description' => 'Large tree is blocking one lane of the road.',
            'latitude' => 7.0698,
            'longitude' => 125.5897,
            'severity' => 'High',
            'status' => 'In Progress',
            'reported_at' => now(),
        ]);

        Report::create([
            'user_id' => 3,
            'barangay_id' => 6,
            'problem_category_id' => 4,
            'title' => 'Water Leak',
            'description' => 'Main water pipeline is leaking continuously.',
            'latitude' => 7.0859,
            'longitude' => 125.6188,
            'severity' => 'Medium',
            'status' => 'Verified',
            'reported_at' => now(),
        ]);
    }
}
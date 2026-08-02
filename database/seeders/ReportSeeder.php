<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Report;

class ReportSeeder extends Seeder
{
    public function run(): void
    {
        // Note: User IDs after running the new UserSeeder:
        // 1  = System Admin
        // 2-11 = Barangay Officials (Mintal → Calinan)
        // 12+ = Citizens

        Report::create([
            'user_id' => 12, // Juan Dela Cruz (Mintal)
            'barangay_id' => 1,
            'problem_category_id' => 1,
            'title' => 'Flooded Road',
            'description' => 'Heavy rain caused flooding along the main road in Mintal.',
            'latitude' => 7.0615,
            'longitude' => 125.5072,
            'severity' => 'High',
            'status' => 'Pending',
            'reported_at' => now(),
        ]);

        Report::create([
            'user_id' => 13, // Maria Clara (Mintal)
            'barangay_id' => 1,
            'problem_category_id' => 3,
            'title' => 'Uncollected Garbage',
            'description' => 'Garbage piles have not been collected for almost a week near the barangay hall.',
            'latitude' => 7.0620,
            'longitude' => 125.5065,
            'severity' => 'Medium',
            'status' => 'Verified',
            'reported_at' => now()->subDays(1),
        ]);

        Report::create([
            'user_id' => 14, // Jose Rizal (Talomo)
            'barangay_id' => 2,
            'problem_category_id' => 2,
            'title' => 'Broken Street Light',
            'description' => 'The street light near the basketball court is broken and the area is dark at night.',
            'latitude' => 7.0718,
            'longitude' => 125.6021,
            'severity' => 'Medium',
            'status' => 'Verified',
            'reported_at' => now()->subDays(2),
        ]);

        Report::create([
            'user_id' => 15, // Andres Bonifacio (Talomo)
            'barangay_id' => 2,
            'problem_category_id' => 1,
            'title' => 'Flooded Intersection',
            'description' => 'Continuous rainfall has caused flooding at the Talomo public market intersection.',
            'latitude' => 7.0735,
            'longitude' => 125.5984,
            'severity' => 'High',
            'status' => 'In Progress',
            'reported_at' => now()->subHours(5),
        ]);

        Report::create([
            'user_id' => 16, // Emilio Aguinaldo (Buhangin)
            'barangay_id' => 3,
            'problem_category_id' => 3,
            'title' => 'Garbage Not Collected',
            'description' => 'Garbage has not been collected for several days in Buhangin Proper.',
            'latitude' => 7.1145,
            'longitude' => 125.6205,
            'severity' => 'Critical',
            'status' => 'In Progress',
            'reported_at' => now()->subDays(3),
        ]);

        Report::create([
            'user_id' => 17, // Apolinario Mabini (Buhangin)
            'barangay_id' => 3,
            'problem_category_id' => 5,
            'title' => 'Fallen Electric Post',
            'description' => 'An electric post is leaning dangerously after strong winds.',
            'latitude' => 7.1160,
            'longitude' => 125.6190,
            'severity' => 'Critical',
            'status' => 'Pending',
            'reported_at' => now()->subHours(8),
        ]);

        Report::create([
            'user_id' => 18, // Gregorio del Pilar (Agdao)
            'barangay_id' => 4,
            'problem_category_id' => 1,
            'title' => 'Blocked Drainage',
            'description' => 'Drainage is clogged causing water buildup during rain.',
            'latitude' => 7.0824,
            'longitude' => 125.6083,
            'severity' => 'High',
            'status' => 'Pending',
            'reported_at' => now()->subDays(1),
        ]);

        Report::create([
            'user_id' => 19, // Melchora Aquino (Agdao)
            'barangay_id' => 4,
            'problem_category_id' => 5,
            'title' => 'Fallen Tree',
            'description' => 'Large tree is blocking one lane of the road near Agdao Public Market.',
            'latitude' => 7.0698,
            'longitude' => 125.5897,
            'severity' => 'High',
            'status' => 'In Progress',
            'reported_at' => now()->subHours(12),
        ]);

        Report::create([
            'user_id' => 20, // Lapu-Lapu (Matina)
            'barangay_id' => 5,
            'problem_category_id' => 2,
            'title' => 'Power Outage',
            'description' => 'Unexpected power interruption affecting several puroks in Matina.',
            'latitude' => 7.0871,
            'longitude' => 125.6174,
            'severity' => 'Critical',
            'status' => 'Verified',
            'reported_at' => now()->subDays(2),
        ]);

        Report::create([
            'user_id' => 21, // Gabriela Silang (Matina)
            'barangay_id' => 5,
            'problem_category_id' => 4,
            'title' => 'Road Accident',
            'description' => 'Minor vehicle collision causing traffic near Matina Crossing.',
            'latitude' => 7.0762,
            'longitude' => 125.5961,
            'severity' => 'High',
            'status' => 'Resolved',
            'reported_at' => now()->subDays(4),
        ]);

        Report::create([
            'user_id' => 22, // Diego Silang (Toril)
            'barangay_id' => 6,
            'problem_category_id' => 3,
            'title' => 'Illegal Dumping',
            'description' => 'Residents reported illegal garbage dumping near the riverside.',
            'latitude' => 7.0935,
            'longitude' => 125.6289,
            'severity' => 'Medium',
            'status' => 'Resolved',
            'reported_at' => now()->subDays(5),
        ]);

        Report::create([
            'user_id' => 23, // Teresa Magbanua (Toril)
            'barangay_id' => 6,
            'problem_category_id' => 4,
            'title' => 'Water Leak',
            'description' => 'Main water pipeline is leaking continuously along the highway.',
            'latitude' => 7.0859,
            'longitude' => 125.6188,
            'severity' => 'Medium',
            'status' => 'Verified',
            'reported_at' => now()->subDays(1),
        ]);

        Report::create([
            'user_id' => 24, // Francisco Dagohoy (Panacan)
            'barangay_id' => 7,
            'problem_category_id' => 5,
            'title' => 'Fire Incident',
            'description' => 'Small residential fire reported near Panacan port area.',
            'latitude' => 7.1054,
            'longitude' => 125.6332,
            'severity' => 'Critical',
            'status' => 'Pending',
            'reported_at' => now()->subHours(3),
        ]);

        Report::create([
            'user_id' => 25, // Leonor Rivera (Panacan)
            'barangay_id' => 7,
            'problem_category_id' => 2,
            'title' => 'Damaged Street Light',
            'description' => 'Several street lights are not working along the main road.',
            'latitude' => 7.1460,
            'longitude' => 125.6450,
            'severity' => 'Medium',
            'status' => 'Verified',
            'reported_at' => now()->subDays(2),
        ]);

        Report::create([
            'user_id' => 26, // Marcelo H. del Pilar (Sasa)
            'barangay_id' => 8,
            'problem_category_id' => 2,
            'title' => 'Damaged Traffic Sign',
            'description' => 'Traffic sign has fallen after strong winds near Sasa Port.',
            'latitude' => 7.0987,
            'longitude' => 125.6126,
            'severity' => 'Low',
            'status' => 'Verified',
            'reported_at' => now()->subDays(3),
        ]);

        Report::create([
            'user_id' => 27, // Graciano Lopez Jaena (Sasa)
            'barangay_id' => 8,
            'problem_category_id' => 1,
            'title' => 'Flooding Near Port',
            'description' => 'Heavy rain caused flooding in the area near the cargo terminal.',
            'latitude' => 7.1290,
            'longitude' => 125.6550,
            'severity' => 'High',
            'status' => 'In Progress',
            'reported_at' => now()->subHours(6),
        ]);

        Report::create([
            'user_id' => 28, // Antonio Luna (Bunawan)
            'barangay_id' => 9,
            'problem_category_id' => 3,
            'title' => 'Overflowing Trash Bin',
            'description' => 'Public trash bins are overflowing in the barangay plaza.',
            'latitude' => 7.1109,
            'longitude' => 125.6015,
            'severity' => 'Medium',
            'status' => 'Resolved',
            'reported_at' => now()->subDays(6),
        ]);

        Report::create([
            'user_id' => 29, // Josefa Rizal (Bunawan)
            'barangay_id' => 9,
            'problem_category_id' => 1,
            'title' => 'Landslide Risk',
            'description' => 'Soil erosion observed near hillside homes in Bunawan.',
            'latitude' => 7.1223,
            'longitude' => 125.6451,
            'severity' => 'Critical',
            'status' => 'Pending',
            'reported_at' => now()->subDays(1),
        ]);

        Report::create([
            'user_id' => 30, // Trinidad Tecson (Calinan)
            'barangay_id' => 10,
            'problem_category_id' => 5,
            'title' => 'Fallen Tree Blocking Road',
            'description' => 'A large tree fell and is blocking the road going to Calinan proper.',
            'latitude' => 7.1890,
            'longitude' => 125.4560,
            'severity' => 'High',
            'status' => 'In Progress',
            'reported_at' => now()->subHours(10),
        ]);

        Report::create([
            'user_id' => 31, // Gregoria de Jesus (Calinan)
            'barangay_id' => 10,
            'problem_category_id' => 3,
            'title' => 'Illegal Dumping Site',
            'description' => 'Residents found an illegal dumping site near the riverbank.',
            'latitude' => 7.1905,
            'longitude' => 125.4540,
            'severity' => 'Medium',
            'status' => 'Verified',
            'reported_at' => now()->subDays(2),
        ]);
    }
}
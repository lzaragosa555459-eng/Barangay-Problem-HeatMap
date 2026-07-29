<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Assignment;
use App\Models\Report;
use App\Models\User;
use Carbon\Carbon;

class AssignmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::where('role', 'Administrator')->first();

        $reports = Report::whereIn('status', [
            'Verified',
            'In Progress',
            'Resolved'
        ])->get();

        foreach ($reports as $report) {

            $official = User::where('role', 'Barangay Official')
                ->where('barangay_id', $report->barangay_id)
                ->first();

            if (!$official || !$admin) {
                continue;
            }

            Assignment::create([
                'report_id'   => $report->id,
                'assigned_to' => $official->id,
                'assigned_by' => $admin->id,
                'deadline'    => Carbon::now()->addDays(rand(3, 10)),
                'status'      => match ($report->status) {
                    'Verified'    => 'Pending',
                    'In Progress' => 'Accepted',
                    'Resolved'    => 'Completed',
                    default       => 'Pending',
                },
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
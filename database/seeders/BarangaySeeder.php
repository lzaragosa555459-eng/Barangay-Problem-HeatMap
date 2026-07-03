<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BarangaySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('barangays')->insert([
            [
                'name' => 'Mintal',
                'latitude' => 7.0612000,
                'longitude' => 125.5068000,
                'population' => 25000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Talomo',
                'latitude' => 7.0714000,
                'longitude' => 125.6019000,
                'population' => 42000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Buhangin',
                'latitude' => 7.1150000,
                'longitude' => 125.6200000,
                'population' => 60000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}

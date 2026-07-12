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
                'latitude' => 7.0612,
                'longitude' => 125.5068,
                'population' => 25000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Talomo',
                'latitude' => 7.0714,
                'longitude' => 125.6019,
                'population' => 42000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Buhangin',
                'latitude' => 7.1150,
                'longitude' => 125.6200,
                'population' => 60000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Agdao',
                'latitude' => 7.0818,
                'longitude' => 125.6260,
                'population' => 38000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Matina',
                'latitude' => 7.0619,
                'longitude' => 125.5920,
                'population' => 45000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Toril',
                'latitude' => 7.0158,
                'longitude' => 125.4975,
                'population' => 54000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Panacan',
                'latitude' => 7.1453,
                'longitude' => 125.6465,
                'population' => 41000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Sasa',
                'latitude' => 7.1280,
                'longitude' => 125.6568,
                'population' => 49000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Bunawan',
                'latitude' => 7.2324,
                'longitude' => 125.6984,
                'population' => 32000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Calinan',
                'latitude' => 7.1885,
                'longitude' => 125.4554,
                'population' => 56000,
                'created_at' => now(),
                'updated_at' => now(),
            ],


        ]);
    }
}

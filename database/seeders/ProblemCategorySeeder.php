<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProblemCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('problem_categories')->insert([
            ['name'=>'Flood','icon'=>'water','color'=>'#3498db'],
            ['name'=>'Garbage','icon'=>'trash','color'=>'#2ecc71'],
            ['name'=>'Crime','icon'=>'shield','color'=>'#e74c3c'],
            ['name'=>'Fire','icon'=>'fire','color'=>'#f39c12'],
            ['name'=>'Road Damage','icon'=>'road','color'=>'#7f8c8d'],
            ['name'=>'Water Leakage','icon'=>'droplet','color'=>'#3498db'],
            ['name'=>'Illegal Parking','icon'=>'car','color'=>'#9b59b6'],
        ]);
    }
}

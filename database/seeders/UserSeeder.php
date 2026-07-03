<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */


    public function run(): void
    {
        DB::table('users')->insert([
            [
                'barangay_id' => 1,
                'name' => 'System Administrator',
                'email' => 'admin@example.com',
                'password' => Hash::make('password'),
                'phone' => '09123456789',
                'role' => 'Administrator',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'barangay_id' => 2,
                'name' => 'Barangay Official',
                'email' => 'official@example.com',
                'password' => Hash::make('password'),
                'phone' => '09999999999',
                'role' => 'Barangay Official',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'barangay_id' => 3,
                'name' => 'Juan Dela Cruz',
                'email' => 'juan@example.com',
                'password' => Hash::make('password'),
                'phone' => '09112223344',
                'role' => 'Citizen',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}

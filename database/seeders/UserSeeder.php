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
                'barangay_id' => 1, // Mintal
                'name' => 'Maria Santos',
                'email' => 'official.mintal@example.com',
                'password' => Hash::make('password'),
                'phone' => '09171110001',
                'role' => 'Barangay Official',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'barangay_id' => 2, // Talomo
                'name' => 'Pedro Reyes',
                'email' => 'official.talomo@example.com',
                'password' => Hash::make('password'),
                'phone' => '09171110002',
                'role' => 'Barangay Official',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'barangay_id' => 3, // Buhangin
                'name' => 'Ana Villanueva',
                'email' => 'official.buhangin@example.com',
                'password' => Hash::make('password'),
                'phone' => '09171110003',
                'role' => 'Barangay Official',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'barangay_id' => 4, // Agdao
                'name' => 'Roberto Cruz',
                'email' => 'official.agdao@example.com',
                'password' => Hash::make('password'),
                'phone' => '09171110004',
                'role' => 'Barangay Official',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'barangay_id' => 5, // Matina
                'name' => 'Liza Mendoza',
                'email' => 'official.matina@example.com',
                'password' => Hash::make('password'),
                'phone' => '09171110005',
                'role' => 'Barangay Official',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'barangay_id' => 6, // Toril
                'name' => 'Carlos Garcia',
                'email' => 'official.toril@example.com',
                'password' => Hash::make('password'),
                'phone' => '09171110006',
                'role' => 'Barangay Official',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'barangay_id' => 7, // Panacan
                'name' => 'Elena Ramos',
                'email' => 'official.panacan@example.com',
                'password' => Hash::make('password'),
                'phone' => '09171110007',
                'role' => 'Barangay Official',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'barangay_id' => 8, // Sasa
                'name' => 'Miguel Torres',
                'email' => 'official.sasa@example.com',
                'password' => Hash::make('password'),
                'phone' => '09171110008',
                'role' => 'Barangay Official',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'barangay_id' => 9, // Bunawan
                'name' => 'Sofia Lim',
                'email' => 'official.bunawan@example.com',
                'password' => Hash::make('password'),
                'phone' => '09171110009',
                'role' => 'Barangay Official',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'barangay_id' => 10, // Calinan
                'name' => 'Antonio Dela Cruz',
                'email' => 'official.calinan@example.com',
                'password' => Hash::make('password'),
                'phone' => '09171110010',
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
            [
                'barangay_id' => 1,
                'name' => 'Maria Clara',
                'email' => 'maria.mintal@example.com',
                'password' => Hash::make('password'),
                'phone' => '09181230002',
                'role' => 'Citizen',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Talomo
            [
                'barangay_id' => 2,
                'name' => 'Jose Rizal',
                'email' => 'jose.talomo@example.com',
                'password' => Hash::make('password'),
                'phone' => '09181230003',
                'role' => 'Citizen',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'barangay_id' => 2,
                'name' => 'Andres Bonifacio',
                'email' => 'andres.talomo@example.com',
                'password' => Hash::make('password'),
                'phone' => '09181230004',
                'role' => 'Citizen',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Buhangin
            [
                'barangay_id' => 3,
                'name' => 'Emilio Aguinaldo',
                'email' => 'emilio.buhangin@example.com',
                'password' => Hash::make('password'),
                'phone' => '09181230005',
                'role' => 'Citizen',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'barangay_id' => 3,
                'name' => 'Apolinario Mabini',
                'email' => 'apolinario.buhangin@example.com',
                'password' => Hash::make('password'),
                'phone' => '09181230006',
                'role' => 'Citizen',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Agdao
            [
                'barangay_id' => 4,
                'name' => 'Gregorio del Pilar',
                'email' => 'gregorio.agdao@example.com',
                'password' => Hash::make('password'),
                'phone' => '09181230007',
                'role' => 'Citizen',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'barangay_id' => 4,
                'name' => 'Melchora Aquino',
                'email' => 'melchora.agdao@example.com',
                'password' => Hash::make('password'),
                'phone' => '09181230008',
                'role' => 'Citizen',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Matina
            [
                'barangay_id' => 5,
                'name' => 'Lapu-Lapu',
                'email' => 'lapulapu.matina@example.com',
                'password' => Hash::make('password'),
                'phone' => '09181230009',
                'role' => 'Citizen',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'barangay_id' => 5,
                'name' => 'Gabriela Silang',
                'email' => 'gabriela.matina@example.com',
                'password' => Hash::make('password'),
                'phone' => '09181230010',
                'role' => 'Citizen',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Toril
            [
                'barangay_id' => 6,
                'name' => 'Diego Silang',
                'email' => 'diego.toril@example.com',
                'password' => Hash::make('password'),
                'phone' => '09181230011',
                'role' => 'Citizen',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'barangay_id' => 6,
                'name' => 'Teresa Magbanua',
                'email' => 'teresa.toril@example.com',
                'password' => Hash::make('password'),
                'phone' => '09181230012',
                'role' => 'Citizen',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Panacan
            [
                'barangay_id' => 7,
                'name' => 'Francisco Dagohoy',
                'email' => 'francisco.panacan@example.com',
                'password' => Hash::make('password'),
                'phone' => '09181230013',
                'role' => 'Citizen',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'barangay_id' => 7,
                'name' => 'Leonor Rivera',
                'email' => 'leonor.panacan@example.com',
                'password' => Hash::make('password'),
                'phone' => '09181230014',
                'role' => 'Citizen',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Sasa
            [
                'barangay_id' => 8,
                'name' => 'Marcelo H. del Pilar',
                'email' => 'marcelo.sasa@example.com',
                'password' => Hash::make('password'),
                'phone' => '09181230015',
                'role' => 'Citizen',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'barangay_id' => 8,
                'name' => 'Graciano Lopez Jaena',
                'email' => 'graciano.sasa@example.com',
                'password' => Hash::make('password'),
                'phone' => '09181230016',
                'role' => 'Citizen',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Bunawan
            [
                'barangay_id' => 9,
                'name' => 'Antonio Luna',
                'email' => 'antonio.bunawan@example.com',
                'password' => Hash::make('password'),
                'phone' => '09181230017',
                'role' => 'Citizen',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'barangay_id' => 9,
                'name' => 'Josefa Rizal',
                'email' => 'josefa.bunawan@example.com',
                'password' => Hash::make('password'),
                'phone' => '09181230018',
                'role' => 'Citizen',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Calinan
            [
                'barangay_id' => 10,
                'name' => 'Trinidad Tecson',
                'email' => 'trinidad.calinan@example.com',
                'password' => Hash::make('password'),
                'phone' => '09181230019',
                'role' => 'Citizen',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'barangay_id' => 10,
                'name' => 'Gregoria de Jesus',
                'email' => 'gregoria.calinan@example.com',
                'password' => Hash::make('password'),
                'phone' => '09181230020',
                'role' => 'Citizen',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}

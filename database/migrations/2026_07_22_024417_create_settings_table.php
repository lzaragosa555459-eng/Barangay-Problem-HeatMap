<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->id();

            $table->string('system_name')->default('Barangay Heat Project');
            $table->string('system_logo')->nullable();

            $table->boolean('maintenance_mode')->default(false);

            $table->enum('theme', ['light', 'dark'])->default('light');

            $table->boolean('notification_email')->default(true);
            $table->boolean('notification_sms')->default(false);

            $table->decimal('default_latitude', 10, 7)->default(7.0731000);
            $table->decimal('default_longitude', 10, 7)->default(125.6128000);

            $table->string('contact_email')->nullable();
            $table->string('contact_phone')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};

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
        Schema::create('reports', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->foreignId('barangay_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->foreignId('problem_category_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->string('title');
            $table->text('description');

            $table->decimal('latitude', 10, 7);
            $table->decimal('longitude', 10, 7);

            $table->enum('severity', [
                'Low',
                'Medium',
                'High',
                'Critical'
            ]);

            $table->enum('status', [
                'Pending',
                'Verified',
                'Assigned',
                'In Progress',
                'Resolved',
                'Rejected'
            ])->default('Pending');

            $table->timestamp('reported_at');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reports');
    }
};

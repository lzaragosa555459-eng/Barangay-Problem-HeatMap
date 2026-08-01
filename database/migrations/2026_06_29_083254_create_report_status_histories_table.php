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
    Schema::create('report_status_histories', function (Blueprint $table) {
        $table->id();

        $table->foreignId('report_id')
            ->constrained()
            ->cascadeOnDelete();

        $table->foreignId('updated_by')
            ->constrained('users');

        $table->enum('status', [
            'Pending',
            'Verified',
            'In Progress',
            'Resolved',
            'Rejected',
        ]);

        $table->text('remarks')->nullable();

        $table->text('resolution_notes')->nullable();

        $table->timestamp('completed_at')->nullable();

        $table->timestamps();
    });

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('report_status_histories');
    }
};
//Next week integrate report history table, request report timeline
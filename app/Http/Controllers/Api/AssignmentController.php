<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Assignment;
class AssignmentController
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = $request->user();

        $query = Assignment::with([
            'report',
            'report.user',  
            'assignedTo',
            'assignedBy',
            'report.barangay',
            'report.problemCategory',
        ]);

        if ($user->role === "Barangay Official") {

            $query->where('assigned_to', $user->id);

        }

        return $query
            ->latest()
            ->get();
    }

    public function complete(Assignment $assignment)
    {
        $assignment->update([
            'status' => 'Completed',
        ]);

        $assignment->report->update([
            'status' => 'Resolved',
        ]);

        return response()->json([
            'message' => 'Assignment completed.',
        ]);
    }

    public function decline(Assignment $assignment)
    {
        $assignment->update([
            'status' => 'Cancelled',
        ]);

        return response()->json([
            'message' => 'Assignment declined.',
        ]);
    }
    public function accept(Assignment $assignment)
    {
        $assignment->update([
            'status' => 'Accepted',
        ]);

        return response()->json([
            'message' => 'Assignment accepted.',
        ]);
    }
        /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

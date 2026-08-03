<?php

namespace App\Http\Controllers\Api;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Report;
use App\Models\User;
use App\Models\Assignment;

class ReportController
{
    /**
     * Display a listing of the resource.
     */


    public function index()
    {
        $user = Auth::user();

        $query = Report::with([
            'user',
            'barangay',
            'problemCategory'
        ])
        ->select(
            'id',
            'user_id',
            'barangay_id',
            'problem_category_id',
            'title',
            'latitude',
            'longitude',
            'severity',
            'status',
            'reported_at',
            'description'
        )
        ->orderBy('reported_at', 'desc');

        if ($user->role === 'Citizen') {

            $query->where('user_id', $user->id);

        } elseif ($user->role === 'Barangay Official') {

            $query->where('barangay_id', $user->barangay_id);

        }
        // Administrator sees all reports

        $data = $query->paginate(7);

        return response()->json([
            'data' => $data
        ]);
    }
    
    public function map(Request $request)
    {
        $user = $request->user();

        $query = Report::with([
            'barangay',
            'problemCategory'
        ]);

        if ($user->role === 'Citizen') {

            $query->where('user_id', $user->id);

        } elseif ($user->role === 'Barangay Official') {

            $query->where('barangay_id', $user->barangay_id);

        }

        return $query
            ->orderBy('reported_at', 'desc')
            ->get();
    }

    public function markmap(Request $request)
    {
        $user = $request->user();

        $query = Report::with([
            'barangay',
            'problemCategory'
        ])
        ->where('status', '!=', 'Resolved');

        if ($user->role === 'Citizen') {

            $query->where('user_id', $user->id);

        } elseif ($user->role === 'Barangay Official') {

            $query->where('barangay_id', $user->barangay_id);

        }

        return $query
            ->orderBy('reported_at', 'desc')
            ->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'barangay_id' => 'required|exists:barangays,id',
            'problem_category_id' => 'required|exists:problem_categories,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
            'severity' => 'required|string',
        ]);

        $report = Report::create([
            'user_id' => auth()->id(), // Replace later with auth()->id()
            'barangay_id' => $validated['barangay_id'],
            'problem_category_id' => $validated['problem_category_id'],
            'title' => $validated['title'],
            'description' => $validated['description'],
            'latitude' => $validated['latitude'],
            'longitude' => $validated['longitude'],
            'severity' => $validated['severity'],
            'status' => 'Pending',
            'reported_at' => now(),
        ]);

        return response()->json([
            'message' => 'Report created successfully.',
            'report' => $report
        ], 201);
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
    public function update(Request $request, Report $report)
    {
        $validated = $request->validate([
            'barangay_id' => 'required|exists:barangays,id',
            'problem_category_id' => 'required|exists:problem_categories,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
            'severity' => 'required|string',
        ]);

        $report->update($validated);

        return response()->json([
            'message' => 'Report updated successfully.',
            'report' => $report
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Report $report)
    {
        $report->delete();

        return response()->json([
            'message' => 'Report deleted successfully.'
        ]);
    }

    public function verify(Request $request, Report $report)
    {
        // Prevent duplicate verification
        if ($report->status === 'Verified') {
            return response()->json([
                'message' => 'This report is already verified.'
            ], 400);
        }

        // Update report status
        $report->update([
            'status' => 'Verified',
        ]);

        // Find the Barangay Official assigned to the report's barangay
        $official = User::where('role', 'Barangay Official')
            ->where('barangay_id', $report->barangay_id)
            ->first();

        if (!$official) {
            return response()->json([
                'message' => 'No Barangay Official found for this barangay.'
            ], 404);
        }

        // Create assignment
        Assignment::create([
            'report_id'   => $report->id,
            'assigned_to' => $official->id,
            'assigned_by' => $request->user()->id, // Administrator
            'deadline'    => now()->addDays(7),
            'status'      => 'Pending',
        ]);

        return response()->json([
            'message' => 'Report verified and assigned successfully.'
        ]);
    }

    public function reject(Report $report)
    {
        $report->update([
            'status' => 'Rejected',
        ]);

        return response()->json([
            'message' => 'Report rejected successfully.',
        ]);
    }

}

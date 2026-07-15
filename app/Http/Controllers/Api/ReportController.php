<?php

namespace App\Http\Controllers\Api;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Report;

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
        


        if($user->role === 'Barangay Official'){
            $query->where('barangay_id', $user->barangay_id);
        }

        $data = $query->paginate(7);

        return response()->json(['data' => $data]);
    }
    
    public function map()
    {
        return Report::with([
            'barangay',
            'problemCategory'
        ])
        ->orderBy('reported_at', 'desc')
        ->get();
    }

    public function markmap()
    {
        return Report::with([
            'barangay',
            'problemCategory'
        ])
        ->where('status', '!=', 'Resolved')
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
}

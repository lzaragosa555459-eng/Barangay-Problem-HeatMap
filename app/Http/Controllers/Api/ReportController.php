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
        return Report::with([
            'barangay',
            'problemCategory'
        ])
        ->select(
            'id',
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
        ->get();
    }

    public function table(Request $request)
    {

    
        $query = Report::with([
            'barangay',
            'category',
            'user'
        ]);

        if ($request->search) {
            $query->where('title', 'like', '%' . $request->search . '%');
        }

        if ($request->barangay) {
            $query->where('barangay_id', $request->barangay);
        }

        if ($request->status) {
            $query->where('status', $request->status);
        }

        return response()->json(
            $query->paginate(10)
        );
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
            'user_id' => 1, // Replace later with auth()->id()
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

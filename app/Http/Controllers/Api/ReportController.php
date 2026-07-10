<?php

namespace App\Http\Controllers\Api;

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

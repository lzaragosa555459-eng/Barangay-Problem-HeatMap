<?php

namespace App\Http\Controllers\Api;

use App\Models\Barangay;
use Illuminate\Http\Request;

class BarangayController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Barangay::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:barangays,name',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
            'population' => 'required|integer|min:0',
        ]);

        $barangay = Barangay::create($validated);

        return response()->json([
            'message' => 'Barangay created successfully.',
            'data' => $barangay,
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
    public function update(Request $request, Barangay $barangay)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:barangays,name,' . $barangay->id,
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
            'population' => 'required|integer|min:0',
        ]);

        $barangay->update($validated);

        return response()->json([
            'message' => 'Barangay updated successfully.',
            'data' => $barangay,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Barangay $barangay)
    {
        $barangay->delete();

        return response()->json([
            'message' => 'Barangay deleted successfully.',
        ]);
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Models\ProblemCategory;
use Illuminate\Http\Request;

class ProblemCategoryController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ProblemCategory::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:problem_categories,name',
            'icon' => 'required|string|max:255',
            'color' => 'required|string|max:20',
            'description' => 'nullable|string',
        ]);

        $problemCategory = ProblemCategory::create($validated);

        return response()->json([
            'message' => 'Problem category created successfully.',
            'data' => $problemCategory,
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
    public function update(Request $request, $id)
    {
        $category = ProblemCategory::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required',
            'icon' => 'required',
            'color' => 'required',
            'description' => 'nullable',
        ]);

        $category->update($validated);

        return response()->json([
            'message' => 'Updated successfully'
        ]);
    }

    public function destroy($id)
    {
        $category = ProblemCategory::findOrFail($id);

        $category->delete();

        return response()->json([
            'message' => 'Deleted successfully'
        ]);
    }
}

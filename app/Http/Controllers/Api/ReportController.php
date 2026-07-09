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
        return Report::select(
            'id',
            'title',
            'latitude',
            'longitude',
            'severity',
            'status'
        )->get();
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

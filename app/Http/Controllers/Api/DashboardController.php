<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Report;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(){

        return response()->json([
            'totalReports' => Report::count(),
            'pendingReports' => Report::where('status', 'Pending')->count(),
            'resolvedReports' => Report::where('status', 'Resolved')->count(),
            'criticalReports' => Report::where('severity', 'Critical')->count(),
            'totalCitizens' => User::where('role', 'Citizen')->count(),
            'totalOfficials' => User::where('role', 'Barangay Official')->count(),
        ]);
    }
}

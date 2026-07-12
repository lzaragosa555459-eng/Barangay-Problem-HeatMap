<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Report;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index(){

    $topBarangays = Report::join('barangays', 'reports.barangay_id', '=', 'barangays.id')
        ->select(
            'barangays.name',
            DB::raw('COUNT(reports.id) as total')
        )
        ->groupBy('barangays.id', 'barangays.name')
        ->orderByDesc('total')
        ->limit(10)
        ->get();

        return response()->json([
            'totalReports' => Report::count(),
            'pendingReports' => Report::where('status', 'Pending')->count(),
            'resolvedReports' => Report::where('status', 'Resolved')->count(),
            'criticalReports' => Report::where('severity', 'Critical')->count(),
            'totalCitizens' => User::where('role', 'Citizen')->count(),
            'totalOfficials' => User::where('role', 'Barangay Official')->count(),
            'topBarangays' => $topBarangays,
        ]);
    }
}

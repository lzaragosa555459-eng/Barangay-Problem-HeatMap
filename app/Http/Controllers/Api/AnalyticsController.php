<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Report;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class AnalyticsController extends Controller
{
    public function index(){

        $monthlyReports = Report::select(
                DB::raw("MONTH(reported_at) as month"),
                DB::raw("COUNT(*) as total")
            )
            ->groupBy(DB::raw("MONTH(reported_at)"))
            ->orderBy("month")
            ->get();

        $reportsByBarangay = Report::select(
                'barangay_id',
                DB::raw('COUNT(*) as total')
            )
            ->with('barangay')
            ->groupBy('barangay_id')
            ->get();

        $reportsByCategory = Report::select(
                'problem_category_id',
                DB::raw('COUNT(*) as total')
            )
            ->with('problemCategory')
            ->groupBy('problem_category_id')
            ->get();
        $severity = Report::select(
                'severity',
                DB::raw('COUNT(*) as total')
            )
            ->groupBy('severity')
            ->get();

        $total = Report::count();

        $resolved = Report::where('status','Resolved')->count();

        $pending = Report::where('status','Pending')->count();

        $average = Report::select(
            DB::raw("AVG(TIMESTAMPDIFF(HOUR, reported_at, updated_at)) as avg_hours")
        )->first();

        $heatmap = Report::select(
            'latitude',
            'longitude'
        )->get();

        return response()->json([
                "monthlyReport" => $monthlyReports,
                "reportsByBarangay" => $reportsByBarangay,
                "reportsByCategory" => $reportsByCategory,
                "severity" => $severity,
                "total" => $total,
                "resolved" => $resolved,
                "pending" => $pending,
                "average" => $average,
                "heatmap" => $heatmap,
            ]);
    }
}

    

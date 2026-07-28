<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NavbarController extends Controller
{
    public function roles(Request $request)
    {
        $user = $request->user();

        return response()->json([
            'role' => $user->role,
        ]);
    }
}
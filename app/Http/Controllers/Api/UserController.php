<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Event\ResponseEvent;

class UserController extends Controller
{
    public function index(){
        $users = User::with('barangay')
        ->orderBy('created_at', 'desc')
        ->paginate(10);

        return response()->json($users);
    }
}

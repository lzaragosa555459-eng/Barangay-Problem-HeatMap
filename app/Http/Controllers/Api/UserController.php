<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(){
        $users = User::with('barangay')
        ->orderBy('created_at', 'desc')
        ->paginate(10);

        return response()->json($users);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'barangay_id' => 'required|exists:barangays,id',
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8',
            'phone' => 'required',
            'role' => 'required',
        ]);

        $user = User::create([
            'barangay_id' => $validated['barangay_id'],
            'name'         => $validated['name'],
            'email'        => $validated['email'],
            'password'     => Hash::make($validated['password']),
            'phone'        => $validated['phone'],
            'role'         => $validated['role'],
        ]);

        return response()->json([
            'message' => 'User created successfully.',
            'data' => $user,
        ], 201);
    }

    public function update(){

    }
    
    public function destroy(){

    }
}

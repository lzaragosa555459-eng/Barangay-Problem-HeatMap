<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
class ProfileController extends Controller
{
    public function index(){
        $user = Auth::User();

        return response()->json([
            'name' => $user->name,
            'email' => $user->email,
            'role' => $user->role,
            'phone' => $user->phone,
            'barangay' => $user->barangay->name,
            'created_at' => $user->created_at,
            'updated_at' => $user->updated_at
        ]);

    }

    public function update(Request $request)
    {

    
        $user = $request->user();

        $validated = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'phone' => 'nullable|max:20',
        ]);
        

        $user->update($validated);

        return response()->json([
            'message' => 'Profile updated.',
            'user' => $user
        ]);
    }

    public function changePassword(Request $request)
    {
        $request->validate([
            'current_password' => 'required',
            'password' => 'required|min:8|confirmed',
        ]);

        $user = $request->user();

        if (!Hash::check($request->current_password, $user->password)) {

            return response()->json([
                'message' => 'Current password is incorrect.'
            ], 422);

        }

        $user->password = Hash::make($request->password);

        $user->save();

        return response()->json([
            'message' => 'Password updated.'
        ]);
    }
    }   

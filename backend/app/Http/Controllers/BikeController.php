<?php

namespace App\Http\Controllers;

use App\Models\Bike;
use Illuminate\Http\Request;

class BikeController extends Controller
{
    public function index()
    {
        $bikes = Bike::all();
        return response()->json($bikes);
    }

    public function store(Request $request)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(string $id)
    {
        //
    }
}

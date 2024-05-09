<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bike;
class BikeController extends Controller
{
    public function index(){
        $data = Bike::get();
        return response()->json($data);
    }
    public function destroy(string $id)
    {
        $user = Bike::findOrFail($id);

        $user->delete();
        return response()->json([
            'message' => 'bike deleted successfully'
        ], 204);
    }
}

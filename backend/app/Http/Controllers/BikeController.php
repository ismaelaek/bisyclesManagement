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
        if ($request->hasFile("image")){
            $image = $request->file('image');
            $image_extension = $image->getClientOriginalExtension();
            $image_name = time() . '_bike.' . $image_extension;
            $image->storeAs('images/bikes/', $image_name, 'public');


            $imageTest = new Bike();
            $imageTest->type = $request->type;
            $imageTest->image = $image_name;
            $imageTest->size = $request->size;
            $imageTest->material = $request->material;
            $imageTest->availability = true;
            $imageTest->price_per_hour = $request->price_per_hour;
            $imageTest->save();

            return response()->json("Bike has been added successfully", 200);
        }

        return response()->json("Image field is required.", 400);
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

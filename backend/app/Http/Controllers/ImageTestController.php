<?php

namespace App\Http\Controllers;

use App\Models\ImageTest;
use Illuminate\Http\Request;

class ImageTestController extends Controller
{
    public function index()
    {
        $images = ImageTest::all();
        return response()->json($images);
    }

    public function store(Request $request)
    {
        if ($request->hasFile("image") && $request->has("title")) {
            $image = $request->file('image');
            $image_extension = $image->getClientOriginalExtension();
            $image_name = time() . '_user.' . $image_extension;
            $image->storeAs('images/', $image_name, 'public');


            $imageTest = new ImageTest();
            $imageTest->title = $request->title;
            $imageTest->image = $image_name; 
            $imageTest->save();

            return response()->json(['image' => $image_name, 'title' => $request->title], 200);
        }

        return response()->json(['message' => 'No image or title provided.'], 400);
    }
    // public function update(Request $request, string $id)
    // {
    //     //
    // }

    public function destroy(string $id)
    {
        //
    }
}

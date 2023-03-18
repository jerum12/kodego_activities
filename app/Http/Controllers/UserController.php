<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(){
        return view('home');
    }

    public function about(){
        return view('about');
    }

    public function contactUs(){
        return view('contactUs');
    }

}
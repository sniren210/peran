<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index');
Route::get('/aduan', 'AduanController@create');
Route::post('/aduan', 'AduanController@store')->name('aduan');
Route::get('/saran', 'SaranController@create_saran');
Route::post('/saran', 'SaranController@store_saran')->name('saran');

// Auth::routes();
Route::get('/login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('/login', 'Auth\LoginController@login');
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');

Route::group(['middleware' => 'auth'], function () {
    Route::get('/dasboard', 'DasboardController@index')->name('dasboard');
    Route::get('/hasil_aduan', 'AduanController@index');
    Route::get('/detail_aduan/{aduan}', 'AduanController@show');
    Route::get('/saran/table', 'SaranController@index');
    Route::get('/saran/create', 'SaranController@create');
    Route::post('/saran/create', 'SaranController@store')->name('saran/create');
    Route::get('/saran/edit/{saran_jawab}', 'SaranController@edit')->name('saran/edit');
    Route::put('/saran/edit/{saran_jawab}', 'SaranController@update')->name('saran/update');
    Route::delete('/saran/hapus/{saran_jawab}', 'SaranController@destroy')->name('saran/hapus');
    
});

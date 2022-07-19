<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Send reset password mail
Route::post('auth/reset-password', 'Auth\AuthController@sendPasswordResetLink');
        
// handle reset password form process
Route::post('auth/reset/password', 'Auth\AuthController@callResetPassword');

//profile - user
Route::get('/user/profile-user/{id}', 'Auth\AuthenticationController@profileUser');

// /*=========Tpack============*/
Route::get('tpacks', 'Frontend\TpackController@index');
Route::get('/abouts','Frontend\AboutController@index');


// ==============News=======================
Route::namespace ('Frontend')->group(function () {
	Route::group(['prefix'=>'news'], function(){
		Route::get('paginate', 'NewsController@getNewsPaginate');
		Route::get('new','NewsController@new');
		Route::get('bloghighlight','NewsController@getNewsFeature');
		Route::get('mostview','NewsController@mostView');
		Route::get('/{id}','NewsController@showNewsWithId');
		Route::get('incrementview/{id}','NewsController@incrementView');
	});
});

Route::group(['prefix'=>'likenews/user'], function(){
	// Route::get('{user_id}/{new_id}','Frontend\LikeNewsController@getLike');
	Route::post('get-status-like','Frontend\LikeNewsController@getStatusLike');
	Route::get('like/{new_id}','Frontend\LikeNewsController@getLike');
	Route::post('change','Frontend\LikeNewsController@change');
});

// ==============Discussions=======================
Route::namespace ('Frontend')->group(function () {
	Route::get('/discussionpaginate/{discussion_type_id}/paginate', 'DiscussionController@discussionpaginate');
	Route::get('/discussiontype','DiscussionController@discussionTypeList');
	
	Route::get('/discussion/incrementview/{id}','DiscussionController@incrementView');
	Route::get('/newdiscussion','DiscussionController@newDiscussion');

	Route::get('/discussions','DiscussionController@index');
	Route::get('/discussion/show/{id}','DiscussionController@show');
	Route::post('/discussion/create','DiscussionController@store');
	Route::put('/discussion/edit/{id}','DiscussionController@update');

	// //Lấy thảo luận biết đề tài thảo luận + id thảo luận
	Route::get('/discussion/user/{discussion_type_id}/{discussion_id}','DiscussionController@userDiscussionWithType');
});


// ==============Library=======================
Route::namespace ('Frontend')->group(function () {
	Route::group(['prefix'=>'library/paginate'], function(){
		Route::get('image','LibraryController@imagePaginate');
		Route::get('video','LibraryController@videoPaginate');
		Route::get('document','LibraryController@documentPaginate');
	});
});


// ==============Contact=======================
Route::group(['prefix'=>'contact'], function(){
    Route::post('create','Frontend\ContactController@store');
});

// ==============User Manual=======================
Route::group(['prefix'=>'usermanual'], function(){
   	Route::get('show/{id}', 'Frontend\UserManualController@show');
});

Route::group(['prefix'=>'usermanual'], function(){
   	Route::get('getlist', 'Frontend\UserManualController@getList');
});


// ==============Rule=======================
Route::group(['prefix'=>'rule'], function(){
   	Route::get('show/{slug}', 'Frontend\RuleController@show');
   	Route::get('getlist', 'Frontend\RuleController@getList');
});

Route::get('/support','Frontend\RuleController@index');


// ==============...........=======================
Route::get('/search/{keyword}', 'Frontend\FrontendController@search');

Route::get('/listhomeinfo', 'Frontend\FrontendController@listInfo');


//Comment Discussion
Route::get('/discussion/comments/{id}', 'Frontend\CommentDiscussionController@fetchComments');
// Route::get('/comments/{id}', 'Frontend\CommentDiscussionController@fetch');
Route::post('/discussion/comments/create', 'Frontend\CommentDiscussionController@store');


//settings
Route::get('/settings', 'Frontend\SettingController');


//favorite
Route::post('favorite/{discussion}', 'Frontend\LikeDiscussionController@favoriteDiscussion');
Route::post('unfavorite/{discussion}', 'Frontend\LikeDiscussionController@unFavoriteDiscussion');

Route::get('my-favorites', 'Frontend\UserController@myFavorites');	//->middleware('auth');


//rating
Route::post('/rating/new', 'Frontend\RatingController@setRating')->name('setrating');
Route::get('/rating/{id}', 'Frontend\RatingController@getRating')->name('getrating');
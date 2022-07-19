<?php

//Authentication
Route::post('/create-account', 'Auth\RegisterController@createAccount');

Route::post('/login', 'Auth\LoginController@signin')->name('login');

Route::group(['middleware' => 'auth:sanctum'], function () {  
    Route::put('/admin/user/change-password', 'Auth\AuthenticationController@changePassword');
});

//using middleware
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/profile', 'Auth\AuthenticationController@profile');
    Route::post('/logout', 'Auth\AuthenticationController@logout');
});



//=================BLOG================//
Route::namespace ('API')->group(function () {

    Route::group(['prefix'=>'admins', 'middleware' => 'auth:sanctum'], function () {  //

        Route::apiResource('categories', 'CategoryController');

        Route::apiResource('tags', 'TagsController');

        Route::apiResource('contacts', 'ContactController');

        Route::apiResource('links', 'LinkController');

        Route::apiResource('discussion-types', 'DiscussionTypeController');

        Route::apiResource('library-types', 'LibraryTypeController');

        Route::apiResource('libraries', 'LibraryController');

        Route::apiResource('rules', 'RuleController');
        Route::post('rule/change-status', 'RuleController@changeStatus');

        Route::apiResource('discussions', 'DiscussionController');
        Route::get('discussion/comments', 'CommentDiscussionController@index');
        Route::get('discussion/rating', 'DiscussionController@rating');
        Route::delete('discussion/comment/{id}', 'CommentDiscussionController@destroy');


        Route::apiResource('tpacks', 'TpackController');
       
        Route::apiResource('abouts', 'AboutController')->except([
            'create', 'store', 'destroy'
        ]);

        Route::apiResource('news', 'NewsController');

        Route::apiResource('user-manuals', 'UserManualController');

        Route::get('contacts', 'ContactController@index');
        Route::delete('contacts/{id}', 'ContactController@destroy');
       
        Route::get('links', 'LinkController@index');
        Route::delete('links/{id}', 'LinkController@destroy');

        Route::get('chart', 'HomeController@chart');

        Route::get('count-dashboards', 'HomeController@index');

    });
    
});


Route::namespace ('Acl')->group(function () {
    Route::group(['prefix' => 'admins'], function() {   //, 'middleware' => 'auth:sanctum'
        Route::apiResource('users', 'UserController');

        Route::apiResource('roles', 'RoleController');

        Route::apiResource('permissions', 'PermissionController');

        Route::get('permission-roles', 'RoleController@permissionRoles');

    });    
});


Route::namespace ('ApiResponse')->group(function () {
    Route::get('setauthorization/{access}', 'BaseAuthorization')->middleware('auth:sanctum');
});


Route::namespace ('API')->group(function () {

    Route::patch('admins/settings', 'SettingController');

});






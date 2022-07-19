<?php

use Illuminate\Database\Seeder;

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            [
                'name' => 'Super Admin',
                'user_id' => 1,
                'status' => 'active',
                'created_at' => Carbon::now(),
            ],
            [
                'name' => 'Admin',
                'user_id' => 2,
                'status' => 'active',
                'created_at' => Carbon::now(),
            ],
            [
                'name' => 'Author',
                'user_id' => 3,
                'status' => 'active',
                'created_at' => Carbon::now(),
            ],
            [
                'name' => 'Editor',
                'user_id' => 4,
                'status' => 'active',
                'created_at' => Carbon::now(),
            ],
            [
                'name' => 'User',
                'user_id' => 5,
                'status' => 'active',
                'created_at' => Carbon::now(),
            ],
        ];

        foreach($roles as $role) {
            DB::table('roles')->insert($role);
        }
    }
}

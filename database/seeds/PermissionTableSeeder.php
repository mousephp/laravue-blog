<?php

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
            'Products-all',
            'Products-view',
            'Products-create',
            'Products-edit',
            'Products-delete',
            'Roles-all',
            'Roles-view',
            'Roles-create',
            'Roles-edit',
            'Roles-delete',
            'Permissions-all',
            'Permissions-view',
            'Permissions-create',
            'Permissions-edit',
            'Permissions-delete',
        ];

        foreach ($permissions as $permission) {
            $input = [
                'name' => $permission,
                'status' => 'active',
                'created_at' => Carbon::now(),
            ];
            DB::table('permissions')->insert($input);
        }
    }
}

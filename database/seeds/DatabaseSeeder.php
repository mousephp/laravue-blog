<?php

use Illuminate\Database\Seeder;
//use Hash;

// use Database\Seeders\RoleTableSeeder;
// use Database\Seeders\PermissionTableSeeder;
// use Database\Seeders\PermissionRoleTableSeeder;

use App\Models\Permission;
use App\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        // $this->call(TpackTableSeeder::class);
        // $this->call(AboutTableSeeder::class);
        // $this->call(CateSeeder::class);
        // $this->call(TagSeeder::class);
        // $this->call(NewsTableSeeder::class);
        // $this->call(DiscussionTypeTableSeeder::class);
        // $this->call(DiscussionTableSeeder::class);
        // $this->call(CommentDiscussionTableSeeder::class);
        // $this->call(CommentDiscussionDetailTableSeeder::class);
        // $this->call(CommentDetailBlogTableSeeder::class);
        // $this->call(LibraryTypeTableSeeder::class);
        // $this->call(LibraryTableSeeder::class);
        // $this->call(ContactTableSeeder::class);
        // $this->call(UserManualTableSeeder::class);
        // $this->call(RuleTableSeeder::class);
        // $this->call(SettingTableSeeder::class);
        // $this->call(LinkTableSeeder::class);

        // $this->call(RoleTableSeeder::class);
        // $this->call(PermissionTableSeeder::class);
        // $this->call(PermissionRoleTableSeeder::class);








         /**
        * Cài đặt
        */
        // Cài đặt chung
        // Permissions
    $permissions = array(
        // quyền truy cập dashboard
        array("name" => "dashboard", "group" => "dashboard", "description" => "Truy cập dashboard"),
        // quyền thay đổi thông tin app
        array("name" => "setting", "group" => "setting", "description" => "Thay đổi thông tin app"),
        // phân quyền
        array("name" => "permission", "group" => "permission", "description" => "Truy cập danh sách quyền"),
        // quyền nhãn hiệu/brand
        array("name" => "brand.access", "group" => "brand", "description" => "Truy cập danh sách nhãn hiệu"),
        array("name" => "brand.create", "group" => "brand", "description" => "Thêm nhãn hiệu"),
        array("name" => "brand.update", "group" => "brand", "description" => "Cập nhật nhãn hiệu"),
        array("name" => "brand.view", "group" => "brand", "description" => "Xem chi tiết nhãn hiệu"),
        array("name" => "brand.delete", "group" => "brand", "description" => "Xoá nhãn hiệu"),
        // quyền danh mục/category
        array("name" => "category.access", "group" => "category", "description" => "Truy cập danh sách danh mục"),
        array("name" => "category.create", "group" => "category", "description" => "Thêm danh mục"),
        array("name" => "category.update", "group" => "category", "description" => "Cập nhật danh mục"),
        array("name" => "category.view", "group" => "category", "description" => "Xem chi tiết danh mục"),
        array("name" => "category.delete", "group" => "category", "description" => "Xoá danh mục"),
        // quyền danh bình luận
        array("name" => "comment.access", "group" => "comment", "description" => "Truy cập danh sách bình luận"),
        array("name" => "comment.create", "group" => "comment", "description" => "Thêm bình luận"),
        array("name" => "comment.update", "group" => "comment", "description" => "Cập nhật bình luận"),
        array("name" => "comment.view", "group" => "comment", "description" => "Xem chi tiết bình luận"),
        array("name" => "comment.delete", "group" => "comment", "description" => "Xoá bình luận"),
        // quyền danh mã giảm giá/coupon
        array("name" => "coupon.access", "group" => "coupon", "description" => "Truy cập danh sách mã giảm giá"),
        array("name" => "coupon.create", "group" => "coupon", "description" => "Thêm mã giảm giá"),
        array("name" => "coupon.update", "group" => "coupon", "description" => "Cập nhật mã giảm giá"),
        array("name" => "coupon.view", "group" => "coupon", "description" => "Xem chi tiết mã giảm giá"),
        array("name" => "coupon.delete", "group" => "coupon", "description" => "Xoá mã giảm giá"),
        // quyền đơn hàng/order
        array("name" => "order.access", "group" => "order", "description" => "Truy cập danh đơn hàng"),
        array("name" => "order.create", "group" => "order", "description" => "Thêm đơn hàng"),
        array("name" => "order.update", "group" => "order", "description" => "Cập nhật đơn hàng"),
        array("name" => "order.view", "group" => "order", "description" => "Xem chi tiết đơn hàng"),
        array("name" => "order.delete", "group" => "order", "description" => "Xoá đơn hàng"),
        // quyền sản phẩm/product
        array("name" => "product.access", "group" => "product", "description" => "Truy cập danh sách sản phẩm"),
        array("name" => "product.create", "group" => "product", "description" => "Thêm sản phẩm"),
        array("name" => "product.update", "group" => "product", "description" => "Cập nhật sản phẩm"),
        array("name" => "product.view", "group" => "product", "description" => "Xem chi tiết sản phẩm"),
        array("name" => "product.delete", "group" => "product", "description" => "Xoá sản phẩm"),
        // quyền đánh giá/rating
        array("name" => "rating.access", "group" => "rating", "description" => "Truy cập danh đánh giá"),
        array("name" => "rating.create", "group" => "rating", "description" => "Thêm đánh giá"),
        array("name" => "rating.update", "group" => "rating", "description" => "Cập nhật đánh giá"),
        array("name" => "rating.view", "group" => "rating", "description" => "Xem chi tiết đánh giá"),
        array("name" => "rating.delete", "group" => "rating", "description" => "Xoá đánh giá"),
        // quyền vai trò/role
        array("name" => "role.access", "group" => "role", "description" => "Truy cập danh vai trò"),
        array("name" => "role.create", "group" => "role", "description" => "Thêm vai trò"),
        array("name" => "role.update", "group" => "role", "description" => "Cập nhật vai trò"),
        array("name" => "role.view", "group" => "role", "description" => "Xem chi tiết vai trò"),
        array("name" => "role.delete", "group" => "role", "description" => "Xoá vai trò"),
        // quyền thẻ tag
        array("name" => "tag.access", "group" => "tag", "description" => "Truy cập danh sách thẻ"),
        array("name" => "tag.create", "group" => "tag", "description" => "Thêm thẻ"),
        array("name" => "tag.update", "group" => "tag", "description" => "Cập nhật thẻ"),
        array("name" => "tag.view", "group" => "tag", "description" => "Xem chi tiết thẻ"),
        array("name" => "tag.delete", "group" => "tag", "description" => "Xoá thẻ"),
        // quyền loại thuế
        array("name" => "tax.access", "group" => "tax", "description" => "Truy cập danh sách loại thuế"),
        array("name" => "tax.create", "group" => "tax", "description" => "Thêm loại thuế"),
        array("name" => "tax.update", "group" => "tax", "description" => "Cập nhật loại thuế"),
        array("name" => "tax.view", "group" => "tax", "description" => "Xem chi tiết loại thuế"),
        array("name" => "tax.delete", "group" => "tax", "description" => "Xoá loại thuế"),
        // quyền người theo dõi
        array("name" => "subscriber.access", "group" => "subscriber", "description" => "Truy cập danh sách người theo dõi"),
        array("name" => "subscriber.create", "group" => "subscriber", "description" => "Thêm người theo dõi"),
        array("name" => "subscriber.update", "group" => "subscriber", "description" => "Cập nhật người theo dõi"),
        array("name" => "subscriber.view", "group" => "subscriber", "description" => "Xem chi tiết người theo dõi"),
        array("name" => "subscriber.delete", "group" => "subscriber", "description" => "Xoá người theo dõi"),
        // người dùng
        array("name" => "user.access", "group" => "user", "description" => "Truy cập danh người dùng"),
        array("name" => "user.create", "group" => "user", "description" => "Thêm người dùng"),
        array("name" => "user.update", "group" => "user", "description" => "Cập nhật người dùng"),
        array("name" => "user.view", "group" => "user", "description" => "Xem chi tiết người dùng"),
        array("name" => "user.delete", "group" => "user", "description" => "Xoá người dùng"),
      );

      Permission::insert($permissions);
      $permissions_ids = array();
      for ($i = 0; $i < count($permissions); ++$i) {
        $permissions_ids[] = $i + 1;
      }

      // Roles
      $role_admin = Role::firstOrCreate(['name' => 'Quản trị viên', 'slug' => 'admin']);
      $role_admin->permissions()->sync($permissions_ids);
      $role_customer = Role::firstOrCreate(['name' => 'customer', 'slug' => 'customer']);

      // Users
    //   $user = User::firstOrCreate(
    //     ['email' => 'admin@hifymart.com'],
    //     [
    //       'name' => 'Admin',
    //       'password' => Hash::make('12345678'),
    //       'email_verified_at' => now()
    //     ]
    //   );
    //   $user->roles()->sync([$role_admin->id]);
  
    //   $user = User::firstOrCreate(
    //     ['email' => 'user@hifymart.com'],
    //     [
    //       'name' => 'Customer',
    //       'password' => Hash::make('12345678'),
    //       'email_verified_at' => now()
    //     ]
    //   );
    //   $user->roles()->sync([$role_customer->id]);
       
    }
}

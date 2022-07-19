<?php

use Illuminate\Database\Seeder;
use function GuzzleHttp\json_decode;
use Faker\Factory;
use Illuminate\Support\Facades\DB;
use Faker\Provider\Internet;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    { 
        $faker = Factory::create();
        for ($i =0; $i<30;$i++){
            DB::table('products')->insert(
                [
                    'prod_title'        => $faker->catchPhrase,
                    'prod_image_path'   => "/images/" . strval($faker->numberBetween(1,10)) .".jpg",
                    'prod_image_name'   => $faker->name,
                    'prod_price'        => $faker->numberBetween(50000,5000000),
                    'prod_quantity'     => $faker->numberBetween(2,30),
                    'prod_description'  => $faker->text,
                    'prod_status'       => $faker->numberBetween(0,1),
                    'prod_featured'     => $faker->numberBetween(0,1),
                    'prod_slug'         => $faker->slug,
                    'cate_id'           => $faker->numberBetween(1,5),
                    'user_id'           => $faker->numberBetween(1,4),
                    'tag_id'            => $faker->numberBetween(1,4),
                ]
            );
        }
    }

}

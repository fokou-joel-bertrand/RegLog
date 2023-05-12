<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('firstname');
            $table->string('lastname');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('country');
            $table->string('phonenumber')->unique();
            $table->string('countrycode');
            $table->string('city');
            $table->string('useraddress');
            $table->string('companyname');
            $table->string('companysize');
            $table->string('compagnyadress');
            $table->string('compagnylogo');
            $table->string('googleid')->nullable()->unique();
            $table->string('facebookif')->nullable()->unique();
            $table->timestamp('email_verified_at')->nullable();

            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}

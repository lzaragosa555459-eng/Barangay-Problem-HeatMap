<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = [
        'system_name',
        'system_logo',

        'maintenance_mode',

        'theme',

        'notification_email',
        'notification_sms',

        'default_latitude',
        'default_longitude',

        'contact_email',
        'contact_phone',
    ];
}
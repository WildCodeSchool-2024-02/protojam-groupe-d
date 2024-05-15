<?php

namespace App\Controller;

abstract class AbstractAPIController extends AbstractController
{
    public function __construct()
    {
        parent::__construct();
        header('Content-Type: application/json');
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST,GET,PUT,DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Authorization, Origin, X-Requested-With, Content-Type, Accept");
    }
}

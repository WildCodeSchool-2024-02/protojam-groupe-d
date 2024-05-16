<?php

namespace App\Controller;

use App\Model\RoomManager;

class RoomController extends AbstractAPIController
{
    public function index()
    {
        $roomManager = new RoomManager();

        $rooms = $roomManager->getAllRooms();

        return json_encode($rooms);
    }

    public function show(int $id)
    {
        $roomManager = new RoomManager();
        $room = $roomManager->selectRoom($id);
        
        return json_encode($room);
    }
}
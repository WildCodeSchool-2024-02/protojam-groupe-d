<?php

namespace App\Model;

use PDO;

class RoomManager extends AbstractManager
{
    public const TABLE = 'room';
    public const TABLE1 = 'Room_Item';
    public const TABLE2 = 'item';

    public function getAllRooms(string $orderBy = '', string $direction = 'ASC'): array
    {

        /*
        SELECT * FROM Room R JOIN room_Item RI ON R.id=RI.room_id JOIN item I ON RI.item_id=I.id
        */
        $query = 'SELECT R.*, R.name as rname, R.consumption as rconsumption, I.*, I.consumption as iconsumption FROM '
        .self::TABLE.' R JOIN '
        .self::TABLE1.' RI ON R.id=RI.room_id JOIN '
        .self::TABLE2.' I ON RI.item_id=I.id';
        
        if ($orderBy) {
            $query .= ' ORDER BY ' . $orderBy . ' ' . $direction;
        }

        $statement = $this->pdo->query($query);
        return $statement->fetchAll();
    }

    public function selectRoom(int $id, string $orderBy = '', string $direction = 'ASC')
    {
        /*
        SELECT * FROM Room R JOIN room_Item RI ON R.id=RI.room_id JOIN item I ON RI.item_id=I.id WHERE R.id = 1
        */
        $query = 'SELECT R.*, R.name as rname, R.consumption as rconsumption, I.*, I.consumption as iconsumption FROM '
                .self::TABLE.' R JOIN '
                .self::TABLE1.' RI ON R.id=RI.room_id JOIN '
                .self::TABLE2.' I ON RI.item_id=I.id 
                WHERE R.id = :id
                ORDER BY :orderBy :direction';

                $statement = $this->pdo->prepare($query);
                $statement->bindValue('id', $id, \PDO::PARAM_INT);
                $statement->bindValue('orderBy', $orderBy, \PDO::PARAM_STR);
                $statement->bindValue('direction', $direction, \PDO::PARAM_STR);
                $statement->execute();
        
                return $statement->fetchAll();
    }
}
-- SQLBook: Code
-- Active: 1711381363336@@127.0.0.1@3306@versaille
-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 26 Octobre 2017 à 13:53
-- Version du serveur :  5.7.19-0ubuntu0.16.04.1
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE DATABASE versaille;
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `simple-mvc`
--

-- --------------------------------------------------------

--
-- Structure de la table `item`
--

CREATE TABLE item (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    consumption INT(20),
    is_active BOOL,
    is_always_active BOOL
);

ALTER TABLE item MODIFY COLUMN consumption FLOAT;
--
-- Contenu de la table `item`
--
INSERT INTO item (id, name, consumption, is_active, is_always_active) 
VALUES 
(1, 'Réfrigérateur', 0.7, 1, 1),
(2, 'Four', 0.4, 0, 0),
(3, 'Plaque de Cuisson', 0.5, 0, 0),
(4, 'Lave-vaisselle', 0.5, 0, 0),
(5, 'Congélateur', 0.9, 0, 0),
(6, 'Ordinateur portable', 0.3, 0, 0),
(7, 'Téléviseur LCD', 0.3, 0, 0),
(8, 'Smartphone', 0.1, 0, 0),
(9, 'Box (internet + TV)', 0.7, 1, 1),
(10, 'Machine à laver', 0.5, 0, 0),
(11, 'Sèche-linge', 0.9, 0, 0),
(12, 'Chauffe-eau', 4.6, 1, 1),
(13, 'Ordinateur', 0.1, 0, 0),
(14, 'Voiture électrique', 8.2, 1, 0),
(15, 'Panneau solaire', -2.0, 1, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- Table Room 

CREATE TABLE Room (
  id INT AUTO_INCREMENT PRIMARY KEY, 
  name VARCHAR (255) NOT NULL,
  consumption INT(20) NOT NULl, 
  light_on BOOL NOT NULL
);

ALTER TABLE Room MODIFY COLUMN consumption FLOAT;

INSERT INTO
    `Room` (`id`, `name`, `consumption`, `light_on`)
     VALUES (1, 'Cuisine', 0.2, 0),
    (2, 'Salle à manger', 0.4, 0),  -- TV, Décodeur, lampe, console, box
    (3, 'Salle de bain', 0.2, 0),  -- Seche cheveux, lampe, 
    (4, 'Chambre', 0.3, 0),
    (5, 'Garage', 0.1, 0); -- Ordinateur, TV, Lampe, Console, Telephone

-- Table de jointure

CREATE TABLE Room_Item (
  id INT AUTO_INCREMENT PRIMARY KEY,
  room_id INT (30) NOT NULL,
  item_id INT (30) NOT NULL
);

INSERT INTO
    `Room_Item` (`id`, `room_id`, `item_id`)
     VALUES (1, 1, 1),
    (2, 1, 2),  -- TV, Décodeur, lampe, console, box
    (3, 1, 3),  -- Seche cheveux, lampe, 
    (4, 1, 4),
    (5, 1, 5),
    (6, 2, 6),
    (6, 2, 2),
    (6, 2, 15),
    ; -- Ordinateur, TV, Lampe, Console, Telephone
-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : jeu. 06 avr. 2023 à 21:26
-- Version du serveur : 5.7.33
-- Version de PHP : 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `prism4`
--

-- --------------------------------------------------------

--
-- Structure de la table `answer`
--

CREATE TABLE `answer` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `flag` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `continentId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `answer`
--

INSERT INTO `answer` (`id`, `name`, `flag`, `continentId`) VALUES
('1', 'Népal', '66px-Flag_of_Nepal.svg.png', 3),
('10', 'Saint-Marin', '107px-Flag_of_San_Marino.svg.png', 4),
('100', 'Venezuela', '120px-Flag_of_Venezuela.svg.png', 5),
('101', 'Vietnam', '120px-Flag_of_Vietnam.svg.png', 3),
('102', 'Yémen', '120px-Flag_of_Yemen.svg.png', 3),
('103', 'Zambie', '120px-Flag_of_Zambia.svg.png', 1),
('104', 'Cambodge', '125px-Flag_of_Cambodia.svg.png', 3),
('105', 'Estonie', '126px-Flag_of_Estonia.svg.png', 4),
('106', 'Argentine', '128px-Flag_of_Argentina.svg.png', 5),
('107', 'Guatemala', '128px-Flag_of_Guatemala.svg.png', 5),
('108', 'Palau', '128px-Flag_of_Palau.svg.png', 2),
('109', 'Pologne', '128px-Flag_of_Poland.svg.png', 4),
('11', 'République démocratique du Congo', '107px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png', 1),
('110', 'Suède', '128px-Flag_of_Sweden.svg.png', 4),
('111', 'Togo', '130px-Flag_of_Togo.svg.png', 1),
('112', 'Finlande', '131px-Flag_of_Finland.svg.png', 4),
('113', 'Bahreïn', '134px-Flag_of_Bahrain.svg.png', 3),
('114', 'Bangladesh', '134px-Flag_of_Bangladesh.svg.png', 3),
('115', 'Belize', '134px-Flag_of_Belize.svg.png', 5),
('116', 'Bulgarie', '134px-Flag_of_Bulgaria.svg.png', 4),
('117', 'Burundi', '134px-Flag_of_Burundi.svg.png', 1),
('118', 'Costa Rica', '134px-Flag_of_Costa_Rica.svg.png', 5),
('119', 'Allemagne', '134px-Flag_of_Germany.svg.png', 4),
('12', 'Israël', '110px-Flag_of_Israel.svg.png', 3),
('120', 'Grenade', '134px-Flag_of_Grenada.svg.png', 5),
('121', 'Guyane', '134px-Flag_of_Guyana.svg.png', 5),
('122', 'Haïti', '134px-Flag_of_Haiti.svg.png', 5),
('123', 'Kyrgyzstan', '134px-Flag_of_Kyrgyzstan.svg.png', 3),
('124', 'Liechtenstein', '134px-Flag_of_Liechtenstein.svg.png', 4),
('125', 'Lituanie', '134px-Flag_of_Lithuania.svg.png', 4),
('126', 'Luxembourg', '134px-Flag_of_Luxembourg.svg.png', 4),
('127', 'Nicaragua', '134px-Flag_of_Nicaragua.svg.png', 5),
('128', 'les Comores', '134px-Flag_of_the_Comoros.svg.png', 1),
('129', 'le Royaume-Uni', '134px-Flag_of_the_United_Kingdom.svg.png', 4),
('13', 'Norvège', '110px-Flag_of_Norway.svg.png', 4),
('130', 'Trinité-et-Tobago', '134px-Flag_of_Trinidad_and_Tobago.svg.png', 5),
('131', 'Vanuatu', '134px-Flag_of_Vanuatu.svg.png', 2),
('132', 'Cap-Vert', '136px-Flag_of_Cape_Verde.svg.png', 1),
('133', 'l\'Iran', '140px-Flag_of_Iran.svg.png', 3),
('134', 'Mexique', '140px-Flag_of_Mexico.svg.png', 5),
('135', 'El Salvador', '142px-Flag_of_El_Salvador.svg.png', 5),
('136', 'Paraguay', '146px-Flag_of_Paraguay.svg.png', 5),
('137', 'Libéria', '152px-Flag_of_Liberia.svg.png', 1),
('138', 'les États fédérés de Micronésie', '152px-Flag_of_the_Federated_States_of_Micronesia.svg.png', 2),
('139', 'les Îles Marshall', '152px-Flag_of_the_Marshall_Islands.svg.png', 2),
('14', 'Islande', '111px-Flag_of_Iceland.svg.png', 4),
('140', 'les États-Unis', '152px-Flag_of_the_United_States.svg.png', 5),
('141', 'Arménie', '160px-Flag_of_Armenia.svg.png', 3),
('142', 'Australie', '160px-Flag_of_Australia.svg.png', 2),
('143', 'Azerbaïdjan', '160px-Flag_of_Azerbaijan.svg.png', 3),
('144', 'Biélorussie', '160px-Flag_of_Belarus.svg.png', 4),
('145', 'Bosnie-Herzégovine', '160px-Flag_of_Bosnia_and_Herzegovina.svg.png', 4),
('146', 'Brunei', '160px-Flag_of_Brunei.svg.png', 3),
('147', 'Canada', '160px-Flag_of_Canada.svg.png', 5),
('148', 'Croatie', '160px-Flag_of_Croatia.svg.png', 4),
('149', 'Cuba', '160px-Flag_of_Cuba.svg.png', 5),
('15', 'Albanie', '112px-Flag_of_Albania.svg.png', 4),
('150', 'Dominique', '160px-Flag_of_Dominica.svg.png', 5),
('151', 'Timor oriental', '160px-Flag_of_East_Timor.svg.png', 3),
('152', 'Erythrée', '160px-Flag_of_Eritrea.svg.png', 1),
('153', 'Éthiopie', '160px-Flag_of_Ethiopia.svg.png', 1),
('154', 'Fidji', '160px-Flag_of_Fiji.svg.png', 2),
('155', 'Guinée-Bissau', '160px-Flag_of_Guinea-Bissau.svg.png', 1),
('156', 'Honduras', '160px-Flag_of_Honduras.svg.png', 5),
('157', 'Hongrie', '160px-Flag_of_Hungary.svg.png', 4),
('158', 'Irlande', '160px-Flag_of_Ireland.svg.png', 4),
('159', 'Jamaïque', '160px-Flag_of_Jamaica.svg.png', 5),
('16', 'Andorre', '114px-Flag_of_Andorra.svg.png', 4),
('160', 'Jordanie', '160px-Flag_of_Jordan.svg.png', 3),
('161', 'Kazakhstan', '160px-Flag_of_Kazakhstan.svg.png', 3),
('162', 'Kiribati', '160px-Flag_of_Kiribati.svg.png', 2),
('163', 'Koweït', '160px-Flag_of_Kuwait.svg.png', 3),
('164', 'Lettonie', '160px-Flag_of_Latvia.svg.png', 4),
('165', 'Libye', '160px-Flag_of_Libya.svg.png', 1),
('166', 'Malaisie', '160px-Flag_of_Malaysia.svg.png', 3),
('167', 'Moldavie', '160px-Flag_of_Moldova.svg.png', 4),
('168', 'Mongolie', '160px-Flag_of_Mongolia.svg.png', 3),
('169', 'Monténégro', '160px-Flag_of_Montenegro.svg.png', 4),
('17', 'Brésil', '114px-Flag_of_Brazil.svg.png', 5),
('170', 'Nauru', '160px-Flag_of_Nauru.svg.png', 2),
('171', 'Nouvelle Zélande', '160px-Flag_of_New_Zealand.svg.png', 2),
('172', 'Nigéria', '160px-Flag_of_Nigeria.svg.png', 1),
('173', 'Niue', '160px-Flag_of_Niue.svg.png', 2),
('174', 'Corée du Nord', '160px-Flag_of_North_Korea.svg.png', 3),
('175', 'Macédoine du Nord', '160px-Flag_of_North_Macedonia.svg.png', 4),
('176', 'Oman', '160px-Flag_of_Oman.svg.png', 3),
('177', 'Palestine', '160px-Flag_of_Palestine.svg.png', 3),
('178', 'Sainte-Lucie', '160px-Flag_of_Saint_Lucia.svg.png', 5),
('179', 'Samoa', '160px-Flag_of_Samoa.svg.png', 2),
('18', 'Bolivie', '118px-Flag_of_Bolivia.svg.png', 5),
('180', 'Seychelles', '160px-Flag_of_Seychelles.svg.png', 1),
('181', 'Slovénie', '160px-Flag_of_Slovenia.svg.png', 4),
('182', 'Soudan du Sud', '160px-Flag_of_South_Sudan.svg.png', 1),
('183', 'Sri Lanka', '160px-Flag_of_Sri_Lanka.svg.png', 3),
('184', 'Soudan', '160px-Flag_of_Sudan.svg.png', 1),
('185', 'Sao Tomé et Principe', '160px-Flag_of_Sao_Tome_and_Principe.svg.png', 1),
('186', 'Tadjikistan', '160px-Flag_of_Tajikistan.svg.png', 3),
('187', 'les Bahamas', '160px-Flag_of_the_Bahamas.svg.png', 5),
('188', 'les îles Cook', '160px-Flag_of_the_Cook_Islands.svg.png', 2),
('189', 'les Philippines', '160px-Flag_of_the_Philippines.svg.png', 3),
('19', 'Algérie', '120px-Flag_of_Algeria.svg.png', 1),
('190', 'les Îles Salomon', '160px-Flag_of_the_Solomon_Islands.svg.png', 2),
('192', 'les Émirats arabes unis', '160px-Flag_of_the_United_Arab_Emirates.svg.png', 3),
('193', 'Tonga', '160px-Flag_of_Tonga.svg.png', 2),
('194', 'Tuvalu', '160px-Flag_of_Tuvalu.svg.png', 2),
('195', 'Ouzbékistan', '160px-Flag_of_Uzbekistan.svg.png', 3),
('196', 'Zimbabwe', '160px-Flag_of_Zimbabwe.svg.png', 1),
('197', 'Qatar', '204px-Flag_of_Qatar.svg.png', 3),
('2', 'la Suisse', '80px-Flag_of_Switzerland.svg.png', 4),
('20', 'Angola', '120px-Flag_of_Angola.svg.png', 1),
('21', 'Antigua et Barbuda', '120px-Flag_of_Antigua_and_Barbuda.svg.png', 5),
('22', 'Autriche', '120px-Flag_of_Austria.svg.png', 4),
('23', 'Barbade', '120px-Flag_of_Barbados.svg.png', 5),
('24', 'Bénin', '120px-Flag_of_Benin.svg.png', 1),
('25', 'Bhoutan', '120px-Flag_of_Bhutan.svg.png', 3),
('26', 'Botswana', '120px-Flag_of_Botswana.svg.png', 1),
('27', 'Burkina Faso', '120px-Flag_of_Burkina_Faso.svg.png', 1),
('28', 'Cameroun', '120px-Flag_of_Cameroon.svg.png', 1),
('29', 'Tchad', '120px-Flag_of_Chad.svg.png', 1),
('3', 'la Cité du Vatican', '80px-Flag_of_the_Vatican_City.svg.png', 4),
('30', 'Chili', '120px-Flag_of_Chile.svg.png', 5),
('31', 'Colombie', '120px-Flag_of_Colombia.svg.png', 5),
('32', 'Chypre', '120px-Flag_of_Cyprus.svg.png', 4),
('33', 'Côte d\'Ivoire', '120px-Flag_of_Cote_d\'Ivoire.svg.png', 1),
('34', 'Djibouti', '120px-Flag_of_Djibouti.svg.png', 1),
('35', 'Equateur', '120px-Flag_of_Ecuador.svg.png', 5),
('36', 'Égypte', '120px-Flag_of_Egypt.svg.png', 1),
('37', 'Guinée équatoriale', '120px-Flag_of_Equatorial_Guinea.svg.png', 1),
('38', 'Eswatini', '120px-Flag_of_Eswatini.svg.png', 1),
('39', 'France', '120px-Flag_of_France.svg.png', 4),
('4', 'Belgique', '92px-Flag_of_Belgium.svg.png', 4),
('40', 'Géorgie', '120px-Flag_of_Georgia.svg.png', 3),
('41', 'Ghana', '120px-Flag_of_Ghana.svg.png', 1),
('42', 'Grèce', '120px-Flag_of_Greece.svg.png', 4),
('43', 'Guinée', '120px-Flag_of_Guinea.svg.png', 1),
('44', 'Inde', '120px-Flag_of_India.svg.png', 3),
('45', 'Indonésie', '120px-Flag_of_Indonesia.svg.png', 3),
('46', 'Irak', '120px-Flag_of_Iraq.svg.png', 3),
('47', 'Italie', '120px-Flag_of_Italy.svg.png', 4),
('48', 'Japon', '120px-Flag_of_Japan.svg.png', 3),
('49', 'Kenya', '120px-Flag_of_Kenya.svg.png', 1),
('5', 'Niger', '93px-Flag_of_Niger.svg.png', 1),
('50', 'Laos', '120px-Flag_of_Laos.svg.png', 3),
('51', 'Liban', '120px-Flag_of_Lebanon.svg.png', 3),
('52', 'Lesotho', '120px-Flag_of_Lesotho.svg.png', 1),
('53', 'Madagascar', '120px-Flag_of_Madagascar.svg.png', 1),
('54', 'Malawi', '120px-Flag_of_Malawi.svg.png', 1),
('55', 'Maldives', '120px-Flag_of_Maldives.svg.png', 3),
('56', 'Mali', '120px-Flag_of_Mali.svg.png', 1),
('57', 'Malte', '120px-Flag_of_Malta.svg.png', 4),
('58', 'Mauritanie', '120px-Flag_of_Mauritania.svg.png', 1),
('59', 'Mauritanie', '120px-Flag_of_Mauritius.svg.png', 1),
('6', 'Monaco', '100px-Flag_of_Monaco.svg.png', 4),
('60', 'Maroc', '120px-Flag_of_Morocco.svg.png', 1),
('61', 'Mozambique', '120px-Flag_of_Mozambique.svg.png', 1),
('62', 'Birmanie', '120px-Flag_of_Myanmar.svg.png', 3),
('63', 'Namibie', '120px-Flag_of_Namibia.svg.png', 1),
('64', 'Namibie', '120px-Flag_of_Pakistan.svg.png', 1),
('65', 'Panama', '120px-Flag_of_Panama.svg.png', 5),
('66', 'Pérou', '120px-Flag_of_Peru.svg.png', 5),
('67', 'Portugal', '120px-Flag_of_Portugal.svg.png', 4),
('68', 'Roumanie', '120px-Flag_of_Romania.svg.png', 4),
('69', 'Russie', '120px-Flag_of_Russia.svg.png', 4),
('7', 'Danemark', '106px-Flag_of_Denmark.svg.png', 4),
('70', 'Rwanda', '120px-Flag_of_Rwanda.svg.png', 1),
('71', 'Saint-Kitts-et-Nevis', '120px-Flag_of_Saint_Kitts_and_Nevis.svg.png', 5),
('72', 'Saint Vincent et les Grenadines', '120px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png', 5),
('73', 'Arabie Saoudite', '120px-Flag_of_Saudi_Arabia.svg.png', 3),
('74', 'Sénégal', '120px-Flag_of_Senegal.svg.png', 1),
('75', 'Serbie', '120px-Flag_of_Serbia.svg.png', 4),
('76', 'Sierra Leone', '120px-Flag_of_Sierra_Leone.svg.png', 1),
('77', 'Singapour', '120px-Flag_of_Singapore.svg.png', 3),
('78', 'Slovaquie', '120px-Flag_of_Slovakia.svg.png', 4),
('79', 'Somalie', '120px-Flag_of_Somalia.svg.png', 1),
('8', 'Gabon', '107px-Flag_of_Gabon.svg.png', 1),
('80', 'Afrique du Sud', '120px-Flag_of_South_Africa.svg.png', 1),
('81', 'Corée du Sud', '120px-Flag_of_South_Korea.svg.png', 3),
('82', 'Espagne', '120px-Flag_of_Spain.svg.png', 4),
('83', 'Suriname', '120px-Flag_of_Suriname.svg.png', 5),
('84', 'Syrie', '120px-Flag_of_Syria.svg.png', 3),
('85', 'Tanzanie', '120px-Flag_of_Tanzania.svg.png', 1),
('86', 'Thaïlande', '120px-Flag_of_Thailand.svg.png', 3),
('87', 'la République centrafricaine', '120px-Flag_of_the_Central_African_Republic.svg.png', 1),
('88', 'République tchèque', '120px-Flag_of_the_Czech_Republic.svg.png', 4),
('89', 'République dominicaine', '120px-Flag_of_the_Dominican_Republic.svg.png', 5),
('9', 'Papouasie-Nouvelle-Guinée', '107px-Flag_of_Papua_New_Guinea.svg.png', 2),
('90', 'Gambie', '120px-Flag_of_The_Gambia.svg.png', 1),
('91', 'Pays-Bas', '120px-Flag_of_the_Netherlands.svg.png', 4),
('92', 'République de Chine', '120px-Flag_of_Republic_of_China.svg.png', 3),
('93', 'la République du Congo', '120px-Flag_of_the_Republic_of_the_Congo.svg.png', 1),
('94', 'Tunisie', '120px-Flag_of_Tunisia.svg.png', 1),
('95', 'Turquie', '120px-Flag_of_Turkey.svg.png', 3),
('96', 'Turkménistan', '120px-Flag_of_Turkmenistan.svg.png', 3),
('97', 'Ouganda', '120px-Flag_of_Uganda.svg.png', 1),
('98', 'Ukraine', '120px-Flag_of_Ukraine.svg.png', 4),
('99', 'Uruguay', '120px-Flag_of_Uruguay.svg.png', 5);

-- --------------------------------------------------------

--
-- Structure de la table `continent`
--

CREATE TABLE `continent` (
  `id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `continent`
--

INSERT INTO `continent` (`id`, `name`) VALUES
(1, 'Afrique'),
(2, 'Océanie'),
(3, 'Asie'),
(4, 'Europe'),
(5, 'Amérique');

-- --------------------------------------------------------

--
-- Structure de la table `question`
--

CREATE TABLE `question` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `question` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quizId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `goodAnswer` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `question`
--

INSERT INTO `question` (`id`, `question`, `quizId`, `goodAnswer`) VALUES
('01482f25-a780-47d1-9c5d-44e28e050553', 'kojn', '210a5e4d-0288-462b-8022-aa56d599200c', '122'),
('1788e5ad-a308-4c2a-bc9c-cb78e7381d97', 'oyu', '210a5e4d-0288-462b-8022-aa56d599200c', '114'),
('98bf955e-3b1b-4b84-a289-0ecc26ac0dc7', 'fgreqz', '8f531066-33c9-4301-b20b-3e9eecef227f', '115');

-- --------------------------------------------------------

--
-- Structure de la table `quiz`
--

CREATE TABLE `quiz` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `difficulty` enum('SIMPLE','NORMAL','DIFFICILE') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'NORMAL',
  `authorId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isOnline` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `quiz`
--

INSERT INTO `quiz` (`id`, `name`, `difficulty`, `authorId`, `isOnline`) VALUES
('210a5e4d-0288-462b-8022-aa56d599200c', 'hj', 'NORMAL', '435eb29f-24d7-4805-ab7c-151502b10c34', 1),
('59906ded-8f86-48ac-8982-f0e675bf36de', 'l:hg', 'NORMAL', '435eb29f-24d7-4805-ab7c-151502b10c34', 0),
('8f531066-33c9-4301-b20b-3e9eecef227f', 'test', 'NORMAL', '5bbf6897-803c-4981-8fed-c1b573506967', 1);

-- --------------------------------------------------------

--
-- Structure de la table `score`
--

CREATE TABLE `score` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `score` int(11) NOT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quizId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `maxScore` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `score`
--

INSERT INTO `score` (`id`, `score`, `userId`, `quizId`, `maxScore`) VALUES
('3ef65189-41c6-4522-acf2-e47f043bb6fe', 1, '435eb29f-24d7-4805-ab7c-151502b10c34', NULL, 3),
('3fc8f53c-1593-43da-8bac-27c2720b39d2', 0, '435eb29f-24d7-4805-ab7c-151502b10c34', '8f531066-33c9-4301-b20b-3e9eecef227f', 1),
('47d2e3c8-ba50-4754-aa9f-28f6128cedeb', 1, '435eb29f-24d7-4805-ab7c-151502b10c34', '210a5e4d-0288-462b-8022-aa56d599200c', 2),
('7a7fe5a0-6ea0-43e5-90dc-3ce5be3aa9d3', 0, '435eb29f-24d7-4805-ab7c-151502b10c34', NULL, 1),
('b31394bc-560c-4439-80fc-8f4ba3214fd0', 0, '435eb29f-24d7-4805-ab7c-151502b10c34', '8f531066-33c9-4301-b20b-3e9eecef227f', 1);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('BASIC','ADMIN') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'BASIC'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `role`) VALUES
('435eb29f-24d7-4805-ab7c-151502b10c34', 'anna', 'hamidaomarova@gmail.com', '$2b$12$F6Vfbm1PkqR/rZM7PVGDz.T4dfTXe.C5th.geWnZqcr7et9.L0Vui', 'ADMIN'),
('55942999-0b49-4a87-a636-b11604508ffb', 'sam', 'sam@gmail.com', '$2b$12$dmu6nr1MrGS6HRAaCDcU8OqgBQLXmtHQN/NMCUiuzwtFiQ1kFWJuW', 'BASIC'),
('5bbf6897-803c-4981-8fed-c1b573506967', 'hugo', 'hugo@gmail.com', '$2b$12$QvaSgXvyt3es1paBdJNh4.k/ZN7m7USbntT6t/p92.15fqoG5BMPi', 'BASIC'),
('73600f1b-189e-43f5-b3e5-aa037981b1c1', 'fbfbf', 'bfds@fd.fvc', '$2b$12$CQ2vLNIb1f/yaG/w.6xape5Pu1AX6cvT.0Rf4zlEs6C8a64yNSmPe', 'BASIC'),
('b476dadb-82cd-498a-bd69-8038ced7f60f', 'test', 'front@test.com', '$2b$12$FTnkocmdPKl0O4NjDNl8EOP386tpcIGlEBB.QX.tA7O1geMTdoiqq', 'BASIC'),
('f67f0abc-011e-44df-8094-82e15a896bc0', 'jah', 'jah@gmail.com', '$2b$12$D4Y27KgdGig3jkDHjSuFz.0biWsL.iyST8v7xfDVD9rxDSj000bS6', 'BASIC');

-- --------------------------------------------------------

--
-- Structure de la table `_answertoquestion`
--

CREATE TABLE `_answertoquestion` (
  `A` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `B` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `_answertoquestion`
--

INSERT INTO `_answertoquestion` (`A`, `B`) VALUES
('113', '01482f25-a780-47d1-9c5d-44e28e050553'),
('114', '01482f25-a780-47d1-9c5d-44e28e050553'),
('115', '01482f25-a780-47d1-9c5d-44e28e050553'),
('122', '01482f25-a780-47d1-9c5d-44e28e050553'),
('114', '1788e5ad-a308-4c2a-bc9c-cb78e7381d97'),
('116', '1788e5ad-a308-4c2a-bc9c-cb78e7381d97'),
('117', '1788e5ad-a308-4c2a-bc9c-cb78e7381d97'),
('122', '1788e5ad-a308-4c2a-bc9c-cb78e7381d97'),
('113', '98bf955e-3b1b-4b84-a289-0ecc26ac0dc7'),
('114', '98bf955e-3b1b-4b84-a289-0ecc26ac0dc7'),
('115', '98bf955e-3b1b-4b84-a289-0ecc26ac0dc7'),
('121', '98bf955e-3b1b-4b84-a289-0ecc26ac0dc7');

-- --------------------------------------------------------

--
-- Structure de la table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('01daaff9-d139-4cd2-a7bd-1e9725716489', 'a79fa756ac65bdef63e2eddbdf2a92acb6be405a6ecfb89a7e071f249c8f0394', '2023-03-11 14:31:11.388', '20230311143110_test', NULL, NULL, '2023-03-11 14:31:10.762', 1),
('1e4e309c-3f01-4ee8-8d7c-c897febd1b8a', '572ac5df6b7cd6d844ee11378f832b036a008ee52167bc179c788c4160f26465', '2023-04-04 16:03:33.376', '20230404160332_score', NULL, NULL, '2023-04-04 16:03:32.588', 1),
('4a514ebd-d28d-41fb-9a9f-8f1477c1a53c', 'd4edc1dbf3a49215a219edcf3b23476b3b57287cdcf445931d2b77c6fcd94c73', '2023-03-21 09:28:08.102', '20230321092807_quiz', NULL, NULL, '2023-03-21 09:28:07.928', 1),
('6ca7cdc4-f668-4033-ba36-9056dd8a58ff', '2e1c0ae383f25467a9c8f41add2332fc38cc27e1ef495f788b1b01314efb554a', '2023-03-31 09:23:26.561', '20230331092326_good_answer', NULL, NULL, '2023-03-31 09:23:26.445', 1),
('7d924985-4dee-45a3-9e5f-8a90f785fe26', '8bbb37122b2971beb26d311ce75a2625ea5f2ca6dcc920603e7e235de95d4421', '2023-03-31 09:27:53.806', '20230331092753_good_answer_string', NULL, NULL, '2023-03-31 09:27:53.709', 1),
('b92cc489-0222-4cd3-bff0-13ff3a09b3af', '753ce00b8c67392ada8e49402b192bd1d668989507c3ac18b223d058f12d3a89', '2023-04-05 09:12:04.796', '20230405091204_max_score', NULL, NULL, '2023-04-05 09:12:04.691', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `answer`
--
ALTER TABLE `answer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Answer_continentId_fkey` (`continentId`);

--
-- Index pour la table `continent`
--
ALTER TABLE `continent`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Question_quizId_fkey` (`quizId`);

--
-- Index pour la table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Quiz_name_key` (`name`),
  ADD KEY `Quiz_authorId_fkey` (`authorId`);

--
-- Index pour la table `score`
--
ALTER TABLE `score`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Score_userId_fkey` (`userId`),
  ADD KEY `Score_quizId_fkey` (`quizId`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_name_key` (`name`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Index pour la table `_answertoquestion`
--
ALTER TABLE `_answertoquestion`
  ADD UNIQUE KEY `_AnswerToQuestion_AB_unique` (`A`,`B`),
  ADD KEY `_AnswerToQuestion_B_index` (`B`);

--
-- Index pour la table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `continent`
--
ALTER TABLE `continent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `answer`
--
ALTER TABLE `answer`
  ADD CONSTRAINT `Answer_continentId_fkey` FOREIGN KEY (`continentId`) REFERENCES `continent` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `Question_quizId_fkey` FOREIGN KEY (`quizId`) REFERENCES `quiz` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `quiz`
--
ALTER TABLE `quiz`
  ADD CONSTRAINT `Quiz_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `score`
--
ALTER TABLE `score`
  ADD CONSTRAINT `Score_quizId_fkey` FOREIGN KEY (`quizId`) REFERENCES `quiz` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Score_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `_answertoquestion`
--
ALTER TABLE `_answertoquestion`
  ADD CONSTRAINT `_AnswerToQuestion_A_fkey` FOREIGN KEY (`A`) REFERENCES `answer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_AnswerToQuestion_B_fkey` FOREIGN KEY (`B`) REFERENCES `question` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

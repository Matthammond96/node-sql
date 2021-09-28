-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: qwerty
-- ------------------------------------------------------
-- Server version	5.7.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Artists`
--

DROP TABLE IF EXISTS `Artists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Artists` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `artistName` text NOT NULL,
  `artistDescription` mediumtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Artists`
--

LOCK TABLES `Artists` WRITE;
/*!40000 ALTER TABLE `Artists` DISABLE KEYS */;
INSERT INTO `Artists` VALUES (1,'Dermot Kennedy','Dermot Joseph Kennedy is an Irish singer-songwriter. He is best known for his 2019 single \'Outnumbered\' and his 2020 single \'Giants\'. He is signed to Interscope Records in the US, and Island Records for the rest of the world. His debut major-label studio album, Without Fear, was released on 4 October 2019.'),(2,'Ed Sheeran','Edward Christopher Sheeran MBE is an English singer-songwriter, record producer, musician, and actor. Sheeran has sold more than 150 million records worldwide, making him one of the world\'s best-selling music artists'),(3,'Olivia Rodrigo','Olivia Isabel Rodrigo is an American singer-songwriter and actress. She is known for her roles as Paige Olvera on the Disney Channel series Bizaardvark and Nini Salazar-Roberts on the Disney+ mockumentary series High School Musical: The Musical: ');
/*!40000 ALTER TABLE `Artists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Songs`
--

DROP TABLE IF EXISTS `Songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Songs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `songTitle` text,
  `songDescription` mediumtext,
  `songLength` int(11) DEFAULT NULL,
  `songURL` text,
  `Artists_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`Artists_id`),
  KEY `fk_Songs_Artists_idx` (`Artists_id`),
  CONSTRAINT `fk_Songs_Artists` FOREIGN KEY (`Artists_id`) REFERENCES `Artists` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Songs`
--

LOCK TABLES `Songs` WRITE;
/*!40000 ALTER TABLE `Songs` DISABLE KEYS */;
INSERT INTO `Songs` VALUES (1,'Better Days',NULL,190,NULL,1),(2,'Gaints',NULL,154,NULL,1),(3,'Outnumbered',NULL,243,NULL,1),(4,'Giants',NULL,154,NULL,1),(5,'Rome',NULL,193,NULL,1),(6,'Bad Habits',NULL,210,NULL,2),(7,'Shivers',NULL,196,NULL,2),(8,'Perfect',NULL,258,NULL,2),(9,'Shape of You',NULL,211,NULL,2),(10,'Visiting Hours',NULL,201,NULL,2),(11,'hate u love u',NULL,153,NULL,3),(12,'Complicated',NULL,185,NULL,3),(13,'Josslyn',NULL,185,NULL,3),(14,'Fuck Feelings',NULL,180,NULL,3),(15,'No More Friends',NULL,187,NULL,3);
/*!40000 ALTER TABLE `Songs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-27 18:22:24

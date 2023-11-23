-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 23, 2023 at 10:49 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cug_src`
--

-- --------------------------------------------------------

--
-- Table structure for table `academiccommittee`
--

CREATE TABLE `academiccommittee` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `academiccommittee`
--

INSERT INTO `academiccommittee` (`id`, `name`, `position`, `img`) VALUES
(1, 'Victory  Oyekunle', 'President', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1681854432/images/vrtlg9x5izuedspajtaq.jpg'),
(2, 'Victory Olamide Oyekunle', 'Secetary', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1681685973/images/bxgrnknwqdrzyfvnsf9j.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `type` varchar(255) NOT NULL,
  `provider` varchar(255) NOT NULL,
  `provider_account_id` varchar(255) NOT NULL,
  `refresh_token` varchar(255) DEFAULT NULL,
  `access_token` varchar(255) DEFAULT NULL,
  `expires_at` int(11) DEFAULT NULL,
  `token_type` varchar(255) DEFAULT NULL,
  `scope` varchar(255) DEFAULT NULL,
  `id_token` text DEFAULT NULL,
  `session_state` varchar(255) DEFAULT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `username`, `password`, `role`) VALUES
(2, 'admin', '123456', 1),
(5, 'ruth', '$2a$10$ruCpH.xTD0Sbu35EFUB0ROceq9QEzn/1WKi7iHcLzq/..12QFSxbC', 2),
(6, 'icst', '$2a$10$fB5Ev4qA8zD59pgW37qC..cxPMUVLdhdqvlwbJePf6n/kMw6QAXdi', 1),
(7, 'src', '$2a$10$bHXi0VnvGsP5IIl57HroReiQFMYdCDRs5esUX1v5atUbNJhoukPKC', 1);

-- --------------------------------------------------------

--
-- Table structure for table `associations`
--

CREATE TABLE `associations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `faculty` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `associations`
--

INSERT INTO `associations` (`id`, `name`, `position`, `faculty`, `img`) VALUES
(1, 'Victory Olamide Oyekunle', 'Pusaga', 'CEMS', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1681852579/images/i1z3px3cvluid13lc43z.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `phone_no` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `position`, `phone_no`, `email`) VALUES
(1, 'Victory Olamide Oyekunle', 'President', '0207891567', 'victoryoyekunleolamide@gmail.com'),
(2, 'KLutsey Dominic', 'PRO', '0207891565', 'victoryoyekunle@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `editorialcommittee`
--

CREATE TABLE `editorialcommittee` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `editorialcommittee`
--

INSERT INTO `editorialcommittee` (`id`, `name`, `position`, `img`) VALUES
(1, 'Nancy Oyekunle', 'Secetary', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1681855223/images/cfzgseenjkelj8pie5zm.jpg'),
(2, 'KLutsey Dominic', 'Pusaga', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1681686049/images/xutuz3bzg7wfkh2rkakk.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `estatecommittee`
--

CREATE TABLE `estatecommittee` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `estatecommittee`
--

INSERT INTO `estatecommittee` (`id`, `name`, `position`, `img`) VALUES
(1, 'Victory  Oyekunle', 'Exam officer', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1681691463/images/lvah3uqrnmhoocf7os3c.jpg'),
(2, 'Victory  Oyekunle', 'Exam officer', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1681856006/images/buiagfrcoowjddktgusw.jpg'),
(3, 'Victory Olamide Oyekunle', 'President', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1683129346/images/loqxquupy9lo5mhn83de.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `description` varchar(255) NOT NULL,
  `event` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `title`, `img`, `date`, `description`, `event`) VALUES
(2, 'Akwab', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1687480407/images/oj5grh9vdjbcqvgts0ty.png', '2023-06-22', 'le content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing p', '<p><br></p><h2 style=\"text-align: left\" \"=\"\">What is Lorem Ipsum?</h2><p style=\"text-align: justify\" \"=\"\"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2 style=\"text-align: left\" \"=\"\">Why do we use it?</h2><p style=\"text-align: justify\" \"=\"\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>');

-- --------------------------------------------------------

--
-- Table structure for table `executives`
--

CREATE TABLE `executives` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `faculty` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `executives`
--

INSERT INTO `executives` (`id`, `name`, `position`, `faculty`, `img`) VALUES
(6, 'Raphael Kwadwo Quaque', 'President', 'Cems', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1687392973/images/nbcnn6robki4tiuvfmwc.jpg'),
(7, 'Mofaw Bella Sima', 'Vice president', 'EBA', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1687401433/images/drawdtszeobvubcdpbv3.jpg'),
(8, 'Patience Ayinbono Atiah', 'General Secretary', 'Education', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1687401629/images/dvjurobjcs2gqvfzgrha.jpg'),
(9, 'Gyabaa Yeboah Emmanuel', 'PRO', 'CEMS', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1687401827/images/p5yuoaggkjpia6bj9sgu.jpg'),
(10, 'Amoak Esther A.', 'Financial Secretary', 'Education', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1687401971/images/pe0w4fjtxd3yqgj6tzxx.jpg'),
(11, 'Osalaye Blessing', 'Deputy genereal Sec.', 'Education', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1687402044/images/ahfuzjon35wknq6q4pyn.jpg'),
(12, 'Serwaa Mary', 'Women\'s commissioner', 'AHAS', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1687402135/images/h2z4kcisjtwxhdeehhka.jpg'),
(13, 'Mensah Emmanuel', 'Deputy Financial Sec.', 'EBA', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1687402201/images/j5diadpdso8bsfhy2dio.jpg'),
(14, 'Chales Kwadwo Osei', 'Pusag president', 'EBA', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1687402338/images/phdlj4wf95kjnd76uacd.jpg'),
(15, 'Irene Bondanyi', 'Pusag secretery', 'AHAS', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1687402502/images/xvewvjucsofyc1jamz73.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `financecommittee`
--

CREATE TABLE `financecommittee` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `financecommittee`
--

INSERT INTO `financecommittee` (`id`, `name`, `position`, `img`) VALUES
(1, 'Nancy Oyekunle', 'Exam officer', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1681858569/images/kwlpv9txhbd3gttiyvro.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `judiciarycommittee`
--

CREATE TABLE `judiciarycommittee` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `judiciarycommittee`
--

INSERT INTO `judiciarycommittee` (`id`, `name`, `position`, `img`) VALUES
(1, 'Audrey', 'Exam ofiicer', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1683109987/images/zomudjvljrdmergvsqfv.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `news` text NOT NULL,
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `img`, `date`, `news`, `category`) VALUES
(1, 'Depression', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1682791563/images/vkxe1tgikfrzph4vvcbv.jpg', '2023-04-29', '<p style=\"text-align: justify\">​<span style=\"font-size: 21px\">Depression has become a common problem of today’s\n time, due to which most people suffer in life. This is because the importance\n of relationships is decreasing very quickly and due to this depression arises\n in people.</span></p><p style=\"text-align: justify\"> </p><p style=\"text-align: justify\"><span style=\"font-size:21px\">People want to keep themselves ahead in every field\n and when left behind, they become victims of depression. For this reason,\n depression is becoming a common disease. </span></p><p style=\"text-align: justify\"> </p><p style=\"text-align: justify\"><span style=\"font-size:21px\">The symptoms of depression are; when one feels sad\n and lonely, loss of appetite, weight loss, difficulty in sleeping,\n sleeplessness, excessive sleepiness, feeling of weakness in the body, feeling\n unimportant, feeling worthless, thoughts of suicide.</span></p><p style=\"text-align: justify\"> </p><p style=\"text-align: justify\"><span style=\"font-size:21px\">Depression can be treated under proper expert\n supervision, getting enough sleep, eating well, exercising regularly, getting\n regular medical check-ups, company of good friends.</span></p><p style=\"text-align: justify\"> </p><p style=\"text-align: justify\"><span style=\"font-size:21px\">Remember: action is the best anti-depressant for\n you. Look at the world from a new perspective; integrate into it on equal\n terms. Life is given only once, and you have no time to waste it. As soon as\n the world starts changing, you will keep a stronger touch with it. You will\n realize that inward problems are mainly our own creations, our own illusions\n our own misunderstandings. Share your doubts with the world, and you will be understood\n in return.</span></p><p style=\"text-align: justify\"> </p><p style=\"text-align: justify\"> </p><p style=\"text-align: justify\"><span style=\"font-size:21px\">THANK YOU </span></p><p style=\"text-align: justify\"> </p>', 'Article'),
(2, 'Depression', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1682791568/images/cpfz3eiur3d5sr5s2j1v.jpg', '2023-04-29', '<p style=\"text-align: justify\">​<span style=\"font-size: 21px\">Depression has become a common problem of today’s\n time, due to which most people suffer in life. This is because the importance\n of relationships is decreasing very quickly and due to this depression arises\n in people.</span></p><p style=\"text-align: justify\"> </p><p style=\"text-align: justify\"><span style=\"font-size:21px\">People want to keep themselves ahead in every field\n and when left behind, they become victims of depression. For this reason,\n depression is becoming a common disease. </span></p><p style=\"text-align: justify\"> </p><p style=\"text-align: justify\"><span style=\"font-size:21px\">The symptoms of depression are; when one feels sad\n and lonely, loss of appetite, weight loss, difficulty in sleeping,\n sleeplessness, excessive sleepiness, feeling of weakness in the body, feeling\n unimportant, feeling worthless, thoughts of suicide.</span></p><p style=\"text-align: justify\"> </p><p style=\"text-align: justify\"><span style=\"font-size:21px\">Depression can be treated under proper expert\n supervision, getting enough sleep, eating well, exercising regularly, getting\n regular medical check-ups, company of good friends.</span></p><p style=\"text-align: justify\"> </p><p style=\"text-align: justify\"><span style=\"font-size:21px\">Remember: action is the best anti-depressant for\n you. Look at the world from a new perspective; integrate into it on equal\n terms. Life is given only once, and you have no time to waste it. As soon as\n the world starts changing, you will keep a stronger touch with it. You will\n realize that inward problems are mainly our own creations, our own illusions\n our own misunderstandings. Share your doubts with the world, and you will be understood\n in return.</span></p><p style=\"text-align: justify\"> </p><p style=\"text-align: justify\"> </p><p style=\"text-align: justify\"><span style=\"font-size:21px\">THANK YOU </span></p><p style=\"text-align: justify\"> </p>', 'Article'),
(3, 'Depression', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1682791568/images/nnil5twzs29d4akpqfdn.jpg', '2023-04-29', '<p style=\"text-align: justify\">​<span style=\"font-size: 21px\">Depression has become a common problem of today’s\n time, due to which most people suffer in life. This is because the importance\n of relationships is decreasing very quickly and due to this depression arises\n in people.</span></p><p style=\"text-align: justify\"> </p><p style=\"text-align: justify\"><span style=\"font-size:21px\">People want to keep themselves ahead in every field\n and when left behind, they become victims of depression. For this reason,\n depression is becoming a common disease. </span></p><p style=\"text-align: justify\"> </p><p style=\"text-align: justify\"><span style=\"font-size:21px\">The symptoms of depression are; when one feels sad\n and lonely, loss of appetite, weight loss, difficulty in sleeping,\n sleeplessness, excessive sleepiness, feeling of weakness in the body, feeling\n unimportant, feeling worthless, thoughts of suicide.</span></p><p style=\"text-align: justify\"> </p><p style=\"text-align: justify\"><span style=\"font-size:21px\">Depression can be treated under proper expert\n supervision, getting enough sleep, eating well, exercising regularly, getting\n regular medical check-ups, company of good friends.</span></p><p style=\"text-align: justify\"> </p><p style=\"text-align: justify\"><span style=\"font-size:21px\">Remember: action is the best anti-depressant for\n you. Look at the world from a new perspective; integrate into it on equal\n terms. Life is given only once, and you have no time to waste it. As soon as\n the world starts changing, you will keep a stronger touch with it. You will\n realize that inward problems are mainly our own creations, our own illusions\n our own misunderstandings. Share your doubts with the world, and you will be understood\n in return.</span></p><p style=\"text-align: justify\"> </p><p style=\"text-align: justify\"> </p><p style=\"text-align: justify\"><span style=\"font-size:21px\">THANK YOU </span></p><p style=\"text-align: justify\"> </p>', 'Article');

-- --------------------------------------------------------

--
-- Table structure for table `organizingcommittee`
--

CREATE TABLE `organizingcommittee` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `organizingcommittee`
--

INSERT INTO `organizingcommittee` (`id`, `name`, `position`, `img`) VALUES
(1, 'Nancy Oyekunle', 'Pusag', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1683115146/images/wrrdmxhbws9fyokopio1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `procurementcommittee`
--

CREATE TABLE `procurementcommittee` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `procurementcommittee`
--

INSERT INTO `procurementcommittee` (`id`, `name`, `position`, `img`) VALUES
(1, 'Victory Olamide Oyekunle', 'Secetary', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1683129870/images/f8bcaafmml40qijaognv.jpg'),
(2, 'Victory Olamide Oyekunle', 'Secetary', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1683129884/images/slibhj53c7wlodlbufzx.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `regulators`
--

CREATE TABLE `regulators` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `othername` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `userstatus` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `religiouscommittee`
--

CREATE TABLE `religiouscommittee` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `religiouscommittee`
--

INSERT INTO `religiouscommittee` (`id`, `name`, `position`, `img`) VALUES
(1, 'Victory  Oyekunle', 'Exam officer', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1683132936/images/dzrmkiwyuv4z7tdkfboc.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` datetime NOT NULL,
  `session_token` varchar(255) NOT NULL,
  `user_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `studentprojects`
--

CREATE TABLE `studentprojects` (
  `id` int(11) NOT NULL,
  `student_id` varchar(255) NOT NULL,
  `studentname` varchar(255) NOT NULL,
  `supervisorname` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `abstract` text NOT NULL,
  `language` varchar(255) NOT NULL,
  `objective` text NOT NULL,
  `document` text NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `year` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `studentprojects`
--

INSERT INTO `studentprojects` (`id`, `student_id`, `studentname`, `supervisorname`, `title`, `abstract`, `language`, `objective`, `document`, `file_name`, `year`) VALUES
(5, 'UGR0201910255', 'Dominic Selorm', 'Mr. Bismark Frimpong', 'Online delivery app', 'What is Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'React', '<p><span style=\"font-size: 16px\">​<br></span></p><h2 style=\"text-align: left\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">What is Lorem Ipsum?</span></h2><p style=\"text-align: justify\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></p><h2 style=\"text-align: left\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">Why do we use it?</span></h2><p style=\"text-align: justify\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</span></p><p><span style=\"font-family: Georgia;font-size: 16px\"><br></span></p><h2 style=\"text-align: left\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">Where does it come from?</span></h2><p style=\"text-align: justify\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</span></p><p style=\"text-align: justify\" \"=\"\"><span style=\"font-size: 16px\">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</span></p>', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1687019939/images/sqcbxyp0tgajoswqsbbj.pdf', 'Enatega-Restaurant-Solution-main.zip', '2022/2023'),
(6, 'UGR0201910256', 'Dominic Klutsey', 'Mr. Bismark Frimpong', 'Online delivery app', 'What is Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'React native', '<p><span style=\"font-size: 16px\">​<br></span></p><h2 style=\"text-align: left\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">What is Lorem Ipsum?</span></h2><p style=\"text-align: justify\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></p><h2 style=\"text-align: left\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">Why do we use it?</span></h2><p style=\"text-align: justify\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</span></p><p><span style=\"font-family: Georgia;font-size: 16px\"><br></span></p><h2 style=\"text-align: left\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">Where does it come from?</span></h2><p style=\"text-align: justify\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</span></p><p style=\"text-align: justify\" \"=\"\"><span style=\"font-size: 16px\">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</span></p>', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1687019965/images/oovejhiqg7uwq1yzzz6z.pdf', 'Enatega-Restaurant-Solution-main.zip', '2022/2023'),
(7, 'UGR0201910256', 'Dominic Klutsey', 'Mr. Bismark Frimpong', 'Online delivery app', 'What is Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'React native', '<p><span style=\"font-size: 16px\">​<br></span></p><h2 style=\"text-align: left\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">What is Lorem Ipsum?</span></h2><p style=\"text-align: justify\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></p><h2 style=\"text-align: left\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">Why do we use it?</span></h2><p style=\"text-align: justify\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</span></p><p><span style=\"font-family: Georgia;font-size: 16px\"><br></span></p><h2 style=\"text-align: left\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">Where does it come from?</span></h2><p style=\"text-align: justify\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</span></p><p style=\"text-align: justify\" \"=\"\"><span style=\"font-size: 16px\">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</span></p>', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1687020004/images/w5vrfyiycf0dpj06r5uj.pdf', 'Enatega-Restaurant-Solution-main.zip', '2022/2023'),
(8, 'UGR0201910256', 'Dominic Klutsey', 'Mr. Bismark Frimpong', 'Online delivery app', 'What is Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'React native', '<p><span style=\"font-size: 16px\">​<br></span></p><h2 style=\"text-align: left\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">What is Lorem Ipsum?</span></h2><p style=\"text-align: justify\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></p><h2 style=\"text-align: left\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">Why do we use it?</span></h2><p style=\"text-align: justify\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</span></p><p><span style=\"font-family: Georgia;font-size: 16px\"><br></span></p><h2 style=\"text-align: left\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">Where does it come from?</span></h2><p style=\"text-align: justify\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</span></p><p style=\"text-align: justify\" \"=\"\"><span style=\"font-size: 16px\">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</span></p>', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1687020006/images/resdqwzqsiqqjcs0yytb.pdf', 'Enatega-Restaurant-Solution-main.zip', '2022/2023'),
(9, 'UGW020192345678', 'Rosemary Judah', 'Mrs. Taiwo', 'Library management system', '\nWhy do we use it?\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n', 'React frame work', '<p><span style=\"font-size: 16px\">​<br></span></p><h2 style=\"text-align: left\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">What is Lorem Ipsum?</span></h2><p style=\"text-align: justify\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></p><h2 style=\"text-align: left\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">Why do we use it?</span></h2><p style=\"text-align: justify\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</span></p><p><span style=\"font-family: Georgia;font-size: 16px\"><br></span></p><h2 style=\"text-align: left\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">Where does it come from?</span></h2><p style=\"text-align: justify\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</span></p><p style=\"text-align: justify\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</span></p><h2 style=\"text-align: left\" \"=\"\"><span style=\"font-family: Georgia;font-size: 16px\">Where can I get some?</span></h2><p style=\"text-align: justify\" \"=\"\"><span style=\"font-size: 16px\">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</span></p>', 'http://res.cloudinary.com/dmkqhochv/image/upload/v1687021134/images/qnucq1gh4hnrzvk8laen.pdf', 'Student-Result-Management-System-master.zip', '2021/2022');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` varchar(255) NOT NULL,
  `graduating_year` varchar(255) NOT NULL,
  `faculty` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `student_id` varchar(255) DEFAULT NULL,
  `admission_year` varchar(255) NOT NULL,
  `submission_date` date NOT NULL,
  `supervisor_name` varchar(255) NOT NULL,
  `supervisor_comment` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `email_verified` datetime DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `verification_tokens`
--

CREATE TABLE `verification_tokens` (
  `token` varchar(255) NOT NULL,
  `identifier` varchar(255) NOT NULL,
  `expires` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `academiccommittee`
--
ALTER TABLE `academiccommittee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `associations`
--
ALTER TABLE `associations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `editorialcommittee`
--
ALTER TABLE `editorialcommittee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `estatecommittee`
--
ALTER TABLE `estatecommittee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `executives`
--
ALTER TABLE `executives`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `financecommittee`
--
ALTER TABLE `financecommittee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `judiciarycommittee`
--
ALTER TABLE `judiciarycommittee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `organizingcommittee`
--
ALTER TABLE `organizingcommittee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `procurementcommittee`
--
ALTER TABLE `procurementcommittee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `regulators`
--
ALTER TABLE `regulators`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `religiouscommittee`
--
ALTER TABLE `religiouscommittee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sessionToken` (`session_token`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `studentprojects`
--
ALTER TABLE `studentprojects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `verification_tokens`
--
ALTER TABLE `verification_tokens`
  ADD PRIMARY KEY (`token`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `academiccommittee`
--
ALTER TABLE `academiccommittee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `associations`
--
ALTER TABLE `associations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `editorialcommittee`
--
ALTER TABLE `editorialcommittee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `estatecommittee`
--
ALTER TABLE `estatecommittee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `executives`
--
ALTER TABLE `executives`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `financecommittee`
--
ALTER TABLE `financecommittee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `judiciarycommittee`
--
ALTER TABLE `judiciarycommittee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `organizingcommittee`
--
ALTER TABLE `organizingcommittee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `procurementcommittee`
--
ALTER TABLE `procurementcommittee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `regulators`
--
ALTER TABLE `regulators`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `religiouscommittee`
--
ALTER TABLE `religiouscommittee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `studentprojects`
--
ALTER TABLE `studentprojects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sessions`
--
ALTER TABLE `sessions`
  ADD CONSTRAINT `sessions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

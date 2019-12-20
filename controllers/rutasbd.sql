-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-12-2019 a las 02:21:20
-- Versión del servidor: 10.1.26-MariaDB
-- Versión de PHP: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rutasbd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bitacora`
--

CREATE TABLE `bitacora` (
  `id_bitacora` int(11) NOT NULL,
  `id_admin` int(11) NOT NULL,
  `mensaje` varchar(150) COLLATE utf8_spanish_ci NOT NULL,
  `titulo` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `fecha` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `bitacora`
--

INSERT INTO `bitacora` (`id_bitacora`, `id_admin`, `mensaje`, `titulo`, `fecha`) VALUES
(4, 1, 'Se Inició Sesion con la Cuenta de Albery Arteaga el 11/22/2019 a las 5:18 PM', 'Inicio Sesion', '11/22/2019-5:18 PM'),
(5, 1, 'Se Creó la\n          Ruta 11 por la cuenta de Albery Arteaga el\n          11/22/2019 a las 5:25 PM', 'Nueva Ruta', '11/22/2019-5:26 PM'),
(6, 1, 'Se Creó el Bus\n          La Sofi asociado a la Ruta 11\n           por la cuenta de Albery Arteaga el\n          11/22/2019 a las 5:33 PM', 'Nuevo Bus', '11/22/2019-5:34 PM'),
(7, 1, 'Se Creó el Bus\n          La Kimberly asociado a la Ruta 11\n           por la cuenta de Albery Arteaga el\n          11/22/2019 a las 5:40 PM', 'Nuevo Bus', '11/22/2019-5:43 PM'),
(8, 1, 'Se Creó la\n          Ruta 8 por la cuenta de Albery Arteaga el\n          11/22/2019 a las 7:51 PM', 'Nueva Ruta', '11/22/2019-8:01 PM'),
(9, 1, 'Se cerró sesion en la cuenta de Albery Arteaga el\n          11/22/2019 a las 8:01 PM', 'Sesion Cerrada', '11/22/2019-8:01 PM'),
(10, 2, 'Se Inició Sesion con la Cuenta de Juan Perez el 11/22/2019 a las 8:01 PM', 'Inicio Sesion', '11/22/2019-8:01 PM'),
(11, 2, 'Se Creó el Bus\n          La Kimberly asociado a la Ruta 8\n           por la cuenta de Juan Perez el\n          11/22/2019 a las 8:01 PM', 'Nuevo Bus', '11/22/2019-8:04 PM'),
(12, 2, 'Se Creó el Bus\n          El Bryangas007 asociado a la Ruta 8\n           por la cuenta de Juan Perez el\n          11/22/2019 a las 8:06 PM', 'Nuevo Bus', '11/22/2019-8:09 PM'),
(13, 2, 'Se cerró sesion en la cuenta de Juan Perez el\n          11/23/2019 a las 9:38 AM', 'Sesion Cerrada', '11/23/2019-9:38 AM'),
(14, 1, 'Se Inició Sesion con la Cuenta de Albery Arteaga el 11/23/2019 a las 9:39 AM', 'Inicio Sesion', '11/23/2019-9:39 AM'),
(15, 1, 'Se cerró sesion en la cuenta de Albery Arteaga el\n          11/23/2019 a las 9:39 AM', 'Sesion Cerrada', '11/23/2019-9:39 AM'),
(16, 1, 'Se Inició Sesion con la Cuenta de Albery Arteaga el 11/23/2019 a las 9:41 AM', 'Inicio Sesion', '11/23/2019-9:41 AM'),
(17, 1, 'Se actualizaron los datos de la\n          Ruta 11 por la cuenta de Albery Arteaga el\n          11/23/2019 a las 8:23 PM', 'Actualización de Ruta', '11/23/2019-8:23 PM'),
(18, 1, 'Se actualizaron los datos de la\n          Ruta 8 por la cuenta de Albery Arteaga el\n          11/23/2019 a las 8:33 PM', 'Actualización de Ruta', '11/23/2019-8:33 PM'),
(19, 1, 'Se actualizaron los datos de la\n          Ruta 11 por la cuenta de Albery Arteaga el\n          11/23/2019 a las 8:33 PM', 'Actualización de Ruta', '11/23/2019-8:33 PM'),
(20, 1, 'Se Inició Sesion con la Cuenta de Albery Arteaga el 11/24/2019 a las 4:13 PM', 'Inicio Sesion', '11/24/2019-4:13 PM'),
(21, 1, 'Se Creó el Bus\n          John Rambo asociado a la Ruta 11\n           por la cuenta de Albery Arteaga el\n          11/24/2019 a las 6:44 PM', 'Nuevo Bus', '11/24/2019-6:46 PM'),
(22, 1, 'Se Creó el Bus\n          asdfghj asociado a la Ruta 8\n           por la cuenta de Albery Arteaga el\n          11/24/2019 a las 6:50 PM', 'Nuevo Bus', '11/24/2019-6:51 PM'),
(23, 1, 'Se cerró sesion en la cuenta de Albery Arteaga el\n          11/25/2019 a las 12:49 PM', 'Sesion Cerrada', '11/25/2019-1:02 PM'),
(24, 2, 'Se Inició Sesion con la Cuenta de Juan Perez el 11/25/2019 a las 1:02 PM', 'Inicio Sesion', '11/25/2019-1:02 PM'),
(25, 2, 'Se Creó el Bus\n          xfghhhh asociado a la Ruta 11\n           por la cuenta de Juan Perez el\n          11/25/2019 a las 1:02 PM', 'Nuevo Bus', '11/25/2019-1:03 PM'),
(26, 1, 'Se Inició Sesion con la Cuenta de Albery Arteaga el 11/26/2019 a las 3:18 PM', 'Inicio Sesion', '11/26/2019-3:18 PM'),
(27, 1, 'Se Creó la\n          Ruta 2 por la cuenta de Albery Arteaga el\n          11/26/2019 a las 3:18 PM', 'Nueva Ruta', '11/26/2019-3:24 PM'),
(28, 1, 'Se actualizaron los datos de la\n          Ruta 2 por la cuenta de Albery Arteaga el\n          11/26/2019 a las 3:28 PM', 'Actualización de Ruta', '11/26/2019-3:28 PM'),
(29, 1, 'Se Creó el Bus\n          El Fernandito asociado a la Ruta 2\n           por la cuenta de Albery Arteaga el\n          11/26/2019 a las 3:31 PM', 'Nuevo Bus', '11/26/2019-3:32 PM'),
(30, 1, 'Se Inició Sesion con la Cuenta de Albery Arteaga el 11/27/2019 a las 9:02 PM', 'Inicio Sesion', '11/27/2019-9:02 PM'),
(31, 1, 'Se Eliminó el Bus\n             xfghhhh por la cuenta de Albery Arteaga el\n            11/27/2019 a las 10:22 PM', 'Bus Eliminado', '11/27/2019-10:30 PM'),
(32, 1, 'Se Eliminó el Bus\n             asdfghj por la cuenta de Albery Arteaga el\n            11/27/2019 a las 10:32 PM', 'Bus Eliminado', '11/27/2019-10:33 PM'),
(33, 1, 'Se cerró sesion en la cuenta de Albery Arteaga el\n          11/28/2019 a las 2:41 PM', 'Sesion Cerrada', '11/28/2019-2:43 PM'),
(34, 1, 'Se Inició Sesion con la Cuenta de Albery Arteaga el 11/28/2019 a las 2:44 PM', 'Inicio Sesion', '11/28/2019-2:44 PM'),
(35, 1, 'Se cerró sesion en la cuenta de Albery Arteaga el\n          11/28/2019 a las 2:44 PM', 'Sesion Cerrada', '11/28/2019-2:45 PM'),
(36, 1, 'Se Inició Sesion con la Cuenta de Albery Arteaga el 11/28/2019 a las 2:51 PM', 'Inicio Sesion', '11/28/2019-2:51 PM'),
(37, 1, 'Se Creó la\n          Ruta 90F por la cuenta de Albery Arteaga el\n          11/28/2019 a las 2:51 PM', 'Nueva Ruta', '11/28/2019-2:53 PM'),
(38, 1, 'Se actualizaron los datos de la\n          Ruta 90F por la cuenta de Albery Arteaga el\n          11/28/2019 a las 2:53 PM', 'Actualización de Ruta', '11/28/2019-2:53 PM'),
(39, 1, 'Se Creó el Bus\n          El tongo asociado a la Ruta 90F\n           por la cuenta de Albery Arteaga el\n          11/28/2019 a las 2:54 PM', 'Nuevo Bus', '11/28/2019-2:55 PM'),
(40, 1, 'Se actualizaron los datos de la\n          Ruta 90F por la cuenta de Albery Arteaga el\n          11/30/2019 a las 12:02 PM', 'Actualización de Ruta', '11/30/2019-12:03 PM'),
(41, 1, 'Se actualizaron los datos de la\n          Ruta 90FA por la cuenta de Albery Arteaga el\n          11/30/2019 a las 12:03 PM', 'Actualización de Ruta', '11/30/2019-12:04 PM'),
(42, 1, 'Se Inició Sesion con la Cuenta de Albery Arteaga el 12/20/2019 a las 12:35 PM', 'Inicio Sesion', '12/20/2019-12:35 PM');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `buses`
--

CREATE TABLE `buses` (
  `id_bus` int(11) NOT NULL,
  `nombre_bus` varchar(80) COLLATE utf8_spanish_ci NOT NULL,
  `nombre_motorista` varchar(80) COLLATE utf8_spanish_ci NOT NULL,
  `placa` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `imgPath` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fecha_creacion` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `fecha_actualizacion` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `nombre_ruta` varchar(80) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `buses`
--

INSERT INTO `buses` (`id_bus`, `nombre_bus`, `nombre_motorista`, `placa`, `imgPath`, `fecha_creacion`, `fecha_actualizacion`, `nombre_ruta`) VALUES
(1, 'La Sofi', 'Pepe Gonzalez', 'MB 343-321', 'busito90B.jpg', '11/22/2019 5:33 PM', '11/22/2019 5:33 PM', 'Ruta 11'),
(3, 'La Kimberly', 'Fernandusco', 'MB 556-665', 'ruta-44.jpg', '11/22/2019 7:51 PM', '11/22/2019 7:51 PM', 'Ruta 8'),
(4, 'El Bryangas007', 'El Bryan', 'MB 322-112', 'maxresdefault.jpg', '', '', 'Ruta 8'),
(5, 'John Rambo', 'Alexander Perez', 'MB 834-543', '1434897063359.jpg', '11/24/2019 6:44 PM', '11/24/2019 6:44 PM', 'Ruta 11'),
(8, 'El Fernandito', 'Juan Perez', 'MB 999-666', 'React-vs-Flutter.png', '11/26/2019 3:31 PM', '11/26/2019 3:31 PM', 'Ruta 2'),
(9, 'El tongo', 'Maltez Guardado', 'B 233-233', 'busito.jpg', '11/28/2019 2:54 PM', '11/28/2019 2:54 PM', 'Ruta 90F');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bushorario`
--

CREATE TABLE `bushorario` (
  `id_bushorario` int(11) NOT NULL,
  `id_bus` int(11) NOT NULL,
  `id_horario` int(11) NOT NULL,
  `id_ruta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `bushorario`
--

INSERT INTO `bushorario` (`id_bushorario`, `id_bus`, `id_horario`, `id_ruta`) VALUES
(1, 3, 3, 3),
(2, 1, 5, 2),
(3, 5, 7, 2),
(4, 5, 6, 2),
(9, 8, 12, 4),
(10, 8, 13, 4),
(11, 8, 14, 4),
(12, 9, 15, 5),
(13, 9, 16, 5),
(14, 9, 17, 5),
(15, 9, 18, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id_comentario` int(11) NOT NULL,
  `texto` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `nombre_usuario` varchar(80) COLLATE utf8_spanish_ci NOT NULL,
  `fecha` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id_comentario`, `texto`, `nombre_usuario`, `fecha`) VALUES
(1, 'Pesimo Servicio xdxd', 'Jose Perez', '11/17/2019 17:33'),
(2, 'Excelente Servicio xddd', 'Fernando Hernandez', '11/19/2019 14:15'),
(3, 'La 2 iba a como rápido y furioso xdxd', 'Anónimo', '11/20/2019 7:06'),
(4, 'Prueba desde Xamarin', 'Pollo xdxd', '11/24/2019 15:55'),
(5, 'Cualquier cosa a comentar', 'Albery Martínez', '11/24/2019 17:58'),
(6, 'La 90F iba como rápido y furioso xdxddd', 'Fernadusco', '11/25/2019 13:01'),
(7, 'Cualquier cosa', 'Noe Saravia', '11/26/2019 15:40'),
(8, 'alv', 'Mario Alvarenga', '11/26/2019 15:56'),
(9, 'hola\n', 'noe ', '11/26/2019 15:58'),
(10, 'La F iba muy rápido', 'El tongo', '11/28/2019 15:01'),
(11, 'cualquier cosa\n', 'Mario', '12/02/2019 14:46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horarios`
--

CREATE TABLE `horarios` (
  `id_horario` int(11) NOT NULL,
  `id_bus` int(11) NOT NULL,
  `id_ruta` int(11) NOT NULL,
  `nombre_parada` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `latitud` varchar(80) COLLATE utf8_spanish_ci NOT NULL,
  `longitud` varchar(80) COLLATE utf8_spanish_ci NOT NULL,
  `horario_ida` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `horario_regreso` varchar(20) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `horarios`
--

INSERT INTO `horarios` (`id_horario`, `id_bus`, `id_ruta`, `nombre_parada`, `latitud`, `longitud`, `horario_ida`, `horario_regreso`) VALUES
(1, 1, 2, 'Claro Centro', '13.482377238362602', '-88.1749377329933', '05:55', '07:06'),
(2, 1, 2, 'Claro Centro', '13.482377238362602', '-88.1749377329933', '08:08', '09:09'),
(3, 3, 3, 'Sarita', '13.477712617423009', '-88.17403870867226', '06:06', '07:07'),
(4, 3, 3, 'Sarita', '13.477712617423009', '-88.17403870867226', '08:08', '09:09'),
(5, 1, 2, 'Univo', '13.481888599255527', '-88.1837502563889', '11:11', '14:22'),
(6, 5, 2, 'Parque Guzman', '13.483235', '-88.175304', '05:55', '06:06'),
(7, 5, 2, 'Parque Guzman', '13.483235', '-88.175304', '07:07', '08:08'),
(12, 8, 4, 'UES', '13.440218795521432', '-88.1560341644997', '18:06', '19:07'),
(13, 8, 4, 'UES', '13.440218795521432', '-88.1560341644997', '16:44', '17:55'),
(14, 8, 4, 'Metrocentro', '13.4614027', '-88.1677849', '11:11', '23:11'),
(15, 9, 5, 'UES', '13.440218795521432', '-88.1560341644997', '15:33', '16:04'),
(16, 9, 5, 'UES', '13.440218795521432', '-88.1560341644997', '17:55', '18:06'),
(17, 9, 5, 'Walmart', '13.442261207795767', '-88.15628833908548', '14:22', '15:33'),
(18, 9, 5, 'Walmart', '13.442261207795767', '-88.15628833908548', '16:44', '17:55');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `login`
--

CREATE TABLE `login` (
  `id_admin` int(11) NOT NULL,
  `usuario` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `clave` varchar(50) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `login`
--

INSERT INTO `login` (`id_admin`, `usuario`, `clave`) VALUES
(1, 'Albery Arteaga', '1234'),
(2, 'Juan Perez', '4321');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paradas`
--

CREATE TABLE `paradas` (
  `id_parada` int(11) NOT NULL,
  `nombre_parada` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `nombre_ruta` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `latitud` varchar(80) COLLATE utf8_spanish_ci NOT NULL,
  `longitud` varchar(80) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `paradas`
--

INSERT INTO `paradas` (`id_parada`, `nombre_parada`, `nombre_ruta`, `latitud`, `longitud`) VALUES
(1, 'Metrocentro', 'Ruta 11', '13.4614027', '-88.1677849'),
(2, 'Parque Guzman', 'Ruta 8', '13.483235', '-88.175304'),
(3, 'Farmacia El Socorro', 'Ruta 8', '13.472496430374562', '-88.1742813687501'),
(5, 'Claro Centro', 'Ruta 11', '13.482377238362602', '-88.1749377329933'),
(6, 'Sarita', 'Ruta 8', '13.477712617423009', '-88.17403870867226'),
(7, 'Univo', 'Ruta 11', '13.481888599255527', '-88.1837502563889'),
(8, 'Parque Guzman', 'Ruta 11', '13.483235', '-88.175304'),
(10, 'Metrocentro', 'Ruta 11', '13.4614027', '-88.1677849'),
(11, 'UES', 'Ruta 2', '13.440218795521432', '-88.1560341644997'),
(12, 'Metrocentro', 'Ruta 2', '13.4614027', '-88.1677849'),
(13, 'UES', 'Ruta 90F', '13.440218795521432', '-88.1560341644997'),
(14, 'Walmart', 'Ruta 90F', '13.442261207795767', '-88.15628833908548');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rutabus`
--

CREATE TABLE `rutabus` (
  `id_rutabus` int(11) NOT NULL,
  `id_ruta` int(11) NOT NULL,
  `id_bus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `rutabus`
--

INSERT INTO `rutabus` (`id_rutabus`, `id_ruta`, `id_bus`) VALUES
(1, 2, 1),
(3, 3, 3),
(4, 3, 4),
(5, 2, 5),
(8, 4, 8),
(9, 5, 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rutas`
--

CREATE TABLE `rutas` (
  `id_ruta` int(11) NOT NULL,
  `nombre_ruta` varchar(80) COLLATE utf8_spanish_ci NOT NULL,
  `nombre_abreviado` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `precio` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `unidades` int(11) NOT NULL,
  `hora_inicio` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `hora_final` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `imgPath` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fecha_creacion` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fecha_actualizacion` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `rutas`
--

INSERT INTO `rutas` (`id_ruta`, `nombre_ruta`, `nombre_abreviado`, `precio`, `unidades`, `hora_inicio`, `hora_final`, `imgPath`, `fecha_creacion`, `fecha_actualizacion`) VALUES
(2, 'Ruta 11', 'La 11', '0.25', 17, '05:55', '18:06', 'busito90B.jpg', '11/22/2019 5:25 PM', '11/23/2019 8:33 PM'),
(3, 'Ruta 8', 'La 8', '0.25', 13, '05:56', '18:06', 'images.jpg', '11/22/2019 7:51 PM', '11/23/2019 8:33 PM'),
(4, 'Ruta 2', 'La 2', '0.25', 17, '04:00', '18:06', 'casa.png', '11/26/2019 3:18 PM', '11/26/2019 3:28 PM'),
(5, 'Ruta 90F', 'La F', '0.2', 14, '05:06', '18:06', 'descarga.jpg', '11/28/2019 2:51 PM', '11/30/2019 12:03 PM');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bitacora`
--
ALTER TABLE `bitacora`
  ADD PRIMARY KEY (`id_bitacora`),
  ADD KEY `id_admin` (`id_admin`);

--
-- Indices de la tabla `buses`
--
ALTER TABLE `buses`
  ADD PRIMARY KEY (`id_bus`);

--
-- Indices de la tabla `bushorario`
--
ALTER TABLE `bushorario`
  ADD PRIMARY KEY (`id_bushorario`),
  ADD KEY `id_bus` (`id_bus`),
  ADD KEY `id_horario` (`id_horario`),
  ADD KEY `id_ruta` (`id_ruta`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id_comentario`);

--
-- Indices de la tabla `horarios`
--
ALTER TABLE `horarios`
  ADD PRIMARY KEY (`id_horario`),
  ADD KEY `id_bus` (`id_bus`),
  ADD KEY `id_ruta` (`id_ruta`);

--
-- Indices de la tabla `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indices de la tabla `paradas`
--
ALTER TABLE `paradas`
  ADD PRIMARY KEY (`id_parada`);

--
-- Indices de la tabla `rutabus`
--
ALTER TABLE `rutabus`
  ADD PRIMARY KEY (`id_rutabus`),
  ADD KEY `id_bus` (`id_bus`),
  ADD KEY `id_ruta` (`id_ruta`);

--
-- Indices de la tabla `rutas`
--
ALTER TABLE `rutas`
  ADD PRIMARY KEY (`id_ruta`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bitacora`
--
ALTER TABLE `bitacora`
  MODIFY `id_bitacora` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de la tabla `buses`
--
ALTER TABLE `buses`
  MODIFY `id_bus` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `bushorario`
--
ALTER TABLE `bushorario`
  MODIFY `id_bushorario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `horarios`
--
ALTER TABLE `horarios`
  MODIFY `id_horario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `login`
--
ALTER TABLE `login`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `paradas`
--
ALTER TABLE `paradas`
  MODIFY `id_parada` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `rutabus`
--
ALTER TABLE `rutabus`
  MODIFY `id_rutabus` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `rutas`
--
ALTER TABLE `rutas`
  MODIFY `id_ruta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `bitacora`
--
ALTER TABLE `bitacora`
  ADD CONSTRAINT `bitacora_ibfk_1` FOREIGN KEY (`id_admin`) REFERENCES `login` (`id_admin`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `bushorario`
--
ALTER TABLE `bushorario`
  ADD CONSTRAINT `bushorario_ibfk_1` FOREIGN KEY (`id_bus`) REFERENCES `buses` (`id_bus`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bushorario_ibfk_2` FOREIGN KEY (`id_ruta`) REFERENCES `rutas` (`id_ruta`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bushorario_ibfk_3` FOREIGN KEY (`id_horario`) REFERENCES `horarios` (`id_horario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `horarios`
--
ALTER TABLE `horarios`
  ADD CONSTRAINT `horarios_ibfk_1` FOREIGN KEY (`id_ruta`) REFERENCES `rutas` (`id_ruta`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `horarios_ibfk_2` FOREIGN KEY (`id_bus`) REFERENCES `buses` (`id_bus`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `rutabus`
--
ALTER TABLE `rutabus`
  ADD CONSTRAINT `rutabus_ibfk_1` FOREIGN KEY (`id_ruta`) REFERENCES `rutas` (`id_ruta`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rutabus_ibfk_2` FOREIGN KEY (`id_bus`) REFERENCES `buses` (`id_bus`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

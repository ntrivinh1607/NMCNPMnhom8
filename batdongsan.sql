-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 04, 2020 lúc 02:30 PM
-- Phiên bản máy phục vụ: 10.4.11-MariaDB
-- Phiên bản PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `batdongsan`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `adver_contract`
--
DROP TABLE IF EXISTS `adver_contract`;
CREATE TABLE `adver_contract` (
  `Contract_ID` int(255) UNSIGNED NOT NULL,
  `ID_User` int(255) UNSIGNED NOT NULL,
  `Date_Contract` date NOT NULL,
  `Contract_term` date NOT NULL,
  `Payment` char(3) COLLATE utf8_unicode_ci NOT NULL,
  `Price` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `adver_contract` (`Contract_ID`, `ID_User`, `Date_Contract`, `Contract_term`, `Payment`, `Price`) VALUES
(1, 2, '2020-01-03 20:15:10', '2020-01-12 20:15:10', '1', 2000000); 
  
-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `feedback`
--
drop table if exists `feedback`;
CREATE TABLE `feedback` (
  `ID_User` int(255) UNSIGNED NOT NULL,
  `ID_Product` int(255) UNSIGNED NOT NULL,
  `Time_FeedBack` date NOT NULL,
  `Mark` float NOT NULL,
  `Content_FeedBack` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

insert into `feedback` (`ID_User`, `ID_Product`, `Time_FeedBack`, `Mark`, `Content_FeedBack`) values 
(2, 3, '2020-01-04 10:15:21', 8.8, 'Giá có vẻ hợp lí'),
(2, 4, '2020-01-05 15:10:21', 5.0, 'Hơi đắt'),
(3, 1, '2020-01-02 11:11:21', 7.9, 'Mình sẽ xem xét'),
(3, 2, '2020-01-03 21:11:10', 3.1, 'Nơi thế này với giá đó thì ...');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `poster`
--
drop table if exists `poster`;
CREATE TABLE `poster` (
  `ID_Poster` int(255) UNSIGNED NOT NULL,
  `ID_Product` int(255) UNSIGNED NOT NULL,
  `Date_Posting` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
INSERT INTO `poster` (`ID_Poster`, `ID_Product`, `Date_Posting`) VALUES 
(2, 1, '2020-01-01 22:00:00'),
(2, 2, '2020-01-02 22:22:00'),
(3, 3, '2020-01-03 10:15:00'),
(3, 4, '2020-01-04 20:15:10');
-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--
drop table if exists `product`;
CREATE TABLE `product` (
  `ID_Product` int(255) UNSIGNED NOT NULL,
  `NameProduct` text COLLATE utf8_unicode_ci NOT NULL,
  `TypeProduct` int(11) NOT NULL,
  `Acreage` float NOT NULL,
  `Price` int(255) NOT NULL,
  `Description` text COLLATE utf8_unicode_ci NULL,
  `Link_photo` text COLLATE utf8_unicode_ci NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

Insert into `product` (`ID_Product`, `NameProduct`, `TypeProduct`, `Acreage`, `Price`, `Description`, `Link_photo`) values 
(1, 'Cho thuê nhà Mặt Tiền đg Phan Xích Long PN, 8 Tầng, chỉ 120 TR/tháng, LH: 0902748053', 11, 80.0, 120, 'Chính chủ cho thuê nhà mặt tiền đường Phan Xích Long quận Phú Nhuận\n
+ Diện tích: 4.5x16m\n
+ Kết cấu: 8 Tầng\n
+ Có thang máy\n
+ Các phòng được thiết kế rộng rải, trần nhà rất cao tạo không gian thoáng mát hơn\n
+ Giá 120 triệu/ tháng\n
+ Vị trí đắc địa nên rất thuận tiện kinh doanh đa ngành nghề\n
+ Đây là đoạn đẹp và sầm uất nhât khu PHAN XÍCH LONG, có vỉa hè đến 6m
Liên hệ MS.Vy 0902748053 để có nhiều sản phẩm hơn mong đợi trên thị trường', null),
(2, 'CHÍNH CHỦ CẦN BÁN NHÀ GẦN CÂN NHƠN HÒA QL13 CỦ, DT:60M2 , 3PN, 2 WC, 1PK, BẾP GIÁ 3.2 TỶ', 2, 60.0, 3200 ,'Tôi chính chủ cần bán căn nhà gần cân Nhơn Hòa, đường quốc lộ 13 củ, phường Hiệp Bình Phước, Thủ Đức, cách chợ 500m, cách trường học 500m, dân cư đông đúc .Diện tích 60m2 gồm 1 trệt, 1 lững, tổng cộng 3PN, 2 WC, phòng khách và bếp, phòng ngủ lót gỗ, nhà mới vào ở ngay không cần làm gì cả.Giá bán 3.2 tỷ', null),
(3, 'NHÀ CHÍNH CHỦ 1953/12 PHẠM THẾ HIỂN PHƯỜNG 6 QUẬN 8, CÁCH CẦU NTĐ 500M. ĐT 0931.007.017 CHÍNH CHỦ', 2, 123.1, 6000, 'Tôi chính chủ nhà, cần bán gấp căn nhà riêng 1953/12 Phạm Thế Hiển, phường 6, quận 8. Không qua môi giới.\n
- Diện tích: 124,1m2 nở hậu. Giá 6 tỷ. Sổ hồng không tranh chấp.\n
- Vào hẻm 1953 chỉ 100m.\n
- Cách chợ Lò Than 400m, cách cầu Nhị Thiên Đường 500m.\n
- Thuận tiện đi quận 5, quận 6 chỉ qua 1 cái cầu Nhị Thiên Đường, đi quận 4 và quận 7 theo đường Phạm thế Hiển, không kẹt xe.\n
- Gần khu xóm đạo đông đúc.\n
- Hướng Đông Nam mát mẻ suốt cả ngày.\n
- Hiện trạng nhà cấp 4 đang ở.\n
- Xem Video, hình ảnh thực tế bên dưới. Thông tin chi tiết cụ thể trước khi xem nhà xin liên hệ: 0931007017 Huỳnh Chung.', null),
(4, 'CHÍNH CHỦ BÁN NHÀ MỚI 100% 3PN NGAY TRUNG TÂM ĐH HUTECH, NGOẠI THƯƠNG - GIÁ CHỈ 4 TỶ 088 SHR', 2, 27.0, 4088, 'Chính chủ bán nhà riêng mới đẹp tặng kèm nội thất, vị trí gần ngay trung tâm Bình Thạnh, trước nhà hẻm xe ba gác thông đường Điện Biên Phủ, Xô Viết Nghệ Tĩnh, đường D2, D5. Ngay trung tâm Đại Học Hutech, Đại học Ngoại Thương.\n Cách hẻm xe hơi khoảng 10 căn nhà. Nhà đẹp vào ở ngay, thuận tiện đi học, đi làm,...\n
- Nhà 1 trệt, 1 lững, 1 lầu: 3 PN, 2 WC.\n
DTSD 46.2m2 nở hậu 3.5-4.5m x8m hơn, xem là thích ngay.\n
- Giá: 4 tỷ 088 triệu thương lượng nhẹ cho người có thiện chí.\n
- Sổ hồng riêng chính chủ.\n
- Xem nhà liên hệ Ms. Chi -0908646241', null);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `typeproduct`
--

drop table if exists `typeproduct`;
CREATE TABLE `typeproduct` (
  `ID_Type` int(11) NOT NULL,
  `TypeName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `TypeSell` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `typeproduct` (`ID_Type`, `TypeName`, `TypeSell`) VALUES
(1, 'Căn hộ chung cư', 1),
(2, 'Nhà riêng', 1),
(3, 'Nhà biệt thự, liền kề', 1),
(4, 'Nhà mặt phố', 1),
(5, 'Đất', 1),
(6, 'Trang trại, khu nghỉ dưỡng', 1),
(7, 'Kho, xưởng', 1),
(8, 'Khác', 1),
(9, 'Căn hộ chung cư', 2),
(10, 'Nhà riêng', 2),
(11, 'Nhà biệt thự, liền kề', 2),
(12, 'Nhà mặt phố', 2),
(13, 'Đất', 2),
(14, 'Trang trại, khu nghỉ dưỡng', 2),
(15, 'Kho, xưởng', 2),
(16, 'Khác', 2);
-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `useraccount`
--

drop table if exists `useraccount`;
CREATE TABLE `useraccount` (
  `ID_User` int(255) UNSIGNED NOT NULL,
  `UserName` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `PassWord` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  `FullName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Sex` varchar(3) COLLATE utf8_unicode_ci NULL,
  `Address` text COLLATE utf8_unicode_ci NULL,
  `Birthday` date NULL,
  `PhoneNumber` varchar(10) COLLATE utf8_unicode_ci NULL,
  `Email` text COLLATE utf8_unicode_ci NOT NULL,
  `Link_Avt` text COLLATE utf8_unicode_ci NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `useraccount` (`ID_User`, `UserName`, `PassWord`, `FullName`, `Sex`, `Address`, `Birthday`, `PhoneNumber`, `Email`, `Link_Avt`) VALUES 
(1, 'user0', '$2a$15$3IGF0z3i1pu1gsC/6iaDieP4J9moSYYhLobyZKi10zZjHDadpqmPi', 'Huỳnh Đức Huy', 'Male', '1 Lô D', null, null, 'bhanhmay31@gmail.com', null),
(2, 'user1', '$2a$15$3IGF0z3i1pu1gsC/6iaDieP4J9moSYYhLobyZKi10zZjHDadpqmPi', 'Trần Văn Á', 'Male', 'D Lô 1', null, null, 'cvtconfession@gmail.com', null),
(3, 'user2', '$2a$15$3IGF0z3i1pu1gsC/6iaDieP4J9moSYYhLobyZKi10zZjHDadpqmPi', 'Ngô Thị Bê', 'Female', '2 Lô C', null, null, 'cvtconfession@gmail.com', null);

drop table if exists `admin`;
CREATE TABLE `admin` (
  `ID_Admin` int(255) UNSIGNED NOT NULL,
  `UserName` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `PassWord` varchar(12) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `admin` (`ID_Admin`, `UserName`, `PassWord`) VALUES 
(1, 'admin1', '$2a$15$3IGF0z3i1pu1gsC/6iaDieP4J9moSYYhLobyZKi10zZjHDadpqmPi');
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `adver_contract`
--
ALTER TABLE `adver_contract`
  ADD PRIMARY KEY (`Contract_ID`);

--
-- Chỉ mục cho bảng `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`ID_User`,`ID_Product`);

--
-- Chỉ mục cho bảng `poster`
--
ALTER TABLE `poster`
  ADD PRIMARY KEY (`ID_Poster`,`ID_Product`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`ID_Product`);

--
-- Chỉ mục cho bảng `typeproduct`
--
ALTER TABLE `typeproduct`
  ADD PRIMARY KEY (`ID_Type`);

--
-- Chỉ mục cho bảng `useraccount`
--
ALTER TABLE `useraccount`
  ADD PRIMARY KEY (`ID_User`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `adver_contract`
--
ALTER TABLE `adver_contract`
  MODIFY `Contract_ID` int(255) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `ID_Product` int(255) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `useraccount`
--
ALTER TABLE `useraccount`
  MODIFY `ID_User` int(255) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

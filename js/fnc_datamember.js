﻿﻿// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = "Tie!";
str_CenterB = "Undo last choice";

str_ImgPath = "https://rebornian48.com/images/member/";
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 3;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;

// Maximum number of result rows before being broken off into another table.
var maxRows = 35;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 3;
var ary_TitleData = [
  "Member",
  "Eks Member",
  "Generasi 1",
  "Generasi 2",
  "Generasi 3",
  "Generasi 4",
  "Generasi 5",
  "Generasi 6",
  "Generasi 7",
  "Generasi 8",
  "Generasi 9",
  "Generasi 10",
  "Generasi 11",
  "Kaigai dan Transfer",
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）,
//   "タイトルID"（先頭から0, 1, 2...）,
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
var ary_CharacterData = [
  //[1,"Nama", [M,X,1,2,3,4,5,6,7,8,9,10,11,K], "path foto"]
  //gen01
  [1,"Alissa Galliamova", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/mova.jpg"],
  [1,"Allisa Astri", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/allisa_astri.jpg"],
  [1,"Ayana Shahab", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/ayana_shahab.jpg"],
  [1,"Beby Chaesara Anadila", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/beby_chaseara_anadila.jpg"],
  [1,"Cindy Gulla", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/cigul.jpg"],
  [1,"Cleopatra Djapri", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/cleo.jpg"],
  [1,"Delima Rizky", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/delima.jpg"],
  [1,"Devi Kinal Putri", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/kinal.jpg"],
  [1,"Diasta Priswarini", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/diasta.jpg"],
  [1,"Fahira", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/fahira.jpg"],
  [1,"Frieska Anastasia Laksani", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/frieska_anastasia_laksani.jpg"],
  [1,"Gabriela Margareth Warouw", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/gabriella.jpg"],
  [1,"Ghaida Farisya", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/ghaida.jpg"],
  [1,"Intania Pratama Ilham", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/intania.jpg"],
  [1,"Jessica Vania", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/jeje.jpg"],
  [1,"Jessica Veranda Tanumihardja", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/ve.jpg"],
  [1,"Melody Nurramdhani Laksani", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/melody.jpg"],
  [1,"Nabilah Ratna Ayu Azalia", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/nabilah.jpg"],
  [1,"Neneng Rosediana", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/ochi.jpg"],
  [1,"Rena Nozawa", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/rena.jpg"],
  [1,"Rezky Wiranti Dhike", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/dhike.jpg"],
  [1,"Rica Leyona", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/rica.jpg"],
  [1,"Sendy Ariani", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/sendy.jpg"],
  [1,"Shania Junianatha", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/shanju.jpg"],
  [1,"Siti Gayatri Abhirama", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/siti_gayatri.jpg"],
  [1,"Sonia Natalia", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/sonia_natalia.jpg"],
  [1,"Sonya Pandarmawan", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/sonya.jpg"],
  [1,"Stella Cornelia", [0,1,1,0,0,0,0,0,0,0,0,0,0,0], "gen01/stella.jpg"],
  //gen02
  [1,"Alicia Chanzia", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/acak.jpg"],
  [1,"Althea Callista", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/althea.jpg"],
  [1,"Annisa Athia", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/Annisa_Athia.jpg"],
  [1,"Cindy Yuvia", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/cindy_yuvia.jpg"],
  [1,"Della Delila", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/della_delila.jpg"],
  [1,"Dellia Erdita", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/dellia.jpg"],
  [1,"Dena Siti Rohyati", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/dena.jpg"],
  [1,"Dwi Putri Bonita", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/uty.jpg"],
  [1,"Fakhriyani Shafariyanti", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/shafa.jpg"],
  [1,"Intar Putri Kariina", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/karin.jpg"],
  [1,"Jennifer Hanna", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/hanna.jpg"],
  [1,"Jennifer Rachel Natasya", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/jennifer_rachel_natasya.jpg"],
  [1,"Lidya Maulida Djuhandar", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/lidya.jpg"],
  [1,"Nadhifa Karimah", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/nadhifa.jpg"],
  [1,"Nadila Cindi Wantari", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/nadila_cindi_wantari.jpg"],
  [1,"Natalia", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/natalia.jpg"],
  [1,"Noella Sisterina", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/noella.jpg"],
  [1,"Novinta Dhini", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/nobi.jpg"],
  [1,"Nurhalima Oktavianti", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/halimah.jpg"],
  [1,"Octi Sevpin", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/octi.jpg"],
  [1,"Olivia Robberecht", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/olivia.jpg"],
  [1,"Priscillia Sari Dewi", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/sisil.jpg"],
  [1,"Ratu Vienny Fitrilya", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/ratu_vienny_fitrilya.jpg"],
  [1,"Riskha Fairunissa", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/riskha_fairunissa.jpg"],
  [1,"Rona Anggreani", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/rona_ariesta_anggraeni.jpg"],
  [1,"Saktia Oktapyani", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/saktia_oktapyani.jpg"],
  [1,"Shinta Naomi", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/shinta_naomi.jpg"],
  [1,"Sinka Juliani", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/sinka_juliani.jpg"],
  [1,"Thalia", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/thalia.jpg"],
  [1,"Thalia Ivanka Elizabeth", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/thalia_ivanka_elizabeth.jpg"],
  [1,"Viviyona Apriani", [0,1,0,1,0,0,0,0,0,0,0,0,0,0], "gen02/viviyona_apriani.jpg"],
  //gen03
  [1,"Alycia Ferryana", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/cia.jpg"],
  [1,"Amanda Dwi Arista", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/manda.jpg"],
  [1,"Andela Yuwono", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/andela.jpg"],
  [1,"Anggie Putri Kurniasari", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/anggie.jpg"],
  [1,"Aninditha Rahma Cahyadi", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/aninditha_rahma_cahyadi.jpg"],
  [1,"Ayu Safira Oktaviani", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/ayu_safira_oktaviani.jpg"],
  [1,"Chikita Ravenska Mamesah", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/chikita.jpg"],
  [1,"Elaine Hartanto", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/elaine.jpg"],
  [1,"Farina Yogi Devani", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/farina.jpg"],
  [1,"Feni Fitriyanti", [1,0,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/feni_fitriyanti.jpg"],
  [1,"Fransisca Saraswati Puspa Dewi", [1,0,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/fransisca_saraswati_puspa_dewi.jpg"],
  [1,"Indah Permata Sari", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/indah_permata.jpg"],
  [1,"Kezia Putri Andinta", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/kei.jpg"],
  [1,"Maria Genoveva Natalia Desy Purnamasari Gunawan", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/maria_genoveva_natalia_desy_purnamasari_gunawan.jpg"],
  [1,"Martha Graciela", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/martha_graciela.jpg"],
  [1,"Michelle Christo Kusnadi", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/michelle_christo_kusnadi.jpg"],
  [1,"Milenia Christien Glory Goenawan", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/milen.jpg"],
  [1,"Nadhifa Salsabila", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/nadse.jpg"],
  [1,"Ni Made Ayu Vania Aurellia", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/made_ayu_vania_aurellia.jpg"],
  [1,"Nina Hamidah", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/nina_hamidah.jpg"],
  [1,"Pipit Ananda", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/pipit.jpg"],
  [1,"Putri Farin Kartika", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/farin.jpg"],
  [1,"Rizka Khalila", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/yukka.jpg"],
  [1,"Shaffa Nabila", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/shaffa_nabila.jpg"],
  [1,"Shani Indira Natio", [1,0,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/shani_indira_natio.jpg"],
  [1,"Shania Gracia", [1,0,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/shania_gracia.jpg"],
  [1,"Sofia Meifaliani", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/sofia.jpg"],
  [1,"Stephanie Pricilla Indarto Putri", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/stephanie_pricilla_indarto_putri.jpg"],
  [1,"Syahfira Angela Nurhaliza", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/syahfira_angela_nurhaliza.jpg"],
  [1,"Triarona Kusuma", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/tya.jpg"],
  [1,"Yansen Indiani", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/cesen.jpg"],
  [1,"Zebi Magnolia Fawwaz", [0,1,0,0,1,0,0,0,0,0,0,0,0,0], "gen03/zebi.jpg"],
  //gen04
  [1,"Adriani Elizabeth", [0,1,0,0,0,1,0,0,0,0,0,0,0,0], "gen04/adriani_elizabeth.jpg"],
  [1,"Christi", [0,1,0,0,0,1,0,0,0,0,0,0,0,0], "gen04/christi.jpg"],
  [1,"Cindy Hapsari Maharani Pujiantoro Putri", [0,1,0,0,0,1,0,0,0,0,0,0,0,0], "gen04/cindy_hapsari.jpg"],
  [1,"Fidly Immanda Azzahra", [0,1,0,0,0,1,0,0,0,0,0,0,0,0], "gen04/fidly_immanda_azzahra.jpg"],
  [1,"Jessica Berliana Ekawardani", [0,1,0,0,0,1,0,0,0,0,0,0,0,0], "gen04/jessicaberliana.jpg"],
  [1,"Jinan Safa Safira", [0,1,0,0,0,1,0,0,0,0,0,0,0,0], "gen04/jinan_safa_safira.jpg"],
  [1,"Made Devi Ranita Ningtara", [0,1,0,0,0,1,0,0,0,0,0,0,0,0], "gen04/made_devi_ranita.jpg"],
  [1,"Mega Suryani", [0,1,0,0,0,1,0,0,0,0,0,0,0,0], "gen04/mega_suryani.jpg"],
  [1,"Melati Putri Rahel Sesilia", [0,1,0,0,0,1,0,0,0,0,0,0,0,0], "gen04/melati_putri_rahel.jpg"],
  [1,"Sri Lintang", [0,1,0,0,0,1,0,0,0,0,0,0,0,0], "gen04/sri_lintang.jpg"],
  [1,"Tan Zhi Hui Celine", [0,1,0,0,0,1,0,0,0,0,0,0,0,0], "gen04/tan_zhi_hui_celine.jpg"],
  [1,"Zahra Yuriva Dermawan", [0,1,0,0,0,1,0,0,0,0,0,0,0,0], "gen04/yuriva.jpg"],
  //gen05
  [1,"Adhisty Zara", [0,1,0,0,0,0,1,0,0,0,0,0,0,0], "gen05/adhisty_zara.jpg"],
  [1,"Anggita Destiana Dewi", [0,1,0,0,0,0,1,0,0,0,0,0,0,0], "gen05/anggita_destiana.jpg"],
  [1,"Chintya Hanindhitakirana Wirawan", [0,1,0,0,0,0,1,0,0,0,0,0,0,0], "gen05/chintya.jpg"],
  [1,"Citra Ayu Pranajaya Wibrado", [0,1,0,0,0,0,1,0,0,0,0,0,0,0], "gen05/citra.jpg"],
  [1,"Diani Amalia Ramadhani", [0,1,0,0,0,0,1,0,0,0,0,0,0,0], "gen05/diani.jpg"],
  [1,"Elizabeth Gloria Setiawan", [0,1,0,0,0,0,1,0,0,0,0,0,0,0], "gen05/glori.jpg"],
  [1,"Eve Antoinette Ichwan", [0,1,0,0,0,0,1,0,0,0,0,0,0,0], "gen05/eve_antoinette.jpg"],
  [1,"Gabryela Marcelina", [0,1,0,0,0,0,1,0,0,0,0,0,0,0], "gen05/gabryela_marcelina.jpg"],
  [1,"Hasyakyla Utami Kusumawardhani", [0,1,0,0,0,0,1,0,0,0,0,0,0,0], "gen05/haskyla_utami.jpg"],
  [1,"Helma Sonya", [0,1,0,0,0,0,1,0,0,0,0,0,0,0], "gen05/helma_sonya.jpg"],
  [1,"Nurhayati", [0,1,0,0,0,0,1,0,0,0,0,0,0,0], "gen05/nurhayati.jpg"],
  [1,"Puti Nadhira Azalia", [0,1,0,0,0,0,1,0,0,0,0,0,0,0], "gen05/puti_nadhira.jpg"],
  [1,"Regina Angelina", [0,1,0,0,0,0,1,0,0,0,0,0,0,0], "gen05/regina.jpg"],
  [1,"Rissanda Putri Tuarissa", [0,1,0,0,0,0,1,0,0,0,0,0,0,0], "gen05/rissanda_putri.jpg"],
  [1,"Ruth Damayanti Sitanggang", [0,1,0,0,0,0,1,0,0,0,0,0,0,0], "gen05/ruth.jpg"],
  [1,"Sania Julia Montolalu", [0,1,0,0,0,0,1,0,0,0,0,0,0,0], "gen05/sania_julia.jpg"],
  [1,"Violeta Burhan", [0,1,0,0,0,0,1,0,0,0,0,0,0,0], "gen05/violeta_burhan.jpg"],
  //gen06
  [1,"Amanda Priscella Solichin", [0,1,0,0,0,0,0,1,0,0,0,0,0,0], "gen06/amandapricella.jpg"],
  [1,"Anastasya Narwastu Tety Handuran", [0,1,0,0,0,0,0,1,0,0,0,0,0,0], "gen06/anastasya_narwastu_tety_handuran.jpg"],
  [1,"Ariella Calista Ichwan", [0,1,0,0,0,0,0,1,0,0,0,0,0,0], "gen06/ariel.jpg"],
  [1,"Denise Caroline", [0,1,0,0,0,0,0,1,0,0,0,0,0,0], "gen06/denise.jpg"],
  [1,"Erika Ebisawa Kuswan", [0,1,0,0,0,0,0,1,0,0,0,0,0,0], "gen06/erika.jpg"],
  [1,"Erika Sintia", [0,1,0,0,0,0,0,1,0,0,0,0,0,0], "gen06/erikasintia.jpg"],
  [1,"Gita Sekar Andarini", [1,0,0,0,0,0,0,1,0,0,0,0,0,0], "gen06/gita_sekar_andarini.jpg"],
  [1,"Graciella Ruth Wiranto", [0,1,0,0,0,0,0,1,0,0,0,0,0,0], "gen06/wiranto.jpg"],
  [1,"Jihan Miftahul Jannah", [0,1,0,0,0,0,0,1,0,0,0,0,0,0], "gen06/jihanmiftahul.jpg"],
  [1,"Kandiya Rafa Maulidita", [0,1,0,0,0,0,0,1,0,0,0,0,0,0], "gen06/kandiya_rafa_maulidita.jpg"],
  [1,"Putri Cahyaning Anggraini", [0,1,0,0,0,0,0,1,0,0,0,0,0,0], "gen06/riri.jpg"],
  [1,"Rinanda Syahputri", [0,1,0,0,0,0,0,1,0,0,0,0,0,0], "gen06/rinanda.jpg"],
  [1,"Riska Amelia Putri", [0,1,0,0,0,0,0,1,0,0,0,0,0,0], "gen06/riska_amelia_putri.jpg"],
  [1,"Shalza Grasita", [0,1,0,0,0,0,0,1,0,0,0,0,0,0], "gen06/shalza.jpg"],
  //gen07
  [1,"Aiko Harumi Nangin", [0,1,0,0,0,0,0,0,1,0,0,0,0,0], "gen07/Aiko_Harumi.jpg"],
  [1,"Angelina Christy", [0,1,0,0,0,0,0,0,1,0,0,0,0,0], "gen07/angelina_christy.jpg"],
  [1,"Aurel Mayori", [0,1,0,0,0,0,0,0,1,0,0,0,0,0], "gen07/aurel_mayori.jpg"],
  [1,"Azizi Asadel", [0,1,0,0,0,0,0,0,1,0,0,0,0,0], "gen07/azizi_asadel.jpg"],
  [1,"Calista Lea Jaya", [0,1,0,0,0,0,0,0,1,0,0,0,0,0], "gen07/callista.jpg"],
  [1,"Dhea Angelia", [0,1,0,0,0,0,0,0,1,0,0,0,0,0], "gen07/dhea_angelia.jpg"],
  [1,"Febi Komaril", [0,1,0,0,0,0,0,0,1,0,0,0,0,0], "gen07/Febi.jpg"],
  [1,"Febrina Diponegoro", [0,1,0,0,0,0,0,0,1,0,0,0,0,0], "gen07/febrina.jpg"],
  [1,"Febriola Sinambela", [0,1,0,0,0,0,0,0,1,0,0,0,0,0], "gen07/febriola_sinambela.jpg"],
  [1,"Freya Jayawardana", [0,1,0,0,0,0,0,0,1,0,0,0,0,0], "gen07/freya_jayawardana.jpg"],
  [1,"Gabriel Angelina", [0,1,0,0,0,0,0,0,1,0,0,0,0,0], "gen07/gabriel_angelina.jpg"],
  [1,"Helisma Putri", [0,1,0,0,0,0,0,0,1,0,0,0,0,0], "gen07/helisma_putri.jpg"],
  [1,"Jessica Chandra", [0,1,0,0,0,0,0,0,1,0,0,0,0,0], "gen07/jessica_chandra.jpg"],
  [1,"Jesslyn Callista", [0,1,0,0,0,0,0,0,1,0,0,0,0,0], "gen07/jesslyn_callista.jpg"],
  [1,"Kanya Caya", [0,1,0,0,0,0,0,0,1,0,0,0,0,0], "gen07/kanya_caya.jpg"],
  [1,"Mutiara Azzahra", [0,1,0,0,0,0,0,0,1,0,0,0,0,0], "gen07/mutiara_azzahra.jpg"],
  [1,"Nabila Fitriana", [0,1,0,0,0,0,0,0,1,0,0,0,0,0], "gen07/nabila_fitriana.jpg"],
  [1,"Rifa Fatmasari", [0,1,0,0,0,0,0,0,1,0,0,0,0,0], "gen07/rifa.jpg"],
  [1,"Viona Fadrin", [0,1,0,0,0,0,0,0,1,0,0,0,0,0], "gen07/viona_fadrin.jpg"],
  [1,"Yessica Tamara", [0,1,0,0,0,0,0,0,1,0,0,0,0,0], "gen07/yessica_tamara.jpg"],
  //gen08
  [1,"Amanina Afiqah", [0,1,0,0,0,0,0,0,0,1,0,0,0,0], "gen08/amanina_afiqah.jpg"],
  [1,"Amirah Fatin", [0,1,0,0,0,0,0,0,0,1,0,0,0,0], "gen08/amirah_fatin.jpg"],
  [1,"Cindy Nugroho", [0,1,0,0,0,0,0,0,0,1,0,0,0,0], "gen08/cindy_nugroho.jpg"],
  [1,"Cornelia Vanisa", [0,1,0,0,0,0,0,0,0,1,0,0,0,0], "gen08/cornelia_vanisa.jpg"],
  [1,"Devytha Maharani Putri", [0,1,0,0,0,0,0,0,0,1,0,0,0,0], "gen08/devytha_maharani.jpg"],
  [1,"Eriena Kartika Dewi", [0,1,0,0,0,0,0,0,0,1,0,0,0,0], "gen08/eriena.jpg"],
  [1,"Fiony Alveria", [0,1,0,0,0,0,0,0,0,1,0,0,0,0], "gen08/fiony_alveria.jpg"],
  [1,"Flora Shafiq", [0,1,0,0,0,0,0,0,0,1,0,0,0,0], "gen08/flora_shafiq.jpg"],
  [1,"Gabriella Stevany", [0,1,0,0,0,0,0,0,0,1,0,0,0,0], "gen08/gabriella_vany.jpg"],
  [1,"Keisya Ramadhani", [0,1,0,0,0,0,0,0,0,1,0,0,0,0], "gen08/keisya.jpg"],
  [1,"Lulu Salsabila", [0,1,0,0,0,0,0,0,0,1,0,0,0,0], "gen08/lulu_salsabila.jpg"],
  [1,"Nyimas Ratu Rafa", [0,1,0,0,0,0,0,0,0,1,0,0,0,0], "gen08/nyimas_ratu_rafa.jpg"],
  [1,"Pamela Krysanthe Adijaya", [0,1,0,0,0,0,0,0,0,1,0,0,0,0], "gen08/pamela.jpg"],
  [1,"Reva Adriana Ramadhani", [0,1,0,0,0,0,0,0,0,1,0,0,0,0], "gen08/reva_p.jpg"],
  [1,"Reva Fidela", [0,1,0,0,0,0,0,0,0,1,0,0,0,0], "gen08/reva_fidela.jpg"],
  [1,"Salma Annisa", [0,1,0,0,0,0,0,0,0,1,0,0,0,0], "gen08/salma.jpg"],
  [1,"Umega Maulana", [0,1,0,0,0,0,0,0,0,1,0,0,0,0], "gen08/umega_maulana.jpg"],
  [1,"Zahra Nur", [0,1,0,0,0,0,0,0,0,1,0,0,0,0], "gen08/zahra_nur.jpg"],
  //gen09
  [1,"Adzana Shaliha", [1,0,0,0,0,0,0,0,0,0,1,0,0,0], "gen09/Adzana_Shaliha.jpg"],
  [1,"Caithlyn Gwyneth", [0,1,0,0,0,0,0,0,0,0,1,0,0,0], "gen09/Chaitlyn_Gwyneth.jpg"],
  [1,"Chalista Ellysia", [0,1,0,0,0,0,0,0,0,0,1,0,0,0], "gen09/Chalista_Ellysia.jpg"],
  [1,"Christabel Jocelyn", [0,1,0,0,0,0,0,0,0,0,1,0,0,0], "gen09/Christabel_Jocelyn.jpg"],
  [1,"Indah Cahya", [1,0,0,0,0,0,0,0,0,0,1,0,0,0], "gen09/indah_cahya.jpg"],
  [1,"Iris Vevina Prasetio",[0,1,0,0,0,0,0,0,0,0,1,0,0,0], "gen09/iris.jpg"],
  [1,"Kathrina Irene", [1,0,0,0,0,0,0,0,0,0,1,0,0,0], "gen09/kathrina_irene.jpg"],
  [1,"Marsha Lenathea", [1,0,0,0,0,0,0,0,0,0,1,0,0,0], "gen09/marsha_lenathea.jpg"],
  [1,"Nabila Gusmarlia", [0,1,0,0,0,0,0,0,0,0,1,0,0,0], "gen09/nabila_gusmarila.jpg"],
  [1,"Olivia Payten", [0,1,0,0,0,0,0,0,0,0,1,0,0,0], "gen09/olivia_payten.jpg"],
  [1,"Putri Elzahra", [0,1,0,0,0,0,0,0,0,0,1,0,0,0], "gen09/putri_elzahra.jpg"],
  [1,"Shinta Devi", [0,1,0,0,0,0,0,0,0,0,1,0,0,0], "gen09/shinta_devi.jpg"],
  [1,"Tiara Sasi Kirana Putri", [0,1,0,0,0,0,0,0,0,0,1,0,0,0], "gen09/tiara_sasi.jpg"],
  //gen10
  [1,"Abieza Syabira", [0,1,0,0,0,0,0,0,0,0,0,1,0,0], "gen10/abieza.jpg"],
  [1,"Alia Giselle Maharani", [0,1,0,0,0,0,0,0,0,0,0,1,0,0], "gen10/alia.jpg"],
  [1,"Amanda Puspita Sukma Mulyadewi", [1,0,0,0,0,0,0,0,0,0,0,1,0,0], "gen10/amanda.jpg"],
  [1,"Aurellia", [1,0,0,0,0,0,0,0,0,0,0,1,0,0], "gen10/lia.jpg"],
  [1,"Amanda Puspita Sukma Mulyadewi", [1,0,0,0,0,0,0,0,0,0,0,1,0,0], "gen10/amanda.jpg"],
  [1,"Callista Alifia Wardhana", [1,0,0,0,0,0,0,0,0,0,0,1,0,0], "gen10/callie.jpg"],
  [1,"Danessa Valerie Hertanto", [0,1,0,0,0,0,0,0,0,0,0,1,0,0], "gen10/danessa.jpg"],
  [1,"Gabriela Abigail Mewengkang", [1,0,0,0,0,0,0,0,0,0,0,1,0,0], "gen10/ella.jpg"],
  [1,"Indira Putri Seruni", [1,0,0,0,0,0,0,0,0,0,0,1,0,0], "gen10/indira.jpg"],
  [1,"Jesslyn Elly", [1,0,0,0,0,0,0,0,0,0,0,1,0,0], "gen10/lyn.jpg"],
  [1,"Naura Safinatunnajah", [0,1,0,0,0,0,0,0,0,0,0,1,0,0], "gen10/naura.jpg"],
  [1,"Raisha Syifa Wardhana", [1,0,0,0,0,0,0,0,0,0,0,1,0,0], "gen10/raisha.jpg"],
  //gen11
  [1,"Alya Amanda", [1,0,0,0,0,0,0,0,0,0,0,0,1,0], "gen11/Alya.jpg"],
  [1,"Anindya Ramadhani", [1,0,0,0,0,0,0,0,0,0,0,0,1,0], "gen11/Anindya.jpg"],
  [1,"Aulia Asyira Basarestu", [0,1,0,0,0,0,0,0,0,0,0,0,1,0], "gen11/Aulia.jpg"],
  [1,"Cathleen Nixie", [1,0,0,0,0,0,0,0,0,0,0,0,1,0], "gen11/Cathy.jpg"],
  [1,"Celline Thefannie", [1,0,0,0,0,0,0,0,0,0,0,0,1,0], "gen11/Elin.jpg"],
  [1,"Chelsea Davina Norman", [1,0,0,0,0,0,0,0,0,0,0,0,1,0], "gen11/Chelsea.jpg"],
  [1,"Cynthia Yaputera", [1,0,0,0,0,0,0,0,0,0,0,0,1,0], "gen11/Cynthia.jpg"],
  [1,"Dena Natalia", [1,0,0,0,0,0,0,0,0,0,0,0,1,0], "gen11/Danella.jpg"],
  [1,"Desy Natalia", [1,0,0,0,0,0,0,0,0,0,0,0,1,0], "gen11/Daisy.jpg"],
  [1,"Gendis Mayrannisa", [1,0,0,0,0,0,0,0,0,0,0,0,1,0], "gen11/Gendis.jpg"],
  [1,"Grace Octaviani", [1,0,0,0,0,0,0,0,0,0,0,0,1,0], "gen11/Gracie.jpg"],
  [1,"Greesella Sophina Adhalia", [1,0,0,0,0,0,0,0,0,0,0,0,1,0], "gen11/Greesel.jpg"],
  [1,"Jeane Victoria", [1,0,0,0,0,0,0,0,0,0,0,0,1,0], "gen11/Jeane.jpg"],
  [1,"Michelle Alexandra", [1,0,0,0,0,0,0,0,0,0,0,0,1,0], "gen11/Michie.jpg"],
  //kaigai
  [1,"Aki Takajo", [0,1,0,0,0,0,0,0,0,0,0,0,0,1], "kaigai/akicha.jpg"],
  [1,"Haruka Nakagawa", [0,1,0,0,0,0,0,0,0,0,0,0,0,1], "kaigai/haruka.jpg"],
  [1,"Rina Chikano", [0,1,0,0,0,0,0,0,0,0,0,0,0,1], "kaigai/chikarina.jpg"],
  [1,"Saya Kawamoto", [0,1,0,0,0,0,0,0,0,0,0,0,0,1], "kaigai/sayaya.jpg"],
];

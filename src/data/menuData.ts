import musakhan from "@/assets/food/musakhan.jpg";
import maqluba from "@/assets/food/maqluba.jpg";
import qidra from "@/assets/food/qidra.jpg";
import maftoul from "@/assets/food/maftoul.jpg";
import akoub from "@/assets/food/akoub.jpg";
import shishbarak from "@/assets/food/shishbarak.jpg";
import fatteh from "@/assets/food/fatteh.jpg";
import dolma from "@/assets/food/dolma.jpg";

import freekeh from "@/assets/food/freekeh.jpg";
import potatoes from "@/assets/food/potatoes.jpg";
import pumpkin from "@/assets/food/pumpkin.jpg";
import rqaqa from "@/assets/food/rqaqa.jpg";
import loaf from "@/assets/food/loaf.jpg";

import hummus from "@/assets/food/hummus.jpg";
import fattoush from "@/assets/food/fattoush.jpg";
import falafel from "@/assets/food/falafel.jpg";
import makdous from "@/assets/food/makdous.jpg";
import sumaciya from "@/assets/food/sumaciya.jpg";
import farmersalad from "@/assets/food/farmersalad.jpg";
import moutabal from "@/assets/food/moutabal.jpg";
import freekehsoup from "@/assets/food/freekehsoup.jpg";

import knafeh from "@/assets/food/knafeh.jpg";
import qatayef from "@/assets/food/qatayef.jpg";
import maamoul from "@/assets/food/maamoul.jpg";
import ricepudding from "@/assets/food/ricepudding.jpg";
import kallaj from "@/assets/food/kallaj.jpg";
import yansouniya from "@/assets/food/yansouniya.jpg";
import hareeseh from "@/assets/food/hareeseh.jpg";
import baklava from "@/assets/food/baklava.jpg";

import tamarind from "@/assets/food/tamarind.jpg";
import carob from "@/assets/food/carob.jpg";
import licorice from "@/assets/food/licorice.jpg";
import zuhorat from "@/assets/food/zuhorat.jpg";
import arabiccoffee from "@/assets/food/arabiccoffee.jpg";
import sagetea from "@/assets/food/sagetea.jpg";
import sahlab from "@/assets/food/sahlab.jpg";
import anisetea from "@/assets/food/anisetea.jpg";
import minttea from "@/assets/food/minttea.jpg";

export interface MenuItem {
  id: string;
  nameAr: string;
  nameEn: string;
  image: string;
}

export interface MenuCategory {
  id: string;
  titleAr: string;
  titleEn: string;
  price: number;
  priceLabel: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "main",
    titleAr: "الأطباق الرئيسيّة",
    titleEn: "Main Dishes",
    price: 50,
    priceLabel: "سعر موحد للأطباق الرئيسية: الطبق 50 شيكل",
    items: [
      { id: "musakhan", nameAr: "مسخّن", nameEn: "Musakhan", image: musakhan },
      { id: "maqluba", nameAr: "مقلوبة", nameEn: "Maqluba", image: maqluba },
      { id: "qidra", nameAr: "قدرة خليلية", nameEn: "Qidra Khaliliya", image: qidra },
      { id: "maftoul", nameAr: "مفتول فلسطيني", nameEn: "Palestinian Maftoul", image: maftoul },
      { id: "akoub", nameAr: "عكوب بلبن", nameEn: "Akoub in Yogurt", image: akoub },
      { id: "shishbarak", nameAr: "شيش برك", nameEn: "Shish Barak", image: shishbarak },
      { id: "fatteh", nameAr: "فتة غزاوية", nameEn: "Gazawiya Fatteh", image: fatteh },
      { id: "dolma", nameAr: "دوالي ومحاشي", nameEn: "Stuffed Vine Leaves and Vegetables", image: dolma },
    ],
  },
  {
    id: "sides",
    titleAr: "الأطباق الجانبيّة",
    titleEn: "Side Dishes",
    price: 30,
    priceLabel: "سعر موحد للأطباق الجانبية: الطبق 30 شيكل",
    items: [
      { id: "freekeh", nameAr: "فريكة بالدجاج", nameEn: "Freekeh with Chicken", image: freekeh },
      { id: "potatoes", nameAr: "بطاطا بالفرن", nameEn: "Oven Potatoes", image: potatoes },
      { id: "pumpkin", nameAr: "بقطين مطبوخ (قرع)", nameEn: "Cooked Pumpkin", image: pumpkin },
      { id: "rqaqa", nameAr: "الرقاقة", nameEn: "Rqaqa (Traditional Rishta Stew)", image: rqaqa },
      { id: "loaf", nameAr: "لوف بالعجين", nameEn: "Loaf Bread with Dough", image: loaf },
    ],
  },
  {
    id: "appetizers",
    titleAr: "المقبلات والسلطات",
    titleEn: "Appetizers and Salads",
    price: 15,
    priceLabel: "سعر موحد للمقبلات والسلطات: سعر الطبق 15 شيكل",
    items: [
      { id: "hummus", nameAr: "حمص بالطحينة", nameEn: "Hummus with Tahini", image: hummus },
      { id: "fattoush", nameAr: "سلطة فتوش", nameEn: "Fattoush Salad", image: fattoush },
      { id: "falafel", nameAr: "فلافل", nameEn: "Falafel", image: falafel },
      { id: "makdous", nameAr: "مكدوس", nameEn: "Makdous", image: makdous },
      { id: "sumaciya", nameAr: "سماقية", nameEn: "Sumaciya", image: sumaciya },
      { id: "farmersalad", nameAr: "سلطة فلاحية", nameEn: "Farmer's Salad", image: farmersalad },
      { id: "moutabal", nameAr: "متبل الباذنجان", nameEn: "Eggplant Moutabal", image: moutabal },
      { id: "freekehsoup", nameAr: "شوربة فريكة", nameEn: "Freekeh Soup", image: freekehsoup },
    ],
  },
  {
    id: "desserts",
    titleAr: "الحلويات",
    titleEn: "Desserts",
    price: 15,
    priceLabel: "سعر موحد للحلويات: أبسعر الطبق 15 شيكل",
    items: [
      { id: "knafeh", nameAr: "كنافة نابلسية", nameEn: "Nabulsi Knafeh", image: knafeh },
      { id: "qatayef", nameAr: "قطايف", nameEn: "Qatayef", image: qatayef },
      { id: "maamoul", nameAr: "معمول", nameEn: "Maamoul", image: maamoul },
      { id: "ricepudding", nameAr: "رز بحليب", nameEn: "Rice Pudding", image: ricepudding },
      { id: "kallaj", nameAr: "كلاج باللوز", nameEn: "Kallaj with Almonds", image: kallaj },
      { id: "yansouniya", nameAr: "يانسونية", nameEn: "Yansouniya", image: yansouniya },
      { id: "hareeseh", nameAr: "هريسة", nameEn: "Hareeseh", image: hareeseh },
      { id: "baklava", nameAr: "بقلاوة", nameEn: "Baklava", image: baklava },
    ],
  },
  {
    id: "cold-drinks",
    titleAr: "مشروبات باردة",
    titleEn: "Cold Drinks",
    price: 10,
    priceLabel: "سعر موحد للمشروبات: 10 شيكل",
    items: [
      { id: "tamarind", nameAr: "تمر هندي", nameEn: "Tamarind Juice", image: tamarind },
      { id: "carob", nameAr: "خروب", nameEn: "Carob Juice", image: carob },
      { id: "licorice", nameAr: "عرق سوس", nameEn: "Licorice Drink", image: licorice },
    ],
  },
  {
    id: "hot-drinks",
    titleAr: "مشروبات ساخنة",
    titleEn: "Hot Drinks",
    price: 10,
    priceLabel: "سعر موحد للمشروبات: 10 شيكل",
    items: [
      { id: "zuhorat", nameAr: "زهورات", nameEn: "Zuhorat", image: zuhorat },
      { id: "sagetea", nameAr: "شاي بالميرمية", nameEn: "Sage Tea", image: sagetea },
      { id: "anisetea", nameAr: "يانسون", nameEn: "Anise Tea", image: anisetea },
      { id: "minttea", nameAr: "شاي بالنعناع", nameEn: "Mint Tea", image: minttea },
      { id: "arabiccoffee", nameAr: "قهوة عربية", nameEn: "Arabic Coffee", image: arabiccoffee },
      { id: "sahlab", nameAr: "سحلب", nameEn: "Sahlab", image: sahlab },
    ],
  },
];

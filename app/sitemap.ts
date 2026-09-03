import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
return [
{
url: "https://gpsworld-eg.com",
lastModified: new Date(),
changeFrequency: "weekly",
priority: 1,
},
{
url: "https://gpsworld-eg.com/software",
lastModified: new Date(),
changeFrequency: "weekly",
priority: 0.9,
},
{
url: "https://gpsworld-eg.com/recharge",
lastModified: new Date(),
changeFrequency: "weekly",
priority: 0.9,
},
{
url: "https://gpsworld-eg.com/contact",
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.7,
},

{
  url: "https://gpsworld-eg.com/devices/gt06n-2g",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: "https://gpsworld-eg.com/devices/gt06n-4g",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: "https://gpsworld-eg.com/devices/ev402-2g",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: "https://gpsworld-eg.com/devices/ev404-4g",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: "https://gpsworld-eg.com/devices/j16pro-max",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: "https://gpsworld-eg.com/devices/AK300",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: "https://gpsworld-eg.com/devices/B100",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: "https://gpsworld-eg.com/devices/EV505",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: "https://gpsworld-eg.com/devices/tk303",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: "https://gpsworld-eg.com/devices/obd22",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: "https://gpsworld-eg.com/devices/obdvl505",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: "https://gpsworld-eg.com/devices/qbit",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: "https://gpsworld-eg.com/devices/w15l",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: "https://gpsworld-eg.com/devices/at4",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},
{
  url: "https://gpsworld-eg.com/devices/at4-plus",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.8,
},

];
}
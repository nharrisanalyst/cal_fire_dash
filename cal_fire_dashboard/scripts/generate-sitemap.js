import fetch from "node-fetch";
import fs from 'fs';

export const routes = [
    {path:"/"}, //home
    {path:"/dashboard"},
    {path:"/zipcodes"},
    {path:"/findanagent"},
    {path:"/buyhomeins"},
    {path:"/buycarins"},
    {path:"/counties"},
    {path:"/cities"},
    {path:"/zipcodes"},
]


async function generateSitemap() {

    const res = await fetch("https://api.fire-exposure-index.com/zipcode/all")
    const zipcodeJSON = await res.json();
    const zipcodes = zipcodeJSON.data.map(z=>z.zipcode)

    const urls = [
        {path:"/", changefreq: "daily", priority: 1.0},
        {path:"/dashboard", changefreq: "weekly", priority: 0.8},
        {path:"/zipcodes", changefreq: "weekly", priority: 0.8},
        {path:"/findanagent", changefreq: "weekly", priority: 0.8},
        {path:"/buyhomeins", changefreq: "weekly", priority: 0.8},
        {path:"/buycarins", changefreq: "weekly", priority: 0.8},
        {path:"/counties", changefreq: "weekly", priority: 0.8},
        {path:"/cities", changefreq: "weekly", priority: 0.8},
        {path:"/zipcodes", changefreq: "weekly", priority: 0.8},
        ...zipcodes.map((z) => ({
                path: `/dashboard/${z}`,
                changefreq: "weekly",
                priority: 0.7,
            })),
    ]

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
                <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${urls
                .map(
                    (u) => `
                    <url>
                        <loc>https://www.fire-exposure-index.com${u.path}</loc>
                        <changefreq>${u.changefreq}</changefreq>
                        <priority>${u.priority}</priority>
                    </url>`
                )
                .join("\n")}
            </urlset>`;
    
    fs.writeFileSync("public/sitemap.xml", xml);           
    
}




generateSitemap().catch(console.error);
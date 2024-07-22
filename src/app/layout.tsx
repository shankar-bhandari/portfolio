import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })


const TITLE = 'Shankar Bhandari| Professional Web and Application Developer';
const DESCRIPTION = 'Expert developer in WordPress, React.js, React Native, and Node.js. I create smooth websites and apps using different technologies. Check out my work for innovative solutions.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    authors : {
        name : "Shankar Bhandari",
        /*url : "https://sureshchand.com.np"*/
    },
    keywords : ["Shankar Bhandari, Wordpress Developer, Full Stack Developer, React, React Native, Nextjs, Node, Programmer"],
    generator : "Next",
    referrer  : "origin",
    viewport : {
        initialScale : 1.0,
        width : "device-width"
    },
    creator : "Shankar Bhandari",
    openGraph : {
        type : "profile",
        title : TITLE,
        description : DESCRIPTION,
       /* url : "https://sureshchand.com.np",*/
        countryName : "Australia",
        siteName : "Shankar Bhandari",
        images : [{
            url : ""
        }]
    },
    twitter : {
        card : "summary_large_image",
        title : TITLE,
        description : DESCRIPTION,
        creator : "Shankar Bhandari",
        site : "Shankar Bhandari",
        images : ""
    },
    category: "Portfolio"

}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="bg-gray-900 antialiased">{children}</body>
        </html>
    )
}

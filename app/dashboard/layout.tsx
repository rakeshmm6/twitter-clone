'use client';
import "@/styles/globals.css";
import{Inter} from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import type { AppProps } from "next/app";
import { Head } from "next/document";

const inter = Inter({subsets:["latin"]});

export default function DashboardLayout({Component, pageProps}:AppProps){
    return(
       
            <GoogleOAuthProvider clientId="618467461016-9c5naj4odr1br84s7rbdildi35ti0q7u.apps.googleusercontent.com">
                <Component {...pageProps} />
            </GoogleOAuthProvider>
    
    );
}
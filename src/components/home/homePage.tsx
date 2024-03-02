/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useContext } from 'react'
import PageBanner from '../pageBanner'
import dynamic from "next/dynamic";
import Filter from './filter';
import Products from './product';


const Homepage = ({ homeContent }: any) => {
  return (
    <>
    <PageBanner />
    <Products />
    <Filter />
    </>
  )
}


export default Homepage


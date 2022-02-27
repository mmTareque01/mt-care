import React from 'react'
import { Route, Routes } from 'react-router-dom';

//----------{pages}----------//
import {PATH} from './paths' 

//----------{pages}----------//
import Login from '../pages/login';
import Home from '../pages/home';


export default function Index() {
  return (
    <>
        <Routes>
            <Route path = {PATH.login} element={<Login/>}></Route>
            <Route path = {PATH.root} element={<Login/>}></Route>
            <Route path = {PATH.home.root} element={<Home/>}></Route>
        </Routes>
    </>
  )
}

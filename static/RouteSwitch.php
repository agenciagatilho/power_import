<?php

abstract class RouteSwitch
{
    protected function home()
    {
        require __DIR__ . '/index.html';
    }

    protected function blog()
    {
        require __DIR__ . '/pages/about.html';
    }
}

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media} from 'reactstrap';
import {Button, Label, Col, Row} from 'reactstrap'

function Sidebar(props) {
    const [search, setSearch] = useState("")

    const handleChange = (event) => {
        
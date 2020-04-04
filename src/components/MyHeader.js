import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import { removeUserSession } from '../utilities/Common';
import Img from 'react-image'

const { Header } = Layout;

function MyHeader(props) {
    // odjava korisnika
    const handleLogout = () => {
        removeUserSession();
        props.history.push('/');
    }

    return (
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[props.page]}
            >
                <Menu.Item key="1">
                    Home
                    <Link to="/dashboard/home" />
                </Menu.Item>
                <Menu.Item key="2">
                    Cashiers
                    <Link to="/dashboard/cashiers" />
                </Menu.Item>
                <Menu.Item key="5">
                    Managers
                    <Link to="/dashboard/managers" />
                </Menu.Item>
                <Menu.Item key="3">
                    Add employees
                    <Link to="/dashboard/add_employee" />
                </Menu.Item>
                <Menu.Item key="4" style={{ float: "right", backgroundColor: "#039dfc" }} onClick={handleLogout}>
                    <Img src={require('../img/logout.png')} width='20px' height='20px'/>
                    {" "}Log out
                </Menu.Item>
            </Menu>
        </Header>
    );
}

export default MyHeader;
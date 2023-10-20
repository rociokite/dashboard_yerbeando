import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './AllProducts.css';
// import PropTypes from 'prop-types';

 // yerbeando.onrender.com
 // localhost:3002

function AllProducts(props) {
  const [usersData, setUsersData] = useState({ count: 0, users: [] });

  useEffect(() => {
    fetch('http://localhost:3002/services/usuarios')
      .then(response => response.json())
      .then(data => {
        setUsersData(data);
      })
      .catch(error => {
        console.error('Error al cargar los usuarios', error);
      });
  }, []);

  //usamos endpoint de productos
  const [listProductsData, setListProductsData] = useState({ count: 0, countByCategory: [], products: [] });

  useEffect(() => {
    fetch('http://localhost:3002/services/productos')
      .then(response => response.json())
      .then(data => {
        setListProductsData({
          count: data.count,
          countByCategory: data.countByCategory,
          products: data.products
        });

      })
      .catch(error => {
        console.error('Error al obtener datos', error);
      });
  }, []);

  //usamos endpoint de categorias
  const [listCategorysData, setlistCategorysData] = useState({ Category: [] });

  useEffect(() => {
    fetch('http://localhost:3002/services/categorias')
      .then(response => response.json())
      .then(data => {
        setlistCategorysData({
          count: data.count
        });
      })
      .catch(error => {
        console.error('Error al obtener datos', error);
      });
  }, []);

  return (
    <div className="recuadro">

      <html lang="es">
        <body>

          <div id="wrapper">

            {/* Sidebar */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

              {/* Sidebar - Brand */}
              <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Admin</div>
              </a>

              {/* Divider */}
              <hr className="sidebar-divider my-0" />

              {/* Nav Item - Dashboard */}
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  <i className="fas fa-fw fa-tachometer-alt"></i>
                  <span>Dashboard</span></a>
              </li>

              {/* Divider */}
              <hr className="sidebar-divider" />

              {/* Heading */}
              <div className="sidebar-heading">Actions</div>

              {/* Nav Item - Pages */}
              <li className="nav-item">
                <a className="nav-link collapsed" href="/">
                  <i className="fas fa-fw fa-folder"></i>
                  <span>Pages</span>
                </a>
              </li>

              {/* Nav Item - Charts */}
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="fas fa-fw fa-chart-area"></i>
                  <span>Charts</span></a>
              </li>

              {/* Nav Item - Tables */}
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="fas fa-fw fa-table"></i>
                  <span>Tables</span></a>
              </li>

              {/* Divider */}
              <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/* End of Sidebar */}

            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">

              {/* Main Content */}
              <div id="content">                 

                {/* Begin Page Content */}
                <div className="container-fluid">

                  {/* Page Heading */}
                  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                  </div>

                  {/* Content Row */}
                  <div className="row">

                    {/* Amount of Products in DB */}
                    <div className="col-md-4 mb-4">
                      <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Products in Data Base</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">{listProductsData.count}</div>
                            </div>
                            <div className="col-auto">
                              <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* $$$ of all products in DB */}
                    <div className="col-md-4 mb-4">
                      <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Categorys quantity</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">{listCategorysData.count}</div>
                            </div>
                            <div className="col-auto">
                              <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Amount of users in DB */}
                    <div className="col-md-4 mb-4">
                      <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Users quantity</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">{usersData.count}</div>
                            </div>
                            <div className="col-auto">
                              <i className="fas fa-user-check fa-2x text-gray-300"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Content Row */}
                  <div className="row">
                    {/* Last Product in DB */}
                    <div className="col-lg-6 mb-4">
                      <div className="card shadow mb-4">
                        <div className="card-header py-3">
                          <h6 className="m-0 font-weight-bold text-primary">Last product in Data Base</h6>
                        </div>
                        <div className="card-body">
                          <div className="text-center"> 
                              <img
                                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                style={{ width: '25rem' }}
                                src=""
                                alt="imagen del producto"
                              />
                          </div>
                          <p>"Descripción no disponible"</p>
                          <a target="_blank" rel="nofollow" href="/"> "Descripción no disponible"</a>
                        </div>
                      </div>
                    </div>
                    {/* Categories in DB */}
                    <div className="col-lg-6 mb-4">
                      <div className="card shadow mb-4">
                        <div className="card-header py-3">
                          <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-lg-6 mb-4">
                              <div className="card bg-info text-white shadow">
                                <div className="card-body">Category 01</div>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <div className="card bg-info text-white shadow">
                                <div className="card-body">Category 02</div>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <div className="card bg-info text-white shadow">
                                <div className="card-body">Category 03</div>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <div className="card bg-info text-white shadow">
                                <div className="card-body">Category 04</div>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <div className="card bg-info text-white shadow">
                                <div className="card-body">Category 05</div>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <div className="card bg-info text-white shadow">
                                <div className="card-body">Category 06</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer */}
              <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                  <div className="copyright text-center my-auto">
                    <span>Copyright &copy; Dashboard 2020</span>
                  </div>
                </div>
              </footer>
              {/* End of Footer */}
            </div>
            {/* End of Content Wrapper */}
          </div>
          {/* End of Page Wrapper */}
        </body>
      </html>
    </div>
  );
}

AllProducts.propTypes = {
  // Add your prop types here
};

export default AllProducts;

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
        setUsersData(data);                                 //{usersData.count}
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
        const highestProductId = data.products.reduce((maxId, product) => {      //- FUERA DE USO
          return product.id > maxId ? product.id : maxId;
        }, -1); // Inicializamos en -1 para asegurarnos de obtener el ID más alto
  
        const highestProduct = data.products.find(product => product.id === highestProductId);   //- FUERA DE USO
        console.log(highestProduct)  
  
        setListProductsData({
          count: data.count,
          countByCategory: data.countByCategory,
          products: [highestProduct], //  FUERA DE USO
        });
      })
      .catch(error => {
        console.error('Error al obtener datos', error);
      });
  }, []);
 
  // {listProductsData.products[0].imagen  / nombre / descripcion} 


  //usamos endpoint de productos ID   - FUERA DE USO
  const [ProductIdData, setProductIdData] = useState({ product: [] });

  useEffect(() => {
    fetch('http://localhost:3002/services/productoId/1')
      .then(response => response.json())
      .then(data => {
        setProductIdData({
          product: data.productoId,                     
        });
      })
      .catch(error => {
        console.error('Error al obtener datos', error);
      });
  }, []);
   //  CODIGO: {/* ProductIdData.product.imagen }  // {/* ProductIdData.product.nombre */}   //   {/* ProductIdData.product.descripcion  */}

  //usamos endpoint de categorias
  const [listCategorysData, setlistCategorysData] = useState({ Category: [] });

  useEffect(() => {
    fetch('http://localhost:3002/services/categorias')
      .then(response => response.json())
      .then(data => {
        setlistCategorysData({
          count: data.count                 //{listCategorysData.count}
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

                    {/*Products in DB */}
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

                    {/* Categorys */}
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
                          <h6 className="m-0 font-weight-bold text-primary">Last product in Data Base </h6>
                        </div>
                        <div className="card-body">
                          <div className="text-center"> 
                              <img
                                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                style={{ width: '25rem' }}
                                src= {listProductsData.products[0].imagen}      
                                alt="imagen del producto"
                              />
                          </div>
                          <p>{listProductsData.products[0].nombre}  </p>          
                          <a target="_blank" rel="nofollow" href="/"> {listProductsData.products[0].descripcion}  </a>    
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
                                <div className="card-body"> {Object.keys(listProductsData.countByCategory)[0]}: {listProductsData.countByCategory[Object.keys(listProductsData.countByCategory)[0]]}</div>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <div className="card bg-info text-white shadow">
                                <div className="card-body">{Object.keys(listProductsData.countByCategory)[1]}: {listProductsData.countByCategory[Object.keys(listProductsData.countByCategory)[1]]}</div>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <div className="card bg-info text-white shadow">
                                <div className="card-body">{Object.keys(listProductsData.countByCategory)[2]}: {listProductsData.countByCategory[Object.keys(listProductsData.countByCategory)[2]]}</div>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <div className="card bg-info text-white shadow">
                                <div className="card-body">{Object.keys(listProductsData.countByCategory)[3]}: {listProductsData.countByCategory[Object.keys(listProductsData.countByCategory)[3]]}</div>
                              </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                              <div className="card bg-info text-white shadow">
                                <div className="card-body">{Object.keys(listProductsData.countByCategory)[4]}: {listProductsData.countByCategory[Object.keys(listProductsData.countByCategory)[4]]}</div>
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

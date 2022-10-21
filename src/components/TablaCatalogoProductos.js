import React,{Component, useEffect, useState} from "react";
import { Table } from "react-bootstrap";
import {getProducts} from "../services/product";
import "./styles/Landing.css";
import axios from "axios";
/*
<button className=" btn btn-dark catalogo-items">Buscar</button>
*/

function TablaCatalogo(){
    const [products, setProducts] = useState([]);
    const [precio, setPrecio] = useState(100);
    const [nombre, setNombre] = useState("");
    const [selectedCat, setSelectedCat] = useState("precio");
    const [filterSelection, setFilter] = useState("");

    const myCategs = ["Bicicleta Montaña", "Bicicleta Ruta", "Casco", "Bolsa Hidrantante", "Candado", "Ciclo Computador", "Luces"]

    useEffect(() =>{
        handleFilter()
    },)

    const handleChange = e =>{
        const {name, value} = e.target;
        //console.log(value)
        setFilter(value);
        //console.log(filterSelection);
    }

    const handleFilter = async () =>{
        let data;
        if(filterSelection === "precio"){
            data = await getProductsByPrice(precio);
            
        }else if(filterSelection === "categoria"){
            data = await getProductsByCategory(selectedCat);
            
        }else if(filterSelection === "nombre"){
            data = await getProductsByName(nombre);
        }else{
            data = await getProducts();
        }

        (data.length === 0)?(setProducts([])):(setProducts(data))
    }


    return (
    <div>
        <div className="container-fluid">
            <div className="catalogo-items">
                <input className="form-check-input" type="radio" name="radioNoLabel" id="radioPrecio" value="precio"  aria-label="..." onChange={handleChange}/>
                <label className="form-check-label" for="inlineRadio1" value="precio">Consultar por menor precio</label>
                <input className="form-control" type="number" value={precio} placeholder="59.9" onChange={(e) => setPrecio(e.target.value)}/>
            </div>

            <div className="catalogo-items">
                <input  className="form-check-input" type="radio" name="radioNoLabel" id="radioCategoria" value="categoria" aria-label="..." onChange={handleChange}/>
                <label className="form-check-label" for="inlineRadio1" value="categoria">Consultar por categoría</label>
                <select className="form-control" value={selectedCat} onChange={(e) => setSelectedCat(e.target.value)}>
                    <option></option>
                    {
                       myCategs?.map((category)=>{
                            return <> 
                                <option value={category}>{category}</option>
                            </>
                        })
                    }
                </select>
            </div>

            <div className="catalogo-items">
                <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNombre" value="nombre" aria-label="..." onChange={handleChange}/>
                <label className="form-check-label" for="inlineRadio1" value="nombre">Consultar por Nombre</label>
                <input className="form-control" type="text" value={nombre} placeholder="Casco GW" onChange={(e) => setNombre(e.target.value)}/>
            </div>
            
            
        </div>
        <Table striped bordered hover responsive>
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Categoria</th>
                <th>Disponible</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Imagen</th>
            </tr>
            </thead>
            <tbody>
            {
                products.map((product) =>(
                    <tr key={product.id}>
                        <td>{product.nombre}</td>
                        <td>{product.categoria}</td>
                        <td>{product.disponible?("si"):("no")}</td>
                        <td>{product.precio}</td>
                        <td>{product.stock}</td>
                        <td className="d-flex align-items-center justify-content-center"> <img src={product.imgRoute} alt="Not image found" className="imagen-tabla"></img> </td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    </div>
    )
}

function getProductsByPrice(precio){
    return axios.get("http://127.0.0.1:8080/api/v1/product/lte/"+precio)
    .then((response) => {
        return response.data
    })
    .catch(error => console.error("Error:"+error))
}

function getProductsByCategory(ctg){
    return axios.get("http://127.0.0.1:8080/api/v1/product/category/"+ctg)
    .then((response) => {
        return response.data
    })
    .catch(error => console.error("Error:"+error))
}

function getProductsByName(name){
    return axios.get("http://127.0.0.1:8080/api/v1/product/searchByName/"+name)
    .then((response) => {
        return response.data
    })
    .catch(error => console.error("Error:"+error))
}

export default TablaCatalogo;

import React,{Component, useEffect, useState} from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import {getProducts} from "../services/product";
/*

*/

function TablaListado(){
    const [products, setProducts] = useState([]);

    const [categoria, setCategoria] = useState("");
    const [nombre, setNombre] = useState("");
    const [descripcion, setDesc] = useState("");
    const [disponible, setDisp] = useState(false);
    const [lastUpdatetedId, setId] = useState("");
    const [imgRoute, setImg] = useState("");
    const [precio, setprecio] = useState(0.0);
    const [stock, setStock] = useState(0);

    const myCategs = ["Bicicleta Montaña", "Bicicleta Ruta", "Casco", "Bolsa Hidrantante", "Candado", "Ciclo Computador", "Luces"]

    useEffect(() =>{
        getProducts().then(items=>{
            setProducts(items);
        });
    },)

    const setData = (typeReq) =>{
        let dataToSend = {
            categoria:categoria,
            nombre:nombre,
            descripcion, descripcion,
            disponible, disponible,
            imgRoute:imgRoute,
            precio:precio,
            stock:stock
        }
        if(typeReq == "save"){
            sendProduct(JSON.stringify(dataToSend));
        }else{
            let dataToSend2 = {
                id:lastUpdatetedId,
                categoria:categoria,
                nombre:nombre,
                descripcion, descripcion,
                disponible, disponible,
                imgRoute:imgRoute,
                precio:precio,
                stock:stock
            }
            updateProduct(JSON.stringify(dataToSend2))
        }
    }

    const updateDataInputs = (product)=>{
        setId(product.id);
        setNombre(product.nombre);
        setCategoria(product.categoria)
        setDesc(product.descripcion)
        setDisp(product.disponible)
        setImg(product.imgRoute)
        setprecio(product.precio)
        setStock(product.stock)
    }

    return (
    <div>
        <div className=" container-fluid row">
            <div className="form-group col form-items">
                <label>Nombre</label>
                <input className="form-control" type="name" placeholder="Casco Talla M" required value={nombre} onChange={(e) => {setNombre(e.target.value)}} id="nombre"></input>
            </div>
            <div className="form-group col form-items">
                <label>Categoria</label>
                <select className="form-select" required value={categoria} onChange={(e) => {setCategoria(e.target.value)}}>
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
            <div className="form-group col form-items">
                <label>Descripción</label>
                <input className="form-control" type="text" placeholder="Casco de la marca GW" value={descripcion} onChange={(e) => {setDesc(e.target.value)}}></input>
            </div>
            <div className="form-group col form-items">
                <label>Precio</label>
                <input className="form-control" type="number" placeholder="59.9" required value={precio} onChange={(e) => {setprecio(e.target.value)}}></input>
            </div>
            <div className="form-group col form-items">
                <label>Disponible</label>
                <br></br>
                <select className="form-select" required value={disponible} onChange={(e) => {setDisp(e.target.value)}}>
                    <option></option>
                    <option value={true}>Si</option>
                    <option value={false}>No</option>
                </select>
            </div>
            <div className="form-group col form-items">
                <label>Stock</label>
                <input className="form-control" type="number" placeholder="70" value={stock} onChange={(e) => {setStock(e.target.value)}}></input>
            </div>
            <div className="form-group col form-items">
                <label>Ruta de la imagen</label>
                <input className="form-control" type="text" placeholder="Casco de la marca GW" value={imgRoute} onChange={(e) => {setImg(e.target.value)}}></input>
            </div>
            <button className=" btn btn-dark col form-items send-button" onClick={() => setData("save")}>Guardar</button>
            <button className=" btn btn-dark col form-items send-button" onClick={() => setData("update")}>Actualizar</button>
        </div>
        <Table striped bordered hover responsive>
            <thead>
            <tr>
                <th>Editar</th>
                <th>Eliminar</th>
                <th>Nombre</th>
                <th>Categoria</th>
                <th>Disponible</th>
                <th>Precio</th>
                <th>Stock</th>
            </tr>
            </thead>
            <tbody>
            {
                products.map((product) =>(
                    <tr key={product.id}>
                        <td><button onClick={() => updateDataInputs(product)}>Editar</button></td>
                        <td><button onClick={() => removeProduct(product.id)}>Eliminar</button></td>
                        <td>{product.nombre}</td>
                        <td>{product.categoria}</td>
                        <td>{product.disponible?("si"):("no")}</td>
                        <td>{product.precio}</td>
                        <td>{product.stock}</td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    </div>
    )
}

function removeProduct(id){
    axios.delete("http://127.0.0.1:8080/api/v1/product/"+id)
    .then(console.log("Registro eliminado exitosamente"))
    .catch(error => console.error("Error:"+error))
}

function sendProduct(product){
    axios.post("http://127.0.0.1:8080/api/v1/product/save", product, {headers:{'Content-Type':'application/json'}})
    .then("data send")
    .catch(error => console.error("Error:"+error))
}

function updateProduct(product){
    axios.put("http://127.0.0.1:8080/api/v1/product/update", product, {headers:{'Content-Type':'application/json'}})
    .then("data updated")
    .catch(error => console.error("Error:"+error))
}


export default TablaListado;

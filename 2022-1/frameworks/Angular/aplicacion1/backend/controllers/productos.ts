import {Request, Response} from 'express';

export const getProductos=(req:Request, res:Response)=>{
    res.json({
        msg:'getProductos'
    })
}

export const getProducto=(req:Request, res:Response)=>{
    const {idProducto}=req.params;
    
    res.json({
        msg:'getProducto',
        idProducto
    })
}

export const postProducto=(req:Request, res:Response)=>{
    const {body}=req;
    res.json({
        msg:'postProducto',
        body
    })

}

export const putProducto=(req:Request, res:Response)=>{
    const {idProducto}=req.params;
    const {body}=req;
    res.json({
        msg:'putProducto',
        body
    })
}


export const deleteProducto=(req:Request, res:Response)=>{
    const {idProducto}=req.params;
    res.json({
        msg:'deleteProducto',
        idProducto
    })
}
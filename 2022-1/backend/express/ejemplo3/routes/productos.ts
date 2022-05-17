import { Router } from "express";
import { getProductos, getProducto, postProducto, putProducto, deleteProducto } from '../controllers/productos';

const router=Router();
router.get('/',getProductos);
router.get('/:idProducto',getProducto);
router.post('/',postProducto);
router.put('/:idProducto',putProducto);
router.delete('/:idProducto',deleteProducto);

export default router;
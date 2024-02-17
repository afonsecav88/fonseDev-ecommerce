import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useNotifications = () => {
  const productAdded = () => toast.success('Producto añadido al carrito !');
  const productUpdated = () => toast.info('Su carrito ha sido actualizado !');
  const productDeleted = () => toast.success('Producto eliminado del carrito');

  return {
    ToastContainer,
    productAdded,
    productUpdated,
    productDeleted,
  };
};

import { useCallback, useState } from 'react'
import { axiosBasic } from '../../axiosConfig.ts'
import { useCart } from '../context/CartContext.tsx'

export const OrderForm = () => {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        address: '',
        phoneNumber: '',
        message: '',
    })

    const handleFieldChange = useCallback((fieldName: string, value: string) => {
          setForm(prevState => ({ ...prevState, [fieldName]: value, }));
        }, []);

    const {
        cartItems,
       } = useCart()
     const products = cartItems.map(el => {
        return { productId: el.product._id, quantity: el.quantity }
    })
    
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
    
        const orderData = {

          products: products,
          user: {
            fullName: form.fullName,
            email: form.email,
            address: form.address,
            phoneNumber: form.phoneNumber,
            message: form.message,
          }
        };
    
        try {
          const responce = await axiosBasic.post('/orders', {
            data: JSON.stringify(orderData),
          });
          console.log(responce)
        } catch (error) {
          console.error('Произошла ошибка', error);
        }
      };

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <div>
                    <label htmlFor="fullName">fullName</label>
                    <input 
                        type="text" 
                        name="fullName" 
                        id="fullName" 
                        value={form.fullName}
                        onChange={(e) => handleFieldChange("fullName", e.target.value)}
                        required/>
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={form.email}
                        onChange={(e) => handleFieldChange("email", e.target.value)}
                        required/>
                </div>
                <div>
                    <label htmlFor="address">address</label>
                    <input 
                        type="text" 
                        name="address" 
                        id="address" 
                        value={form.address}
                        onChange={(e) => handleFieldChange("address", e.target.value)}
                        required/>
                </div>
                <div>
                    <label htmlFor="phoneNumber">phoneNumber</label>
                    <input 
                        type="text" 
                        name="phoneNumber" 
                        id="phoneNumber" 
                        value={form.phoneNumber}
                        onChange={(e) => handleFieldChange("phoneNumber", e.target.value)}
                        required/>
                </div>
                <div>
                    <label htmlFor="message">message</label>
                    <textarea 
                        name="message" 
                        id="message" 
                        rows={5}
                        value={form.message}
                        onChange={(e) => handleFieldChange("message", e.target.value)}
                        ></textarea>
                </div>
                 <div>
                <input type="submit" value='Submit'/>
                    
                </div>
            </form>
        </div>
    )
}
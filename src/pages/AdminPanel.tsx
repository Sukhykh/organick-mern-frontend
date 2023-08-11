import { useCallback, useState } from 'react'
import { axiosBasic } from '../../axiosConfig.ts'

export const AdminPanel = () => {
    const [form, setForm] = useState({
        title: '',
        tag: '',
        rating: 4,
        price: '',
        discount: 0,
        description: '',
        productDescription: '',
        additionalInfo: '',
    })

    const handleFieldChange = useCallback((fieldName: string, value: string) => {
        setForm(prevState => ({ ...prevState, [fieldName]: value, }));
      }, []);

      const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
    
        const formData = new FormData(event.target as HTMLFormElement);
        console.log(formData)
        try {
          const responce = await axiosBasic.post('/products', formData);
          console.log(responce)
        } catch (error) {
          console.error('Произошла ошибка', error);
        }
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">title</label>
                    <input 
                        type="text" 
                        name="title" 
                        id="title" 
                        value={form.title}
                        onChange={(e) => handleFieldChange("title", e.target.value)}
                        required/>
                </div>
                <div>
                    <label htmlFor="tag">tag</label>
                    <input 
                        type="text" 
                        name="tag" 
                        id="tag" 
                        value={form.tag}
                        onChange={(e) => handleFieldChange("tag", e.target.value)}
                        required/>
                </div>
                <div>
                    <label htmlFor="rating">rating</label>
                    <input 
                        type="number" 
                        min={0} 
                        max={5} 
                        name="rating" 
                        id="rating" 
                        value={form.rating}
                        onChange={(e) => handleFieldChange("rating", e.target.value)}
                        required/>
                </div>
                <div>
                    <label htmlFor="price">price</label>
                    <input 
                        type="number" 
                        min={0} 
                        step="0.01"
                        name="price" 
                        id="price" 
                        value={form.price}
                        onChange={(e) => handleFieldChange("price", e.target.value)}
                        required/>
                </div>
                <div>
                    <label htmlFor="discount">discount</label>
                    <input 
                        type="number"
                        min={0} 
                        max={100} 
                        name="discount" 
                        id="discount" 
                        value={form.discount}
                        onChange={(e) => handleFieldChange("discount", e.target.value)}
                        required/>
                </div>
                <div>
                    <label htmlFor="description">description</label>
                    <textarea 
                        name="description" 
                        id="description" 
                        rows={5} 
                        value={form.description}
                        onChange={(e) => handleFieldChange("description", e.target.value)}
                        required></textarea>
                </div>
                <div>
                    <label htmlFor="productDescription">Product Description</label>
                    <textarea 
                        name="productDescription" 
                        id="productDescription" 
                        rows={5} 
                        value={form.productDescription}
                        onChange={(e) => handleFieldChange("productDescription", e.target.value)}
                        required></textarea>
                </div>
                <div>
                    <label htmlFor="additionalInfo">Additional Info</label>
                    <textarea 
                        name="additionalInfo" 
                        id="additionalInfo" 
                        rows={5} 
                        value={form.additionalInfo}
                        onChange={(e) => handleFieldChange("additionalInfo", e.target.value)}
                        required></textarea>
                </div>
                <div>
                    <label htmlFor="image">image</label>
                    <input type="file" name="image" id="image" required/>
                </div>
                <div>
                    <input type="submit" value={'Submit'}/>
                </div>
            </form>
        </div>
    )
}
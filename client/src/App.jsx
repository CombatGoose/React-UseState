import { useState} from "react"

const App = () => {

    const [form, setForm] = useState({ 
        name: "",
        price: ""
    })
    const [products, setProducts] = useState([])
    const handleUpdateForm = (type,value) => { 
        setForm({
            ...form,
            [type]:value
        })
    }
    const handleCreateProduct = () => { 
        setProducts([
            ...products, 
            { 
                ...form
            }
        ])
        setForm({ 
            name: "",
            price: ""
        })
    }

    return (
        <>
            <input 
            type="text"
            placeholder="Write Product Name"
            value={form.name}
            onChange={(e)=>handleUpdateForm("name", e.target.value)}
             />
             <input 
             type="text"
             placeholder="Write Product price"
             value={form.price}
             onChange={(e)=>handleUpdateForm("price", e.target.value)}
              />
             <button onClick={handleCreateProduct}>Create</button>
             <ul> 
                {
                    products.map((el, index) => (
                        <li key={index}>
                            <p>{el.name}</p>
                            <p>{el.price}</p>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default App
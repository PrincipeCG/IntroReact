import {useEffect, useMemo, useState} from "react";

export default function FilterableList (){
        const [searchInput, setSearchInput] = useState("");
        const [items, setItems] = useState([]);


        useEffect(() => {
            const fetchData =async () => {
                try {
                    await new Promise(resolve => setTimeout(resolve, 2000))

                    const data = [
                        {
                            name: "Diego",
                            lastname: "Lechuga",
                            id: 1
                        },
                        {
                            name: "Ana",
                            lastname: "VillaNueva",
                            id: 2
                        },
                        {
                            name: "Juan",
                            lastname: "Perez",
                            id: 3
                        },
                        ]

                        setItems(data);
                        } catch (error){
                            console.error(error);
                        }
                    };
                    
                    fetchData();

                    return () => console.log(" Desmontando Componentes");
            }, [])

            const filteredItems = useMemo (() => { 
                return items.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()) || item.lastname.toLowerCase().includes(searchInput.toLowerCase()));
            }, [items, searchInput]);

            return (
                <div>
                    <h1>Filtrable de nombres</h1>
                    <input 
                        type="text"
                        placeholder= "Busca un nombre..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        />

                        <ul>
                            {filteredItems.map(item => (
                                <li key={item.id}>
                                    <p>{item.name} {item.lastname}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
            )
        }   
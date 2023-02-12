import React, { useState } from 'react';


export default function Form() {
   const [formData, setFormData] = useState({
    name: '',
    email: '',
   });

   const [errors, setErrors] = useState({});

   const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setFormData({
        ...formData, [name]: value,
    });
    };

    const validate = () => {
        let ObjError = {};
        if (formData.name === '') {
            ObjError.name = 'Name is required';
        }

        if (formData.name === '') {
            ObjError.email = 'Email is required';
        }

        setErrors(ObjError);

        return Object.keys(ObjError).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (validate()) {
          
          console.log('Call API ', formData);
          
        }
    };


    return (
        <div className="form">

            
            <form onSubmit={handleSubmit}>
            <div className='name'>
                <label><h3>Name:</h3></label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <p>{errors.name}</p>}
            </div>
            

            <div className="email">
                <label><h3>Email:</h3></label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}
            </div>

            <button type="submit">Submit</button>
            
            </form>

        </div>
    );
}
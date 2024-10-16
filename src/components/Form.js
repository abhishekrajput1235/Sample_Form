import {useState} from 'react';



function Form(){
    const [formData,setformData] = useState(
        {
            firstName:"",
            lastName:"",
            email:"",
            country:"",
            streetAddress:"",
            city:"",
            state:"",
            zipcode:"",
            comments:false,
            Condidates:false,
            offers:false,
            smsMode:"",
        });
    console.log(formData);
    function changeHandler(event){
        const {name,type,checked,value} = event.target;
        setformData(preFormData => {
            return {
                ...preFormData,
                // [event.target.name]:event.target.value,
                [name]:type=== "checkbox" ?checked:value
            }
        })

    }
    function submitHandler(event){
        event.preventDefault();  // 'event' is the object that needs preventDefault
    }
    

    return(
        <div className='m-auto mt-10 w-2/5 '>
            <div className='flex justify-center'>
                <h1 className='text-3xl text-bold font-extrabold uppercase mb-4'>
                    Registration Form
                </h1>
            </div>
            <form className='border-2 p-4 rounded-md shadow hover:shadow-lg' onSubmit={submitHandler}>
                <div className='flex flex-col'>
                    <label htmlFom="firstName" className='mt-1 text-lg'>First Name</label>
                    <input 
                        className='border-2 border-b-sky-400 border-fuchsia-500 rounded-s px-5 py-1'
                        placeholder='Enter First Name'
                        type="text"
                        id='firstName'
                        name='firstName'
                        value={formData.firstName}
                        onChange={changeHandler}
                    
                    />
                </div>
                
                <div className='flex flex-col'>
                    <label htmlFom="lastName" className='mt-1 text-lg'>Last Name</label>
                    <input 
                        className='border-2  border-t-sky-400 border-fuchsia-500 rounded-s px-5 py-1'
                        placeholder='Enter Last Name'
                        type="text"
                        name='lastName'
                        id='lastName'
                        value={formData.lastName}
                        onChange={changeHandler}
                    
                    />
                </div>

                <div className='flex flex-col'>
                    <label htmlFom="email" className='mt-1 text-lg'>Email</label>
                    <input 
                        className='border-2 border-b-sky-400 border-fuchsia-500 rounded-s px-5 py-1'
                        placeholder='Enter your email'
                        type="email"
                        name='email'
                        id='email'
                        value={formData.email}
                        onChange={changeHandler}
                    
                    />
                </div>

                <div className='flex flex-col'>
                    <select 
                    className='border-2 border-t-sky-400 border-fuchsia-500 rounded-s px-5 py-1 mt-4'
                    onChange={changeHandler}
                    name='country'
                    value={formData.country}
                    >   
                        <option value='none'>Select Country</option>
                        <option value='India'>India</option>
                        <option value='USA'>USA</option>
                        <option value='UK'>UK</option>
                        <option value='Dubai'>Dubai</option>

                    </select>
                </div>

                <div className='flex flex-col'>
                    <label htmlFom="streetAddress" className='mt-1 text-lg'>Street Address</label>
                    <input 
                        className='border-2 border-b-sky-400 border-fuchsia-500 rounded-s px-5 py-1'
                        placeholder='Enter your Street Address'
                        type='text'
                        name='streetAddress'
                        id='streetAddress'
                        value={formData.streetAddress}
                        onChange={changeHandler}
                    
                    />
                </div>

                <div className='flex flex-col'>
                    <label htmlFom="city" className='mt-1 text-lg'>City</label>
                    <input 
                        className='border-2 border-t-sky-400 border-fuchsia-500 rounded-s px-5 py-1'
                        placeholder='Enter your Street Address'
                        type="text"
                        name='city'
                        id='city'
                        value={formData.city}
                        onChange={changeHandler}
                    
                    />
                </div>

                <div className='flex flex-col'>
                    <label htmlFom="state" className='mt-1 text-lg'>State / Province</label>
                    <input 
                        className='border-2 border-b-sky-400 border-fuchsia-500 rounded-s px-5 py-1'
                        placeholder='Enter your Street Address'
                        type="text"
                        name='state'
                        id='state'
                        value={formData.state}
                        onChange={changeHandler}
                    
                    />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="zip" className='mt-1 text-lg' >Zip / Postal code</label>
                    <input 
                        className='border-2 border-t-sky-400 border-fuchsia-500 rounded-s px-5 py-1'
                        placeholder='Enter your Street Address'
                        type="text"
                        name='zipcode'
                        id='zipcode'
                        value={formData.zipcode}
                        onChange={changeHandler}
                    
                    />
                </div>

                <div className='flex flex-col'>
                    <fieldset className='mt-2'>
                        <legend className='mt-5 text-lg'>By Email</legend>
                        <input 
                            className=' mr-5 h-5 w-5'
                            type='checkbox'
                            name='comments'
                            id='comments'
                            // value={formData.comments} checkbox have no value attribute that's why we use checked 
                            checked={formData.comments}
                            onChange={changeHandler}
                        />
                        <label htmlFor='comments' className='text-lg font-medium'>Comments</label>
                        <h2 className='ml-10 text-slate-400'>Get notified when someones posts a comment on a posting.</h2>

                        <input 
                            className=' mr-5 h-5 w-5'
                            type='checkbox'
                            name='Condidates'
                            id='Condidates'
                            // value={formData.comments} checkbox have no value attribute that's why we use checked 
                            checked={formData.Condidates}
                            onChange={changeHandler}
                        />
                        <label htmlFor='Condidates' className='text-lg font-medium'>Condidates</label>
                        <h2 className='ml-10 text-slate-400'>Get notified when conditates apply for jobs.</h2>
                    
                        <input 
                            className=' mr-5 h-5 w-5'
                            type='checkbox'
                            name='offers'
                            id='offers'
                            // value={formData.comments} checkbox have no value attribute that's why we use checked 
                            checked={formData.offers}
                            onChange={changeHandler}
                        />
                        <label htmlFor='offers' className='text-lg font-medium'>Offers</label>
                        <h2 className='ml-10 text-slate-400'>Get notified when a conditate accepts or rejects an offer.</h2>
                    </fieldset>

                    
                    <fieldset className='mt-2'>
                        <legend className='mt-5 text-lg'>Push Notifications</legend>
                        <h2 className='ml-10'>These are delivered via sms to your mobile phone.</h2>
                        <input
                            className=' mr-5 h-5 w-5'
                            type='radio'
                            name='smsMode'
                            id='Everything'
                            value='Everything'
                            onChange={changeHandler}
                        />
                        <label htmlFor='Everything' className='text-lg'>Everything</label>
                        <br/>

                        <input
                            className=' mr-5 h-5 w-5'
                            type='radio'
                            name='smsMode'
                            id='same-as-email'
                            value='same-as-email'
                            onChange={changeHandler}
                        />
                        <label htmlFor='same-as-email' className='text-lg'>Same as email</label>
                        <br/>

                        <input
                            className=' mr-5 h-5 w-5'
                            type='radio'
                            name='smsMode'
                            id='no-push-notifications'
                            value='no-push-notifications'
                            onChange={changeHandler}
                        />
                        <label htmlFor='no-push-notifications' className='text-lg'>No push notifications</label>
                        <br/>
                    </fieldset>
                </div>
                <div className='flex justify-center mt-4'>
                    <button type="submit" className='bg-blue-500 text-white p-2 px-10 rounded hover:bg-blue-600'>
                        Submit
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Form;









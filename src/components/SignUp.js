import React, {useState} from 'react';
import styles from './SignUp.module.css';

function SignUp() {
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    })
    const changeHandler = event => {
        setData({...data,[event.target.name]:event.target.value })
    }
    const submitHandler = event => {
        event.preventDefault();
    }
    return (
        <div className={styles.container}> 
            <div>
                <form onSubmit={submitHandler}>
                    <div className={styles.containerInput}>
                        <div className={styles.itemsInput1}>
                            <h2>پیام به ترخینه</h2>
                                <input type='text' name='name' placeholder='نام ونام خانوادگی' value={data.name}  onChange={changeHandler}/>
                                <input type='tel' name='phone' placeholder='شماره تماس' value={data.phone} onChange={changeHandler}/>
                                <input type='email' name='email' placeholder='آدرس ایمیل(اختیاری)' value={data.email} onChange={changeHandler}/>
                        </div>
                        <div className={styles.itemsInput2}>
                                <input type='text' name='message' placeholder='پیام شما' value={data.message}  onChange={changeHandler}/>
                                <button type='button'>ارسال پیام</button>
                        </div>
                    </div>   
                </form>
            </div>
        </div>  
    )
}
export default SignUp;

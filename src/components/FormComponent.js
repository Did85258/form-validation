import './FormComponent.css'
import {useState} from "react"

const FormComponent = ()=>{
    //create state
    const [userName,setUserName] = useState('')
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [repassword,setRePassword] = useState('')


    const [errorUserName,setErrorUserName] = useState('')
    const [errorEmail,setErrorEmail] = useState('');
    const [errorPassword,setErrorPassword] = useState('')
    const [errorRepassword,setErrorRePassword] = useState('')

    const [userNameColor,setUserNameColor] = useState('')
    const [emailColor,setEmailColor] = useState('')
    const [passwordColor,setPasswordColor] = useState('')
    const [RepasswordColor,setRepasswordColor] = useState('')

    const validateForm = (e)=>{
        e.preventDefault()

        if(userName.length>8){
            setErrorUserName('')
            setUserNameColor('green')
        }else{
            setErrorUserName('กรุณาป้อนชื่อผู้ใช้จำนวน 8 ตัวอักษร')
            setUserNameColor('red')
        }

        if(email.includes("@")){
            setErrorEmail('')
            setEmailColor('green')
        }else{
            setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง')
            setEmailColor('red')
        }

        if(password.length>8){
            setErrorPassword('')
            setPasswordColor('green')
        }else{
            setErrorPassword('รหัสผ่านต้องมีมากกว่า8ตัวอักษร')
            setPasswordColor('red')
        }

        if(password==repassword && repassword!=""){
            setErrorRePassword('')
            setRepasswordColor('green')
        }else{
            setErrorRePassword('รหัสผ่านไม่ตรงกัน')
            setRepasswordColor('red')
        }
    }

    return (
        <div className="container">
            <form className="form" onSubmit={validateForm}>
                <div className="form-control">
                    <label>ชื่อผู้ใช้</label>
                    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}} />
                    <small style={{color:userNameColor}}>{errorUserName}</small>
                </div>
                <div className="form-control">
                    <label>อีเมล</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}} />
                    <small style={{color:emailColor}}>{errorEmail}</small>
                </div>
                <div className="form-control">
                    <label>รหัสผ่าน</label>
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}} />
                    <small style={{color:passwordColor}}>{errorPassword}</small>
                </div>
                <div className="form-control">
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type="text" value={repassword} onChange={(e)=>setRePassword(e.target.value)} style={{borderColor:RepasswordColor}} />
                    <small style={{color:RepasswordColor}}>{errorRepassword}</small>
                </div>
                <button type="submit">ลงทะเบียน</button>
                
            </form>
        </div>
    )
}

export default FormComponent